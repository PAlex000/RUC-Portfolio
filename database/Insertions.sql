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

--Drop source datas
drop table title_ratings;
drop table title_principals;
drop table title_episode;
drop table title_crew;
drop table title_basics;
drop table title_akas;
drop table omdb_data;
drop table name_basics;
