1. Put data folder under C:\ProgramData\MySQL\MySQL Server 8.0\Data
2. Connect to MySQL
3. Execute following
```
create database PARKING;
use PARKING;
source Path/sql/PARKING_create.sql
source Path/sql/PARKING_data_load.sql
```
where `Path` here is the path of the project folder<br>
This is a temperary solution. Need to put them into a script.