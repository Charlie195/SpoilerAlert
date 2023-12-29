-- CREATE DATABASE spoilerAlert;
-- use spoilerAlert;

-- CREATE SCHEMA `foodtracker` ;

-- CREATE TABLE `foodtracker`.`foods` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `itemName` VARCHAR(150) NOT NULL,
--   `expiryDate` VARCHAR(45) NOT NULL,
--   `dateNow` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`));

-- INSERT INTO `foods` (itemName, expiryDate, dateNow) VALUES (Lobster,2023-12-31,1703056183265)

-- CREATE DATABASE foodtracker;
use foodtracker;

CREATE TABLE foods (
  id INT NOT NULL AUTO_INCREMENT,
  itemName VARCHAR(150) NOT NULL,
  expiryDate VARCHAR(45) NOT NULL,
  dateNow VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

INSERT INTO foods (itemName, expiryDate, dateNow) VALUES ('Lobster','2023-12-31','1703056183265');

-- CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'myuser'IDENTIFIED WITH 'mysql_native_password' BY 'password';
FLUSH PRIVILEGES;