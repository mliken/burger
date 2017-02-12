CREATE DATABASE burger;
USE burger;

CREATE TABLE `burger` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255) NOT NULL,
  `devoured` BOOLEAN NOT NULL,DEFAULT FALSE
  `date` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) );