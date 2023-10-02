--Genre table insert
insert into Genre(genreName)
select distinct genre from omdb_data;

--titlebasics
insert into titlebasics(titleid, genreid, titletype, isadult, startyear, endyear)
select tconst, genre.genreid, type, isadult, startyear, endyear from omdb_data natural join title_basics, genre
where genres = genre.genrename;

--Genre association insert
insert into genreassociation(genreid, titleid)
select genreid, titleid from titlebasics;