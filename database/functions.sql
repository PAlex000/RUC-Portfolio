--D1
--USER FUNCTIONS
drop procedure if exists create_user(firstName varchar(40), lastName varchar(40), email varchar(150), pwdHash varchar(255), phoneno varchar(20), isverified bool, isactive bool);
create procedure create_user(
	firstName varchar(40),
	lastName varchar(40),
	email varchar(150),
	pwdHash varchar(255),
	phoneno varchar(20) default null,
	isverified bool default false,
	isactive bool default false)
language sql as
$$
	insert into userrelation(
		firstName,
		lastName,
		email,
		pwdHash,
		phoneno,
		isverified,
		isactive
		)
	values (
		firstName,
		lastName,
		email, pwdHash,
		phoneno,
		isverified,
		isactive
		);
$$;

drop procedure if exists delete_user(idUser int4);
create procedure delete_user(idUser int4)
language sql as
$$
	delete from userrelation where userid = idUser;
$$;

--BOOKMARK TRIGGERS/FUNCTION
drop trigger if exists update_bookmarks_before_deletion_trigger on userrelation;
drop function if exists update_bookmarks_before_deletion();
CREATE OR REPLACE FUNCTION update_bookmarks_before_deletion()
RETURNS trigger AS $$
BEGIN
    delete from bookmarks where userid = old.userid;
RETURN OLD;
END; $$ LANGUAGE plpgsql;


CREATE TRIGGER update_bookmarks_before_deletion_trigger
  Before DELETE
  ON userrelation
	for each row
  EXECUTE PROCEDURE update_bookmarks_before_deletion();

drop procedure if exists bookmark_movie(idUser int4, idTitle varchar(255), stat bool);
create procedure bookmark_movie(idUser int4, idTitle varchar(255), stat bool)
language sql as
$$
	insert into bookmarks(userid, titleid, status)
	values(idUser, idTitle, stat);
$$;

drop procedure if exists delete_bookmark_movie(idUser int4, idTitle varchar(255));
create procedure delete_bookmark_movie(idUser int4, idTitle varchar(255))
language sql as
$$
	delete from bookmarks where bookmarks.userid = idUser and bookmarks.titleid = idTitle;
$$;

--RATING TRIGGERS
drop trigger if exists update_rating_before_deletion_trigger on userrelation;
drop function if exists update_rating_before_deletion();
CREATE OR REPLACE FUNCTION update_rating_before_deletion()
RETURNS trigger AS $$
BEGIN
    delete from rating where userid = old.userid;
RETURN OLD;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER update_rating_before_deletion_trigger
  Before DELETE
  ON userrelation
	for each row
  EXECUTE PROCEDURE update_rating_before_deletion();

--D2
drop procedure if exists string_search_insert(idUser int4, s varchar(255));
create procedure string_search_insert(idUser int4, s varchar(255))
language plpgsql as
$$
	begin
	if exists (select search.userid, search.searchString from search where search.userid = idUser and search.searchString = s)
	THEN
		delete from search where search.userid = idUser and search.searchString = s;
		insert into search values (idUser, s, CURRENT_DATE);
	ELSE
		insert into search values (idUser, s, CURRENT_DATE);
	END IF;
	end;
$$;

drop function if exists string_search(userid int4, s varchar(255));
create or replace function string_search (userid int4, s varchar(255))
returns table (
		titleid varchar(255),
		titleName varchar(255))
language sql as
$$
	call string_search_insert(userid, s);
	select titlebasics.titleid, titlename
	from titlebasics natural join titleakas
	where titleakas.titlename like '%' || s || '%' or titlebasics.plot like '%' || s || '%';
$$;

drop trigger if exists update_search_before_deletion_trigger on userrelation;
drop function if exists update_search_before_deletion();
CREATE OR REPLACE FUNCTION update_search_before_deletion()
RETURNS trigger AS $$
BEGIN
    delete from search where userid = old.userid;
RETURN OLD;
END; $$ LANGUAGE plpgsql;


CREATE TRIGGER update_search_before_deletion_trigger
  Before DELETE
  ON userrelation
	for each row
  EXECUTE PROCEDURE update_search_before_deletion();

--D3
drop trigger if exists update_movie_rating_trigger on rating;
drop function if exists update_movie_rating_fnc();
CREATE OR REPLACE FUNCTION update_movie_rating_fnc()
RETURNS trigger AS $$
BEGIN
    UPDATE titlebasics
    SET movie_rating = (
		select SUM(avg_grade * num_votes) / SUM(num_votes)
		from
			(
			SELECT titleid, AVG(grade) as avg_grade, COUNT(userID) as num_votes
			FROM Rating
			GROUP BY titleid
			) as subquery
			where titlebasics.titleid = subquery.titleid
);
	RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER update_movie_rating_trigger
  AFTER Insert
  ON rating
  EXECUTE PROCEDURE update_movie_rating_fnc();

drop procedure if exists rate(tid varchar(255), pid int4, grade int, reviewText varchar(255));
create or replace PROCEDURE rate(tid varchar(255), pid int4, grade int, reviewText varchar(255) default '')
language plpgsql as
$$
	begin
	insert into rating values (tid, pid, grade, reviewtext, CURRENT_DATE);
	end;
$$;

--D6. CoActor Frequency

CREATE OR REPLACE FUNCTION find_frequent_coactors(pa_id VARCHAR(255))
RETURNS TABLE(
    co_actor_name VARCHAR(255),
    frequency bigint
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        P.primaryName as co_actor_name,
        COUNT(PA2.titleID) as frequency
    FROM 
        PersonAssociation PA1
    JOIN 
        PersonAssociation PA2 ON PA1.titleID = PA2.titleID AND PA1.personID != PA2.personID
    JOIN 
        Person P ON PA2.personID = P.personID
    WHERE 
        PA1.personID = pa_id AND PA1.job IN ('actor', 'actress') AND PA2.job IN ('actor', 'actress')
    GROUP BY 
        P.primaryName
    ORDER BY 
        frequency DESC;
END; $$ LANGUAGE plpgsql;

--D7. Name Ratings
--Note: This function should be triggered everytime a movie is rated. To be discussed how to set a trigger for it up.
-- To test if working with test data:

--SELECT * FROM person
--ORDER BY name_rating ASC;

CREATE OR REPLACE FUNCTION update_name_ratings()
RETURNS VOID AS $$
BEGIN
    UPDATE Person
    SET name_rating = subquery.weighted_avg_rating
    FROM (
        SELECT 
            PA.personID,
            SUM(avg_grade * num_votes) / SUM(num_votes) as weighted_avg_rating
        FROM 
            PersonAssociation PA
        JOIN (
            SELECT 
                titleID, 
                AVG(grade) as avg_grade, 
                COUNT(userID) as num_votes
            FROM 
                Rating
            GROUP BY 
                titleID
        ) AS TitleAvgRating ON PA.titleID = TitleAvgRating.titleID
        WHERE 
            PA.job IN ('actor', 'actress')
        GROUP BY 
            PA.personID
    ) AS subquery
    WHERE Person.personID = subquery.personID;
END; $$ LANGUAGE plpgsql;

--D8. Popular actors
drop function if exists popular_actor(title VARCHAR(100));
create or replace function popular_actor(title VARCHAR(100))
returns table (
actor_name varchar(100))
language sql as $$
(
SELECT primaryname FROM (
SELECT DISTINCT primaryname, ps.ordering from person 
natural join personAssociation ps  
	where ps.job in ('actress', 'actor') and ps.titleid in
		(Select DISTINCT titleid from titleakas where titlename = title) 
ORDER BY ps.ordering ASC)
);
$$;

--select popular_actor('The Twilight Zone');

--select popular_actor('Friends');

--D9. Similar movies:

create or replace function similar_movie( movie VARCHAR(20))
returns table (
movie_name varchar(100)
)
language sql as $$

(SELECT Distinct titlename from titleakas t natural join genreassociation g 
 where t.titlename <> movie and
	g.genreid IN
 (SELECT genreid from genreassociation g  natural join titleakas t      
 where t.titlename = movie ));

$$;

--select similar_movie('The Twilight Zone');
--select similar_movie('Friends');


--D10. Frequent person words:
create or replace function person_words(person VARCHAR(100), max_length int)
returns table (
word varchar(100),
counter int
)
language sql as $$
Select  word, count(word) counter from wi where tconst in
(SELECT titleid from personassociation natural join person p where p.primaryname=person)
GROUP BY word
ORDER BY COUNT(word) DESC
LIMIT max_length;
$$;

--Select word, counter from person_words('Fred Astaire', 10)

--Select word, counter from person_words('Jennifer Aniston', 10)
