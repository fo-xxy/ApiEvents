-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para apievents
CREATE DATABASE IF NOT EXISTS `apievents` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `apievents`;

-- Volcando estructura para tabla apievents.tbl_admin
CREATE TABLE IF NOT EXISTS `tbl_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `document` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla apievents.tbl_admin: ~1 rows (aproximadamente)
INSERT INTO `tbl_admin` (`id`, `userName`, `document`) VALUES
	(1, 'Robert', '1234');

-- Volcando estructura para tabla apievents.tbl_assistance
CREATE TABLE IF NOT EXISTS `tbl_assistance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idEvent` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idEvent` (`idEvent`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `tbl_assistance_ibfk_1` FOREIGN KEY (`idEvent`) REFERENCES `tbl_events` (`idEvent`),
  CONSTRAINT `tbl_assistance_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `tbl_users` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla apievents.tbl_assistance: ~2 rows (aproximadamente)
INSERT INTO `tbl_assistance` (`id`, `idEvent`, `idUser`) VALUES
	(1, 6, 1),
	(5, 10, 4);

-- Volcando estructura para tabla apievents.tbl_events
CREATE TABLE IF NOT EXISTS `tbl_events` (
  `idEvent` int(11) NOT NULL AUTO_INCREMENT,
  `nameEvent` varchar(50) NOT NULL,
  `dateEvent` date NOT NULL,
  `capacity` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idEvent`),
  KEY `FK_tbl_events_tbl_users` (`idUser`),
  CONSTRAINT `FK_tbl_events_tbl_users` FOREIGN KEY (`idUser`) REFERENCES `tbl_users` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla apievents.tbl_events: ~4 rows (aproximadamente)
INSERT INTO `tbl_events` (`idEvent`, `nameEvent`, `dateEvent`, `capacity`, `idUser`) VALUES
	(4, 'Ricassrdo', '2024-05-28', 20, 1),
	(5, 'Matrimonidddd', '2024-11-11', 3, 4),
	(6, 'primera comunion', '2024-01-10', 20, 1),
	(10, 'primera hola ', '2024-09-15', 20, 4);

-- Volcando estructura para tabla apievents.tbl_eventsplace
CREATE TABLE IF NOT EXISTS `tbl_eventsplace` (
  `idEventPlace` int(11) NOT NULL AUTO_INCREMENT,
  `idEvent` int(11) NOT NULL,
  `idPlace` int(11) NOT NULL,
  PRIMARY KEY (`idEventPlace`),
  KEY `idEvent` (`idEvent`),
  KEY `idPlace` (`idPlace`),
  CONSTRAINT `tbl_eventsplace_ibfk_1` FOREIGN KEY (`idEvent`) REFERENCES `tbl_events` (`idEvent`),
  CONSTRAINT `tbl_eventsplace_ibfk_2` FOREIGN KEY (`idPlace`) REFERENCES `tbl_place` (`idPlace`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla apievents.tbl_eventsplace: ~0 rows (aproximadamente)

-- Volcando estructura para tabla apievents.tbl_place
CREATE TABLE IF NOT EXISTS `tbl_place` (
  `idPlace` int(11) NOT NULL AUTO_INCREMENT,
  `namePLace` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idPlace`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla apievents.tbl_place: ~0 rows (aproximadamente)

-- Volcando estructura para tabla apievents.tbl_users
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `nameUser` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla apievents.tbl_users: ~2 rows (aproximadamente)
INSERT INTO `tbl_users` (`idUser`, `nameUser`, `age`, `address`) VALUES
	(1, 'Rico', 123456, 'Calle 2ss0E'),
	(4, 'maria', 202222, 'calle 40 E');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
