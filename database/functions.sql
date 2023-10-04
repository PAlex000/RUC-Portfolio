--Need to do the insertion for the search history
--D2
drop function if exists string_search(s varchar(255));
create or replace function string_search (s varchar(255))
returns table (
		titleid varchar(255),
		plot varchar(255))
language sql as
$$
	select titleid, title
	from titlebasics natural join titleakas
	where titleakas.title like '%' || s || '%' or titleakas.plot like '%' || s || '%';
$$;


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