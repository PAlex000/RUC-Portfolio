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

insert into TitleAkas(titleID, title)
select distinct titleID, title from title_akas;

--Region table insert

insert into region(regionName)
select distinct region from title_akas;

-- RegionAssociation table insert

insert into regionassociation(titleID, regionid)
SELECT distinct titleID, regionID from title_akas NATURAL join region
where region.regionname = title_akas.region;

--Attribute table insert
insert into Attribute(attName)
select distinct attributes from title_akas;

--AttributeAssociation insert
insert into AttributeAssociation(titleID, attID)
select distinct titleID, attID from title_akas natural join Attribute
where Attribute.attName = title_akas.attributes;

--Ordering table insert
insert into Ordering(orderNumber)
select distinct ordering from title_akas;

--OrderingAssociation table insert
insert into OrderingAssociation(titleID, orderID)
select distinct titleID, orderID from title_akas natural join ordering
where ordering.ordernumber = title_akas.ordering;

--Type table insert
insert into Type(typeName)
select distinct types from title_akas;

--TypeAssociation table insert
insert into TypeAssociation(titleID, TypeID)
select distinct titleID, TypeID from title_akas natural join Type
where Type.typeName = title_akas.types;

--Language table insert
insert into Language(langName)
select distinct language from title_akas;

--LanguageAssociation insert

insert into LanguageAssociation(titleID, langID)
select distinct titleID, langID from title_akas natural join Language
where Language.langName = title_akas.language; 