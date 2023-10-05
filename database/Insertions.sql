--Genre table insert
insert into Genre(genreName)
select distinct genre from omdb_data;

--TitleBasics table insert
insert into Titlebasics(titleid, titletype, isadult, startyear, endyear, poster, plot)
select tconst, title_basics.titletype, isadult, startyear, endyear, poster, plot from omdb_data natural full outer join title_basics;

--GenreAssociation table insert
insert into Genreassociation(genreid, titleid)
select genre.genreid, tconst from omdb_data natural join title_basics, genre
where genres = genre.genrename;

--Person table insert
insert into Person(personID, primaryname, dateOfBirth, dateOfDeath)
select distinct nconst, primaryname, birthyear, deathyear from name_basics natural full outer join title_principals;

--PersonAssociation table insert
INSERT INTO PersonAssociation(titleID, ordering, personID, job)
SELECT DISTINCT tconst, ordering, nconst, category
FROM title_principals;

--Episode table insert
insert into Episode(titleID, episodetitleid, seasonnumber, episodenumber)
SELECT parenttconst, tconst, seasonnumber, episodenumber from title_episode;

--TitleAkas table insert
insert into TitleAkas(titleID, ordering, titleName, region, typename, languageName, attribute, isOriginalTitle)
select titleID, ordering, title, region, types, language, attributes, isOriginalTitle  from title_akas;

--Test Data for userRelation
INSERT INTO UserRelation(userid, firstName, lastName, email, pwdHash, isVerified, isActive) VALUES
(1, 'Lasse', 'Doe', 'lasse.doe@example.com', 'hashed_password1', TRUE, TRUE),
(2, 'Cristina', 'Doe', 'cristina.doe@example.com', 'hashed_password2', TRUE, TRUE),
(3, 'Karsten', 'Doe', 'karsten.doe@example.com', 'hashed_password3', TRUE, TRUE),
(4, 'Alex', 'Doe', 'alex.doe@example.com', 'hashed_password4', TRUE, TRUE),
(5, 'Bianca', 'Doe', 'bianca.doe@example.com', 'hashed_password5', TRUE, TRUE);

--Test Data for Rating
INSERT INTO RATING(titleid, userid, grade, reviewtext, ratedate) VALUES
('tt11591580', 1, 4, 'Good movie', '2023-10-05'),
('tt11591580', 2, 2, 'Meh movie', '2023-10-05');

--Drop source datas
drop table title_ratings;
drop table title_principals;
drop table title_episode;
drop table title_crew;
drop table title_basics;
drop table title_akas;
drop table omdb_data;
drop table name_basics;
