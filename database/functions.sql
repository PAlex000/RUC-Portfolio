--Need to do the insertion for the search history
--D2
drop function if exists string_search(s varchar(255));
create or replace function string_search (s varchar(255))
returns table (
		titleid varchar(255),
		titleName varchar(255))
language sql as
$$
	select titlebasics.titleid, titlename
	from titlebasics natural join titleakas
	where titleakas.titlename like '%' || s || '%' or titlebasics.plot like '%' || s || '%';
$$;

--D3
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
			) as test
			where titlebasics.titleid = test.titleid
);
RETURN NEW;
END; $$ LANGUAGE plpgsql;

drop trigger if exists update_movie_rating_trigger on rating;
CREATE TRIGGER update_movie_rating_trigger
  AFTER Insert
  ON rating
  EXECUTE PROCEDURE update_movie_rating_fnc();

drop function user_rate(tid varchar(255), pid int4, grade int, reviewText varchar(255));
create or replace PROCEDURE user_rate(tid varchar(255), pid int4, grade int, reviewText varchar(255) default '')
language plpgsql as
$$
	begin
	insert into rating values (tid, pid, grade, reviewtext, CURRENT_DATE);
	end;
$$;

--call user_rate('tt17007386', 3, 10);
--select * from titlebasics where titleid = 'tt17007386';
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
drop function if exists popular_actor(title VARCHAR(100))
create or replace function popular_actor(title VARCHAR(100))
returns table (
actor_name varchar(100)
)
language sql as $$

(
SELECT primaryname FROM (
SELECT DISTINCT primaryname, ps.ordering from person 
natural join personAssociation ps  
 where ps.job in ('actress', 'actor') and 
 ps.titleid in (Select DISTINCT titleid from titleakas where titlename = title) 
ORDER BY  ps.ordering ASC)
 );

$$;

select popular_actor('The Twilight Zone');

select popular_actor('Friends');

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

select similar_movie('The Twilight Zone');
select similar_movie('Friends');


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

Select word, counter from person_words('Fred Astaire', 10)

Select word, counter from person_words('Jennifer Aniston', 10)
