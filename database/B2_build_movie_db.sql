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
	poster varchar(255),
    plot text,
	primary key (titleID)
);

drop table if exists TitleAkas;
CREATE TABLE TitleAkas(
	titleID varchar(255) NOT NULL,
    ordering SERIAL not null,
	titleName varchar(255),
    region varchar(255),
    attribute varchar(255),
    typeName varchar (255),
    LanguageName varchar(255),
	isOriginalTitle boolean,
	primary key (titleID, ordering),
	foreign key (titleID) references titlebasics(titleID)
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
	primaryname varchar(255),
	dateOfBirth varchar(255),
	dateOfDeath varchar(255),
	primary key (personID)
);

drop table if exists PersonAssociation;
Create table PersonAssociation(
	titleID varchar(255) NOT NULL,
	personID varchar(255) NOT NULL,
	ordering int not null,
	job varchar(255) NOT NULL,
	primary key (titleID, personID, ordering),
	FOREIGN KEY (titleID) REFERENCES TitleBasics(titleID),
    FOREIGN KEY (personID) REFERENCES Person(personID)
);
