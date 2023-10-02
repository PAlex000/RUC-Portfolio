--Genre table insert
insert into Genre(genreName)
select distinct genre from omdb_data;

--TitleBasics table insert
insert into titlebasics(titleid, titletype, isadult, startyear, endyear)
select tconst, type, isadult, startyear, endyear from omdb_data natural join title_basics;

--GenreAssociation table insert
insert into genreassociation(genreid, titleid)
select genre.genreid, tconst from omdb_data natural join title_basics, genre
where genres = genre.genrename;
