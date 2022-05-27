CREATE DATABASE  IF NOT EXISTS `dumpsite` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dumpsite`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: dumpsite
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admissioncategories`
--

DROP TABLE IF EXISTS `admissioncategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admissioncategories` (
  `landfillid` int NOT NULL,
  `category` varchar(200) DEFAULT NULL,
  KEY `fk_landfillsite` (`landfillid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admissioncategories`
--

LOCK TABLES `admissioncategories` WRITE;
/*!40000 ALTER TABLE `admissioncategories` DISABLE KEYS */;
INSERT INTO `admissioncategories` VALUES (1,'0-240lbs $7.00'),(1,'Over 480lbs $45.00 per ton'),(2,'Walker County Residents $1 per ton, 2 ton minimum'),(2,'Jefferson County $26 per ton, 2 ton minimum'),(3,'Up to 12 bags for $13.00'),(4,'Cost $0.00'),(5,'Household- $40/ton'),(5,'Construction/ Demolition- $25/Ton'),(5,'Special Waste- $30/ton'),(6,'Cost $0.00 to Jefferson County Residents'),(7,'Prices may vary'),(8,'Cost $0.00'),(9,'$12 ea. for CRT (Cathode Ray Tube) Monitors'),(9,'$0.35/lb for CRT or Flat-Panel TVs'),(9,'$0.45/lb for DLP or Rear Projection TVs'),(9,'$10 for Hard Drive Shredding'),(9,'$40 per 65 gallon bin (6-8 standard boxes) for drop-off service'),(10,'Prices may vary'),(11,'Prices may vary'),(12,'Prices may vary'),(13,'Prices may Vary'),(14,'Prices may vary'),(15,'Prices may vary');
/*!40000 ALTER TABLE `admissioncategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hours`
--

DROP TABLE IF EXISTS `hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hours` (
  `id` int NOT NULL AUTO_INCREMENT,
  `landfillid` int NOT NULL,
  `day` varchar(10) DEFAULT NULL,
  `startTime` varchar(10) DEFAULT NULL,
  `endTime` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_landfillhours` (`landfillid`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hours`
--

LOCK TABLES `hours` WRITE;
/*!40000 ALTER TABLE `hours` DISABLE KEYS */;
INSERT INTO `hours` VALUES (2,1,'Monday','7:00AM','3:30PM'),(3,1,'Tuesday','7:00AM','3:30PM'),(4,1,'Wednesday','7:00AM','3:30PM'),(5,1,'Thursday','7:00AM','3:30PM'),(6,1,'Friday','7:00AM','3:30PM'),(7,2,'Monday','8:00AM','4:00PM'),(8,2,'Tuesday','8:00AM','4:00PM'),(9,2,'Wednesday','8:00AM','4:00PM'),(10,2,'Thursday','8:00AM','4:00PM'),(11,2,'Friday','8:00AM','4:00PM'),(12,3,'Monday','7:00AM','3:00PM'),(13,3,'Wednesday','7:00AM','3:00PM'),(14,3,'Friday','7:00AM','3:00PM'),(15,3,'Saturday','7:00AM','3:00PM'),(16,4,'Monday','3:00AM','5:00PM'),(17,4,'Tuesday','3:00AM','5:00PM'),(18,4,'Wednesday','3:00AM','5:00PM'),(19,4,'Thursday','3:00AM','5:00PM'),(20,4,'Friday','3:00AM','5:00PM'),(21,4,'Saturday','7:00AM','12:00PM'),(22,5,'Monday','6:00AM','5:00PM'),(23,5,'Tuesday','6:00AM','5:00PM'),(24,5,'Wednesday','6:00AM','5:00PM'),(25,5,'Thursday','6:00AM','5:00PM'),(26,5,'Friday','6:00AM','5:00PM'),(27,5,'Saturday','6:00AM','12:00PN'),(28,6,'Monday','7:00AM','3:00PM'),(29,6,'Tuesday','7:00AM','3:00PM'),(30,6,'Wednesday','7:00AM','3:00PM'),(31,6,'Thursday','7:00AM','3:00PM'),(32,6,'Friday','7:00AM','3:00PM'),(33,6,'Saturday','7:00AM','12:00PM'),(34,7,'Monday','6:00AM','5:30PM'),(35,7,'Tuesday','6:00AM','5:30PM'),(36,7,'Wednesday','6:00AM','5:30PM'),(37,7,'Thursday','6:00AM','5:30PM'),(38,7,'Friday','6:00AM','5:30PM'),(39,8,'Monday','7:00AM','3:00PM'),(40,8,'Tuesday','7:00AM','3:00PM'),(41,8,'Wednesday','7:00AM','3:00PM'),(42,8,'Thursday','7:00AM','3:00PM'),(43,8,'Friday','7:00AM','3:00PM'),(44,8,'Saturday','7:00AM','12:00PM'),(45,9,'Monday','8:00AM','4:00PM'),(46,9,'Tuesday','8:00AM','4:00PM'),(47,9,'Wednesday','8:00AM','4:00PM'),(48,9,'Thursday','8:00AM','4:00PM'),(49,9,'Friday','8:00AM','4:00PM'),(50,10,'Monday','7:30AM','4:30PM'),(51,10,'Tuesday','7:30AM','4:30PM'),(52,10,'Wednesday','7:30AM','4:30PM'),(53,10,'Thursday','7:30AM','4:30PM'),(54,10,'Friday','7:30AM','4:30PM'),(55,11,'Monday','7:00AM','3:30PM'),(56,11,'Tuesday','7:00AM','3:30PM'),(57,11,'Wednesday','7:00AM','3:30PM'),(58,11,'Thursday','7:00AM','3:30PM'),(59,11,'Friday','7:00AM','3:45PM'),(60,12,'Monday','7:00AM','3:45PM'),(61,12,'Tuesday','7:00AM','3:45PM'),(62,12,'Wednesday','7:00AM','3:45PM'),(63,12,'Thursday','7:00AM','3:45PM'),(64,12,'Friday','7:00AM','3:45PM'),(65,12,'Saturday','8:00AM','11:30AM'),(66,13,'Monday','8:00AN','4:15PM'),(67,13,'Tuesday','8:00AM','4:15PM'),(68,13,'Wednesday','8:00AM','4:15PM'),(69,13,'Thursday','8:00AM','4:15PM'),(70,13,'Friday','8:00AM','4:15PM'),(71,13,'Saturday','8:00AM','11:00AM'),(72,14,'Monday','7:30AM','4:00PM'),(73,14,'Tuesday','7:30AM','4:00PM'),(74,14,'Wednesday','7:30AM','4:00PM'),(75,14,'Thursday','7:30AM','4:00PM'),(76,14,'Friday','7:30AM','4:00PM'),(77,14,'Saturday','7:30AM','12:00PM'),(78,15,'Monday','7:30AM','4:00PM'),(79,15,'Tuesday','7:30AM','4:00PM'),(80,15,'Wednesday','7:30AM','4:00PM'),(81,15,'Thursday','7:30AM','4:00PM'),(82,15,'Friday','7:30AM','4:00PM'),(83,15,'Saturday','7:30AM','12:00PM');
/*!40000 ALTER TABLE `hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landfills`
--

DROP TABLE IF EXISTS `landfills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landfills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(75) NOT NULL,
  `contact` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landfills`
--

LOCK TABLES `landfills` WRITE;
/*!40000 ALTER TABLE `landfills` DISABLE KEYS */;
INSERT INTO `landfills` VALUES (1,'Blount County Landfill','2390 Armstrong Loop, Hayden, AL 35079','205-505-0150'),(2,'Republic Services Pineview','2730 Bryan Road, Dora, AL 35062',' 205-648-1000'),(3,'Turkey Creek Landfill','7035 Narrows Road, Pinson, AL 35126',' 205-648-1000'),(4,'Mt Olive Landfill','101 Mary Buckelew Pkwy, Gardendale, AL 35071','205-631-6096'),(5,'Big Sky Environmental, LLC','5100 Flat Top Rd, Adamsville, AL 35005','205-743-0080'),(6,'Birmingham Eastern Landfill','2787 Alton Rd, Birmingham, AL 35210','205-655-3391'),(7,'Star Ridge Moody Landfill','3301 Acmar Rd, Moody, AL 35004','205-352-2028'),(8,'Birmingham Northern Landfill','2800 47th Ave N, Birmingham, AL 35207','205-254-6316'),(9,'Protec Recycling','135 Distribution Dr, Homewood, AL 35209','205-549-2120'),(10,'Rather Recycling Copper Scrap','323 Finley Blvd, Birmingham, AL 35204','205-224-4044'),(11,'Birmingham Recycling Recovery','9 41st St S, Birmingham, AL 35222','205-591-8201'),(12,'Steel City Recycling','2020 Vanderbilt Rd, Birmingham, AL 35234','205-808-7284'),(13,'Recycle USA, Inc','6147 Sunrise Dr, Pinson, AL 35126','205-680-4589'),(14,'ANGLER RECYCLING LLC, ODENVILLE','15226 Highway 411 P. O. Box 595 Odenville, AL 35120','205-629-2200');
/*!40000 ALTER TABLE `landfills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landfilltypes`
--

DROP TABLE IF EXISTS `landfilltypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landfilltypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `landfillid` int NOT NULL,
  `wastetype` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_landfill` (`landfillid`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landfilltypes`
--

LOCK TABLES `landfilltypes` WRITE;
/*!40000 ALTER TABLE `landfilltypes` DISABLE KEYS */;
INSERT INTO `landfilltypes` VALUES (1,1,'Non-hazardous household waste'),(2,1,'Recyclable waste'),(3,2,'Non-hazardous household waste'),(4,2,'Recyclable waste'),(5,3,'Non-hazardous household waste'),(6,3,'Recyclable waste'),(7,4,'Non-hazardous household waste'),(8,4,'Recyclable waste'),(9,5,'Non-hazardous household waste'),(10,5,'Recyclable waste'),(11,5,'Hazardous waste'),(12,6,'Non-hazardous household waste'),(13,6,'Recyclable waste'),(14,7,'Non-hazardous household waste'),(15,7,'Hazardous waste'),(16,7,'Construction/Demolition waste'),(17,8,'Recyclable waste'),(18,9,'Recyclable paper waste'),(19,9,'Electronic waste'),(20,10,'Recyclable waste'),(21,11,'Non-hazardous household waste'),(22,11,'Recyclable waste'),(23,11,'Hazardous waste'),(24,11,'Electronic waste'),(25,11,'Electronic waste'),(26,12,'Recyclable waste'),(27,13,'Recyclable waste'),(28,13,'Electronic waste'),(29,14,'Non-hazardous household waste'),(30,14,'Recyclable waste'),(31,14,'Hazardous waste'),(32,15,'Non-hazardous household waste'),(33,15,'Recyclable waste'),(34,15,'Hazardous waste');
/*!40000 ALTER TABLE `landfilltypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `review` text NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_review` (`userid`),
  CONSTRAINT `fk_review` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-06 16:06:33
