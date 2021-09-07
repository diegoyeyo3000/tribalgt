-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para tribalgt
DROP DATABASE IF EXISTS `tribalgt`;
CREATE DATABASE IF NOT EXISTS `tribalgt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `tribalgt`;

-- Volcando estructura para tabla tribalgt.comment
DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `commentCode` int(11) NOT NULL AUTO_INCREMENT,
  `commentMovieOrSerieCode` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `commentValue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `commentStatus` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`commentCode`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla tribalgt.comment: ~3 rows (aproximadamente)
DELETE FROM `comment`;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` (`commentCode`, `commentMovieOrSerieCode`, `commentValue`, `commentStatus`) VALUES
	(1, 'tt0111161', 'comentario prueba', 1),
	(2, 'tt5491994', 'comentario prueba', 1),
	(3, 'tt5491994', 'comentario prueba', 1);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Volcando estructura para tabla tribalgt.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userCode` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userLastName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userEmail` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userPassword` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userToken` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userStatus` int(11) NOT NULL,
  `userDeleted` int(11) DEFAULT NULL,
  PRIMARY KEY (`userCode`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla tribalgt.user: ~5 rows (aproximadamente)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userCode`, `userName`, `userLastName`, `userEmail`, `userPassword`, `userToken`, `userStatus`, `userDeleted`) VALUES
	(1, 'Diego 1', 'Mejia', 'dmejia@ima.com.gt', 'rzZZPU/ug/6YWUfG4vScpg==$7iEg5NEZUSV69jwb5XJJZ/Nst', '081eff57-945e-4b8e-a4ba-ab97545b23f2', 1, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
