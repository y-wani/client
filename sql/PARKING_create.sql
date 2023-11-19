create table if not exists Zone (
    name varchar(32) not null,
    max_designated_spots int not null,
    primary key (name)
) engine=InnoDB;

create table if not exists Venue (
    name varchar(32) not null,
    address varchar(128),
    primary key (name)
) engine=InnoDB;

create table if not exists Distance (
    zone varchar(32) not null,
    venue varchar(32) not null,
    miles decimal(4,2) not null,
    primary key (zone, venue),
    foreign key (zone) references Zone(name),
    foreign key (venue) references Venue(name)
) engine=InnoDB;

create table if not exists Event (
    name varchar(32) not null,
    venue varchar(32) not null,
    date date not null,
    primary key (name),
    foreign key (venue) references Venue(name)
) engine=InnoDB;

create table if not exists Rate (
    zone varchar(32) not null,
    date date not null,
    rate decimal(4,2) not null,
    primary key (zone, date),
    foreign key (zone) references Zone(name)
) engine=InnoDB;

create table if not exists Customer (
    phone_no varchar(16) not null,
    fname varchar(32) not null,
    lname varchar(32) not null,
    primary key (phone_no)
) engine=InnoDB;

create table if not exists Reservation (
    confirmation_no int not null auto_increment,
    phone_no varchar(16) not null,
    zone varchar(32) not null,
    date date not null,
    is_cancelled boolean not null default false,
    primary key (confirmation_no),
    foreign key (phone_no) references Customer(phone_no),
    foreign key (zone, date) references Rate(zone, date)
) engine=InnoDB;