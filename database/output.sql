--Creating test datas
--users
call create_user('Lasse', 'Doe', 'lasse.doe@example.com', 'hashed_password1', '01234', TRUE, TRUE);
call create_user('Cristina', 'Doe', 'cristina.doe@example.com', 'hashed_password2', '56789', TRUE, TRUE);
call create_user('Karsten', 'Doe', 'karsten.doe@example.com', 'hashed_password3', '01234', TRUE, TRUE);
call create_user('Alex', 'Doe', 'alex.doe@example.com', 'hashed_password4', '01234', TRUE, TRUE);
call create_user('Bianca', 'Doe', 'bianca.doe@example.com', 'hashed_password5', '01234', TRUE, TRUE);

--bookmarks
call bookmark_movie(1, 'tt7535994', true);
call bookmark_movie(1, 'tt7554052', true);
call bookmark_movie(1, 'tt7554866', true);
call bookmark_movie(2, 'tt7555000', true);
call bookmark_movie(2, 'tt7535994', true);

--ratings
call rate('tt7555000', 2, 5);
call rate('tt7555000', 3, 8);
call rate('tt7554866', 2, 1);

--searchHistory
select distinct * from string_search(1, 'Daniel and Emily are best friends that love each other. While Daniel is ready to take the next step in their relationship, it takes a dramatic experience for Emily to realize what she has always, truly wanted.');
select distinct * from string_search(1, 'Hämärän rajamailla');
select distinct * from string_search(2, 'Cause life gets complicated, baby.');

--D1
select * from userrelation;
call create_user('6th', 'Chosen', 'chose.doe@example.com', 'hashed_pwd', '012', true, true);
select * from userrelation;
call delete_user(6);
select * from userrelation;

select * from bookmarks;
call bookmark_movie(5, 'tt7555000', false);
select * from bookmarks;
call delete_bookmark_movie(5, 'tt7555000');
select * from bookmarks;

--D2
select * from search;
select distinct * from string_search(5,'Cause life gets complicated, baby.');
select * from search;
select * from titlebasics where plot like '%Cause life gets complicated, baby.%';

--D3
select * from titlebasics where movie_rating is not null;
select * from rating;
call rate('tt7147062', 5, 10, 'Great Movie');
call rate('tt7147062', 4, 1, 'The worst');
select * from titlebasics where movie_rating is not null;
select * from rating;

--Triggers for D1/D2/D3
select * from rating where userid = 2;
select * from search where userid = 2;
select * from bookmarks where userid = 2;
select * from userrelation where userid = 2;
call delete_user(2);
select * from rating where userid = 2;
select * from search where userid = 2;
select * from bookmarks where userid = 2;
select * from userrelation where userid = 2;

--D5
SELECT * FROM structured_search_actors('Jerry Seinfeld');
SELECT * FROM structured_search_actors('Judy Garland');
SELECT * FROM structured_search_actors('Alice Cooper');

--D6

SELECT * FROM find_frequent_coactors('nm0001456');
SELECT * FROM find_frequent_coactors('nm0001424');
SELECT * FROM find_frequent_coactors('nm0001343');

--D8
select popular_actor('The Twilight Zone');
select popular_actor('Friends');
select popular_actor('Inception');


--D9
select similar_movie('The Twilight Zone');
select similar_movie('Friends');
select similar_movie('Inception');

--D10
Select word, counter from person_words('Fred Astaire', 10)
Select word, counter from person_words('Jennifer Aniston', 20)
SELECT word, counter FROM person_words('Leonardo DiCaprio', 5);

