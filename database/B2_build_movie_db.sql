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
	ordering int NOT NULL,
	region varchar(100) not null,
	language varchar(100) not null,
	types varchar(100) not null,
	attributes varchar(100) not null,
	isOriginalTitle boolean,
	poster varchar(255) not null,
	plot varchar(255) not null,
	primary key (titleID, title),
	foreign key (titleID) references TitleBasics(titleID)
);

drop table if exists Episode;
Create table Episode (
    titleID varchar(255) not null,
    episodeTitleID INT not null,
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
	name varchar(255) NOT NULL,
	dateOfBirth date NOT NULL,
	dateOfDeath date NOT NULL,
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
