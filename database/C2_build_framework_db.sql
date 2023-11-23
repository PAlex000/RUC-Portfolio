drop table if exists UserRelation;
Create table UserRelation(
	userID SERIAL NOT NULL,
	firstName VARCHAR(40) NOT NULL,
	lastName VARCHAR(40) NOT NULL,
	email VARCHAR(150) NOT NULL,
	pwdHash VARCHAR(255) NOT NULL,
	phoneNo VARCHAR(20),
	isVerified BOOLEAN NOT NULL,
	isActive BOOLEAN NOT NULL,
	PRIMARY KEY (userID)
);

Create table Bookmarks(
	bookmarkID SERIAL NOT NULL,
	userID SERIAL NOT NULL,
	titleID varchar(255) NOT NULL,
	status boolean not null,
	PRIMARY KEY(bookmarkID, userID, titleID),
	FOREIGN KEY(titleID) REFERENCES TitleBasics(titleID),
	foreign key(userID) references UserRelation(userID)
);

drop table if exists Rating;
Create table Rating (
    titleID varchar(255) not null,
    userID SERIAL not null,
    grade int not null,
    reviewText text not null,
    rateDate date not null,
    PRIMARY KEY (titleID, userID),
    FOREIGN KEY (titleID) REFERENCES TitleBasics(titleID),
	FOREIGN KEY (userID) REFERENCES UserRelation(userID)
);

CREATE table Search (
	userID SERIAL NOT NULL,
	searchString VARCHAR(255),
	searchDate date,
	PRIMARY KEY (userID, searchString),
	FOREIGN KEY (userID) REFERENCES UserRelation (userID)
);
