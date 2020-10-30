create database challengedb;

create user newuser identified with mysql_native_password by 'userpass';

grant all privileges on challengedb.* to  newuser;

flush privileges;