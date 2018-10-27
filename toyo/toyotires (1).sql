-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2018 at 04:10 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toyotires`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_cars`
--

CREATE TABLE `tb_cars` (
  `car_id` int(11) NOT NULL,
  `maker` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_cars`
--

INSERT INTO `tb_cars` (`car_id`, `maker`) VALUES
(1, 'isuzu'),
(2, 'mitsubishi'),
(3, 'toyota');

-- --------------------------------------------------------

--
-- Table structure for table `tb_model`
--

CREATE TABLE `tb_model` (
  `model_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `model` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_model`
--

INSERT INTO `tb_model` (`model_id`, `car_id`, `model`) VALUES
(1, 1, 'mu-x'),
(2, 2, 'montero-sport'),
(3, 3, 'avanza'),
(4, 3, 'fortuner');

-- --------------------------------------------------------

--
-- Table structure for table `tb_oitm`
--

CREATE TABLE `tb_oitm` (
  `item_id` int(11) NOT NULL,
  `item_code` varchar(50) NOT NULL,
  `item_desc` varchar(50) NOT NULL,
  `item_stocks` int(11) NOT NULL,
  `pattern_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_oitm`
--

INSERT INTO `tb_oitm` (`item_id`, `item_code`, `item_desc`, `item_stocks`, `pattern_id`) VALUES
(1, 'A10440041', '265/65 R 17 65 6 OPAT2 LTR TL TOYO r17', 10, 2),
(2, 'A12859', '265/65 R 17 65 6 OPHT LTR TL TOYO r17', 10, 1),
(3, 'M18850362', '265/65 R 17 65 6 OPUT-M LTR TL TOYO r17', 10, 3),
(4, 'M22083', '265/60 R 18 60 6 OPA32-M LTR TL TOYO r18', 10, 4),
(5, 'M19950344', '265/60 R 18 60 6 OPUT-M LTR TL TOYO r18', 10, 3),
(6, 'A14615', '265/60 R 18 60 6 PXTSS LTR TL TOYO r18', 10, 5),
(7, 'M13122210', ' 185/65 R 15 65 4 NEO3-M PCR TL TOYO r15', 10, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tb_pairings`
--

CREATE TABLE `tb_pairings` (
  `pairing_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `item_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_pairings`
--

INSERT INTO `tb_pairings` (`pairing_id`, `car_id`, `model_id`, `item_code`) VALUES
(1, 1, 1, 'A10440041'),
(2, 1, 1, 'A12859'),
(3, 1, 1, 'M18850362'),
(4, 2, 2, 'M22083'),
(5, 2, 2, 'M19950344'),
(6, 2, 2, 'A14615'),
(7, 3, 1, 'M13122210'),
(8, 3, 2, 'M22083'),
(9, 3, 3, 'M19950344'),
(10, 3, 4, 'A14615');

-- --------------------------------------------------------

--
-- Table structure for table `tb_patterns`
--

CREATE TABLE `tb_patterns` (
  `pattern_id` int(11) NOT NULL,
  `pattern` varchar(50) NOT NULL,
  `pattern_code` varchar(50) NOT NULL,
  `pattern_desc` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_patterns`
--

INSERT INTO `tb_patterns` (`pattern_id`, `pattern`, `pattern_code`, `pattern_desc`) VALUES
(1, 'Open Country HT ', 'OPHT', ''),
(2, 'Open Country AT II', 'OPATII', ''),
(3, 'Open Country UT ', 'OPUT', ''),
(4, 'Open Country A32', 'OPA32', ''),
(5, 'Proxes T1 Sports', 'PROXEST1S', ''),
(6, 'Nano Energey 3', 'NE03', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_cars`
--
ALTER TABLE `tb_cars`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `tb_model`
--
ALTER TABLE `tb_model`
  ADD PRIMARY KEY (`model_id`);

--
-- Indexes for table `tb_oitm`
--
ALTER TABLE `tb_oitm`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `tb_pairings`
--
ALTER TABLE `tb_pairings`
  ADD PRIMARY KEY (`pairing_id`);

--
-- Indexes for table `tb_patterns`
--
ALTER TABLE `tb_patterns`
  ADD PRIMARY KEY (`pattern_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_cars`
--
ALTER TABLE `tb_cars`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_model`
--
ALTER TABLE `tb_model`
  MODIFY `model_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tb_oitm`
--
ALTER TABLE `tb_oitm`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tb_pairings`
--
ALTER TABLE `tb_pairings`
  MODIFY `pairing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tb_patterns`
--
ALTER TABLE `tb_patterns`
  MODIFY `pattern_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
