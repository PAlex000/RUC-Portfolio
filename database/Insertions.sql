--Genre table insert
insert into Genre(genreName)
select distinct genre from omdb_data;

--TitleBasics table insert
insert into titlebasics(titleid, titletype, isadult, startyear, endyear)
select tconst, title_basics.titletype, isadult, startyear, endyear from omdb_data natural full outer join title_basics;

--GenreAssociation table insert
insert into genreassociation(genreid, titleid)
select genre.genreid, tconst from omdb_data natural join title_basics, genre
where genres = genre.genrename;

--Person table insert
insert into Person(personID, primaryname, dateOfBirth, dateOfDeath)
select nconst, primaryname, birthyear, deathyear from name_basics;

--Episode table insert
insert into episode(titleID, episodetitleid, seasonnumber, episodenumber)
SELECT parenttconst, tconst, seasonnumber, episodenumber from title_episode;

--TitleAkas table insert

insert into TitleAkas(titleID, titleName)
select distinct titleID, title from title_akas;
