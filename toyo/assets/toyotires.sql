-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2018 at 02:15 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `tb_model`
--

CREATE TABLE `tb_model` (
  `model_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `model` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_oitm`
--

CREATE TABLE `tb_oitm` (
  `item_id` int(11) NOT NULL,
  `item_code` varchar(50) NOT NULL,
  `car_id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `item_desc` varchar(50) NOT NULL,
  `pattern_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(4, 'Open Country A32', 'OPA32', '');

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
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_model`
--
ALTER TABLE `tb_model`
  MODIFY `model_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_oitm`
--
ALTER TABLE `tb_oitm`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_patterns`
--
ALTER TABLE `tb_patterns`
  MODIFY `pattern_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
