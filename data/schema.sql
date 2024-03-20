CREATE TABLE `recetas_db`.`recetas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `ingredientes` VARCHAR(250) NOT NULL,
  `instrucciones` TEXT(5000) NOT NULL,
  PRIMARY KEY (`id`));


