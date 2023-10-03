drop table if exists Genre;
create table Genre(
	genreID SERIAL NOT NULL,
	genreName varchar(100) NOT NULL,
	primary key (genreID)
);

drop table if exists TitleBasics;
Create table TitleBasics(
	titleID varchar(255) NOT NULL,
	titleType varchar(100) NOT NULL,
	isAdult boolean NOT NULL,
	startYear varchar(255) NOT NULL,
	endYear varchar(255) NOT NULL,
	primary key (titleID)
);

drop table if exists TitleAkas;
CREATE TABLE TitleAkas(
	titleID varchar(255) NOT NULL,
	title varchar(100) not null,
	isOriginalTitle boolean,
	poster varchar(255),
	plot varchar(255),
	primary key (titleID, title),
	foreign key (titleID) references TitleBasics(titleID)
);

drop table if exists Region;
Create table Region (
    regionID SERIAL int not null,
    regionName varchar(255) not null,
    PRIMARY KEY (regionID)
);

drop table if exists RegionAssociation;
Create table RegionAssociation (
    titleID varchar not null,
	regionID int,
    PRIMARY KEY (titleID, regionID)
	FOREIGN KEY (titleID) REFERENCES TitleAkas(titleID),
    FOREIGN KEY (regionID) REFERENCES Region(regionID)
);

drop table if exists Type;
Create table Type (
    typeID SERIAL int not null,
    typeName varchar(255) not null,
    PRIMARY KEY (typeID)
);

drop table if exists TypeAssociation;
Create table TypeAssociation (
    titleID varchar not null,
    typeID int not null,
    PRIMARY KEY (titleID, typeID)
	FOREIGN KEY (titleID) REFERENCES TitleAkas(titleID),
    FOREIGN KEY (typeID) REFERENCES Type(typeID)
);


drop table if exists Language;
Create table Language (
    langID SERIAL int not null,
    langName varchar(255) not null,
    PRIMARY KEY (langID)
);

drop table if exists LanguageAssociation;
Create table LanguageAssociation (
    titleID varchar not null,
    langID int not null,
    PRIMARY KEY (titleID, langID)
	FOREIGN KEY (titleID) REFERENCES TitleAkas(titleID),
    FOREIGN KEY (langID) REFERENCES Language(langID)
);

drop table if exists Attribute;
Create table Attribute (
    attID SERIAL int not null,
    attName varchar(255) not null,
    PRIMARY KEY (attID)
);

drop table if exists AttributeAssociation;
Create table AttributeAssociation (
    titleID varchar not null,
    attID int not null,
    PRIMARY KEY (titleID, attID)
	FOREIGN KEY (titleID) REFERENCES TitleAkas(titleID),
    FOREIGN KEY (attID) REFERENCES Attribute(attID)
);

drop table if exists Ordering;
Create table Ordering (
    orderID SERIAL int not null,
    orderNumber int not null,
    PRIMARY KEY (orderID)
);

drop table if exists OrderingAssociation;
Create table OrderingAssociation (
    titleID varchar not null,
    orderID int not null,
    PRIMARY KEY (titleID, orderID)
	FOREIGN KEY (titleID) REFERENCES TitleAkas(titleID),
    FOREIGN KEY (orderID) REFERENCES Ordering(orderID)
);

drop table if exists Episode;
Create table Episode (
    titleID varchar(255) not null,
    episodeTitleID varchar(255) not null,
	seasonNumber int,
	episodeNumber int,
    PRIMARY KEY (titleID, episodeTitleID),
	FOREIGN KEY (titleID) REFERENCES TitleBasics(titleID)
);

drop table if exists GenreAssociation;
create table GenreAssociation(
	genreID SERIAL NOT NULL,
    titleID varchar(255) NOT NULL,
    primary key (titleID, genreID),
    FOREIGN KEY (genreID) REFERENCES Genre(genreID),
    FOREIGN KEY (titleID) REFERENCES TitleBasics(titleID)
);

drop table if exists Person;
Create table Person(
	personID varchar(255) NOT NULL,
	primaryname varchar(255) NOT NULL,
	dateOfBirth varchar(255) NOT NULL,
	dateOfDeath varchar(255) NOT NULL,
	primary key (personID)
);

drop table if exists PersonAssociation;
Create table PersonAssociation(
	titleID varchar(255) NOT NULL,
	personID varchar(255) NOT NULL,
	job varchar(255) NOT NULL,
	primary key (titleID, personID),
	FOREIGN KEY (titleID) REFERENCES TitleBasics(titleID),
    FOREIGN KEY (personID) REFERENCES Person(personID)
);
