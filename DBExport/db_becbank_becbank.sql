-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_becbank
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `becbank`
--

DROP TABLE IF EXISTS `becbank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `becbank` (
  `navn` varchar(45) DEFAULT NULL,
  `efternavn` varchar(45) DEFAULT NULL,
  `kontonummer` int(11) NOT NULL,
  `medarbejder` tinyint(4) DEFAULT NULL,
  `pw` varchar(45) DEFAULT NULL,
  `saldo01` double DEFAULT NULL,
  `rente01` double DEFAULT NULL,
  `saldo02` double DEFAULT NULL,
  `rente02` double DEFAULT NULL,
  `saldo03` double DEFAULT NULL,
  `rente03` double DEFAULT NULL,
  PRIMARY KEY (`kontonummer`),
  UNIQUE KEY `kontonummer_UNIQUE` (`kontonummer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `becbank`
--

LOCK TABLES `becbank` WRITE;
/*!40000 ALTER TABLE `becbank` DISABLE KEYS */;
INSERT INTO `becbank` VALUES ('postman01navn','postman01efternavn',1001105,1,'postman01pw',6969,69,100,1,50,5),('postman02navn','postman02efternavn',1001106,0,'postman02pw',69695,695,1005,15,505,55),('navn01','efternavn01',10011001,1,'pw01',NULL,NULL,NULL,NULL,NULL,NULL),('navn02','efternavn02',10011002,0,'pw02',NULL,NULL,NULL,NULL,NULL,NULL),('navn03','efternavn03',10011003,1,'pw03',100,0,200,5,1000,2),('navn04','efternavn04',10011004,0,'pw04',100,2,23300,2,100099,2);
/*!40000 ALTER TABLE `becbank` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-13 13:25:22
