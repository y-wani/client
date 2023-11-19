load data infile 'data/Zone.txt' into table Zone ignore 1 lines (name, max_designated_spots);
load data infile 'data/Venue.txt' into table Venue ignore 1 lines (name, address);
load data infile 'data/Distance.txt' into table Distance ignore 1 lines (zone, venue, miles);
load data infile 'data/Event.txt' into table Event ignore 1 lines (name, venue, date);
load data infile 'data/Rate.txt' into table Rate ignore 1 lines (zone, date, rate);
load data infile 'data/Customer.txt' into table Customer ignore 1 lines (phone_no, fname, lname);
load data infile 'data/Reservation.txt' into table Reservation ignore 1 lines (phone_no, zone, date, is_cancelled);