-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2019 at 06:20 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `assignmentdistribution`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `assignment_download_view`
--
CREATE TABLE IF NOT EXISTS `assignment_download_view` (
`reg_no` varchar(10)
,`name` varchar(100)
,`batch_id` int(10)
,`branch_id` int(1)
,`subject_id` int(10)
,`module_id` int(10)
,`group_by` int(1)
,`section` varchar(1)
,`semester_no` int(1)
,`assignment_id` int(10)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `assignment_submission_view`
--
CREATE TABLE IF NOT EXISTS `assignment_submission_view` (
`reg_no` varchar(10)
,`name` varchar(100)
,`batch_id` int(10)
,`branch_id` int(1)
,`subject_id` int(10)
,`module_id` int(10)
,`group_by` int(1)
,`section` varchar(1)
,`semester_no` int(1)
,`assignment_id` int(10)
,`assignment_name` varchar(255)
);
-- --------------------------------------------------------

--
-- Table structure for table `batches`
--

CREATE TABLE IF NOT EXISTS `batches` (
`id` int(100) NOT NULL,
  `start_year` int(4) NOT NULL,
  `end_year` int(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `batches`
--

INSERT INTO `batches` (`id`, `start_year`, `end_year`) VALUES
(1, 2001, 2005),
(2, 2002, 2006),
(3, 2003, 2007),
(4, 2004, 2008),
(5, 2005, 2009),
(6, 2006, 2010),
(7, 2007, 2011),
(8, 2008, 2012),
(9, 2009, 2013),
(10, 2010, 2014),
(11, 2011, 2015),
(12, 2012, 2016),
(13, 2013, 2017),
(14, 2014, 2018),
(15, 2015, 2019),
(16, 2016, 2020),
(17, 2017, 2021),
(18, 2018, 2022);

-- --------------------------------------------------------

--
-- Stand-in structure for view `batch_modules`
--
CREATE TABLE IF NOT EXISTS `batch_modules` (
`id` int(100)
,`branch_id` int(100)
,`batch_id` int(100)
,`semester_no` int(8)
,`subject_id` int(11)
,`name` varchar(100)
,`short_name` varchar(100)
,`code` varchar(10)
,`module_ids` varchar(100)
,`status` varchar(10)
);
-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE IF NOT EXISTS `branches` (
`id` int(1) NOT NULL,
  `name` varchar(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`) VALUES
(1, 'CSE'),
(2, 'IT'),
(3, 'MECH'),
(4, 'CIVIL'),
(5, 'EE'),
(6, 'EEE');

-- --------------------------------------------------------

--
-- Table structure for table `download_logs`
--

CREATE TABLE IF NOT EXISTS `download_logs` (
`id` int(10) NOT NULL,
  `assignment_id` int(10) NOT NULL,
  `student_id` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `download_logs`
--

INSERT INTO `download_logs` (`id`, `assignment_id`, `student_id`) VALUES
(1, 1, '1501289250');

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE IF NOT EXISTS `faculties` (
  `id` varchar(15) NOT NULL,
  `name` varchar(100) NOT NULL,
  `branch_id` int(1) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `password` varchar(128) DEFAULT 'NOTSET',
  `default_password` varchar(10) NOT NULL DEFAULT 'TAT12345',
  `designation` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'ACTIVE'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`id`, `name`, `branch_id`, `phone`, `email`, `gender`, `password`, `default_password`, `designation`, `role`, `status`) VALUES
('ADMIN001', 'DP Sahoo', 1, '7978915803', 'dpsahoo@gmail.com', 'MALE', 'admin9191', 'TAT12345', 'ADMIN', 'ADMIN', 'ACTIVE'),
('TAT94371', 'Rahul Ranjan', 1, '9437920600', 'rahulranjan@gmail.com', 'MALE', 'rahul001', 'TAT12345', 'ASST.PROFESSOR', 'FACULTY', 'ACTIVE');

-- --------------------------------------------------------

--
-- Stand-in structure for view `faculties_view`
--
CREATE TABLE IF NOT EXISTS `faculties_view` (
`id` varchar(15)
,`name` varchar(100)
,`branch_id` int(1)
,`branch_name` varchar(5)
,`email` varchar(30)
,`phone` varchar(10)
,`gender` varchar(6)
,`designation` varchar(100)
,`role` varchar(100)
,`status` varchar(10)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `faculty_subjct_view`
--
CREATE TABLE IF NOT EXISTS `faculty_subjct_view` (
`subjectName` varchar(100)
,`subjectCode` varchar(10)
,`shortName` varchar(100)
,`subjectId` int(100)
,`branchId` int(10)
,`batchId` int(10)
,`facultyId` varchar(100)
,`semesterId` int(10)
);
-- --------------------------------------------------------

--
-- Table structure for table `faculty_subjects`
--

CREATE TABLE IF NOT EXISTS `faculty_subjects` (
`id` int(11) NOT NULL,
  `faculty_id` varchar(100) NOT NULL,
  `branch_id` int(10) NOT NULL,
  `batch_id` int(10) NOT NULL,
  `semester_id` int(10) NOT NULL,
  `subject_id` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty_subjects`
--

INSERT INTO `faculty_subjects` (`id`, `faculty_id`, `branch_id`, `batch_id`, `semester_id`, `subject_id`) VALUES
(1, 'ADMIN001', 1, 15, 7, 4),
(2, 'TAT94371', 1, 15, 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `semester_assignments`
--

CREATE TABLE IF NOT EXISTS `semester_assignments` (
`id` int(100) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `file_name` varchar(150) NOT NULL,
  `batch_id` int(10) NOT NULL,
  `faculty_id` varchar(100) NOT NULL,
  `branch_id` int(100) NOT NULL,
  `semester_no` int(1) NOT NULL,
  `subject_id` int(10) NOT NULL,
  `module_id` int(10) NOT NULL,
  `section` varchar(1) NOT NULL,
  `group_by` int(1) NOT NULL,
  `difficulty_lvl` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `semester_assignments`
--

INSERT INTO `semester_assignments` (`id`, `start_date`, `end_date`, `file_name`, `batch_id`, `faculty_id`, `branch_id`, `semester_no`, `subject_id`, `module_id`, `section`, `group_by`, `difficulty_lvl`) VALUES
(1, '2018-10-22 00:00:00', '2018-10-25 00:00:00', 'chapter-1 assignmentNo-1540276210.docx', 15, 'TAT94371', 1, 7, 3, 1, 'A', 3, 'HARD'),
(2, '2018-11-05 00:00:00', '2018-11-07 00:00:00', 'chapter-3 assignmentNo-1540276342.pptx', 15, 'TAT94371', 1, 8, 2, 2, 'C', 3, 'EASY'),
(3, '2018-10-27 00:00:00', '2018-10-29 00:00:00', 'test assignmentNo-1540809736.pptx', 15, 'TAT94371', 1, 7, 3, 1, 'A', 3, 'EASY');

-- --------------------------------------------------------

--
-- Table structure for table `semester_subjects`
--

CREATE TABLE IF NOT EXISTS `semester_subjects` (
`id` int(100) NOT NULL,
  `semester_no` int(8) NOT NULL,
  `subject_ids` varchar(100) NOT NULL,
  `branch_id` int(100) NOT NULL,
  `batch_id` int(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `semester_subjects`
--

INSERT INTO `semester_subjects` (`id`, `semester_no`, `subject_ids`, `branch_id`, `batch_id`) VALUES
(1, 7, '3,4,6,1', 1, 15),
(2, 8, '3,2', 1, 15);

-- --------------------------------------------------------

--
-- Table structure for table `semester_subject_modules`
--

CREATE TABLE IF NOT EXISTS `semester_subject_modules` (
  `sem_sub_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `module_ids` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `semester_subject_modules`
--

INSERT INTO `semester_subject_modules` (`sem_sub_id`, `subject_id`, `module_ids`) VALUES
(1, 1, '1,2,3,4'),
(1, 3, '1,2,3,4'),
(1, 4, '1,2,3,4,5'),
(1, 6, '1,2,3,4'),
(2, 2, '1,2'),
(2, 3, '1,2,3');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `reg_no` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `semester_no` int(1) NOT NULL,
  `section` varchar(1) NOT NULL,
  `group_by` int(1) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(128) NOT NULL,
  `default_password` varchar(128) NOT NULL,
  `role` varchar(7) NOT NULL DEFAULT 'STUDENT',
  `designation` varchar(100) NOT NULL DEFAULT 'STUDENT',
  `branch_id` int(1) NOT NULL,
  `batch_year` varchar(12) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'INACTIVE',
  `batch_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`reg_no`, `name`, `semester_no`, `section`, `group_by`, `mobile`, `email`, `password`, `default_password`, `role`, `designation`, `branch_id`, `batch_year`, `status`, `batch_id`) VALUES
('1501289250', 'Sukumar Abhijeet', 7, 'A', 1, '7978915803', 'sukumar123sukumar@gmail.com', 'sukumar001', 'sukumar9090', 'STUDENT', 'STUDENT', 1, '2015-2019', 'ACTIVE', 15),
('1501289255', 'S Sukumar Abhijeet Sahoo', 8, 'C', 1, '8908609112', 'sukuma.raryan@gmail.com', 'sukumar9090', 'sukumar9090', 'STUDENT', 'STUDENT', 1, '2015-2019', 'ACTIVE', 15);

-- --------------------------------------------------------

--
-- Table structure for table `students_guardian`
--

CREATE TABLE IF NOT EXISTS `students_guardian` (
`id` int(10) NOT NULL,
  `guardian_name` varchar(100) NOT NULL,
  `guardian_number` bigint(10) NOT NULL,
  `guardian_relation` varchar(10) NOT NULL,
  `student_reg_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_assignments_submission`
--

CREATE TABLE IF NOT EXISTS `student_assignments_submission` (
`id` int(10) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  `assignment_id` int(10) NOT NULL,
  `assignment_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
`id` int(100) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `short_name` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'ACTIVE'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `code`, `name`, `short_name`, `status`) VALUES
(1, '#IOT221', 'Internet Of Things', 'IOT', 'ACTIVE'),
(2, '#CNS221', 'Computer Network System', 'CNS', 'ACTIVE'),
(3, '#JV221', 'JAVA', 'java', 'ACTIVE'),
(4, '#CP221', 'C Programming', 'C', 'ACTIVE'),
(5, '#IWT221', 'Internet ', 'IWT', 'ACTIVE'),
(6, '#DS221', 'DataStructure', 'DS', 'ACTIVE');

-- --------------------------------------------------------

--
-- Table structure for table `upload_logs`
--

CREATE TABLE IF NOT EXISTS `upload_logs` (
`id` int(11) NOT NULL,
  `student_id` varchar(100) NOT NULL,
  `assignment_id` int(10) NOT NULL,
  `student_submission_id` int(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `upload_logs`
--

INSERT INTO `upload_logs` (`id`, `student_id`, `assignment_id`, `student_submission_id`) VALUES
(1, '1501289250', 4, 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `user_login`
--
CREATE TABLE IF NOT EXISTS `user_login` (
`login_id` varchar(15)
,`name` varchar(100)
,`password` varchar(128)
,`email` varchar(100)
,`mobile` varchar(10)
,`default_password` varchar(128)
,`status` varchar(10)
,`role` varchar(100)
,`designation` varchar(100)
);
-- --------------------------------------------------------

--
-- Structure for view `assignment_download_view`
--
DROP TABLE IF EXISTS `assignment_download_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `assignment_download_view` AS select `s`.`reg_no` AS `reg_no`,`s`.`name` AS `name`,`s`.`batch_id` AS `batch_id`,`s`.`branch_id` AS `branch_id`,`sa`.`subject_id` AS `subject_id`,`sa`.`module_id` AS `module_id`,`s`.`group_by` AS `group_by`,`s`.`section` AS `section`,`s`.`semester_no` AS `semester_no`,`dl`.`assignment_id` AS `assignment_id` from ((`students` `s` join `download_logs` `dl` on((`dl`.`student_id` = `s`.`reg_no`))) join `semester_assignments` `sa` on((`dl`.`assignment_id` = `sa`.`id`)));

-- --------------------------------------------------------

--
-- Structure for view `assignment_submission_view`
--
DROP TABLE IF EXISTS `assignment_submission_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `assignment_submission_view` AS select `s`.`reg_no` AS `reg_no`,`s`.`name` AS `name`,`s`.`batch_id` AS `batch_id`,`s`.`branch_id` AS `branch_id`,`sa`.`subject_id` AS `subject_id`,`sa`.`module_id` AS `module_id`,`s`.`group_by` AS `group_by`,`s`.`section` AS `section`,`s`.`semester_no` AS `semester_no`,`sas`.`assignment_id` AS `assignment_id`,`sas`.`assignment_name` AS `assignment_name` from ((`students` `s` join `student_assignments_submission` `sas` on((`sas`.`student_id` = `s`.`reg_no`))) join `semester_assignments` `sa` on((`sas`.`assignment_id` = `sa`.`id`)));

-- --------------------------------------------------------

--
-- Structure for view `batch_modules`
--
DROP TABLE IF EXISTS `batch_modules`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `batch_modules` AS select `ss`.`id` AS `id`,`ss`.`branch_id` AS `branch_id`,`ss`.`batch_id` AS `batch_id`,`ss`.`semester_no` AS `semester_no`,`ssm`.`subject_id` AS `subject_id`,`s`.`name` AS `name`,`s`.`short_name` AS `short_name`,`s`.`code` AS `code`,`ssm`.`module_ids` AS `module_ids`,`s`.`status` AS `status` from ((`semester_subjects` `ss` join `semester_subject_modules` `ssm` on((`ss`.`id` = `ssm`.`sem_sub_id`))) join `subjects` `s` on((`s`.`id` = `ssm`.`subject_id`)));

-- --------------------------------------------------------

--
-- Structure for view `faculties_view`
--
DROP TABLE IF EXISTS `faculties_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `faculties_view` AS select `f`.`id` AS `id`,`f`.`name` AS `name`,`f`.`branch_id` AS `branch_id`,`b`.`name` AS `branch_name`,`f`.`email` AS `email`,`f`.`phone` AS `phone`,`f`.`gender` AS `gender`,`f`.`designation` AS `designation`,`f`.`role` AS `role`,`f`.`status` AS `status` from (`faculties` `f` join `branches` `b` on((`f`.`branch_id` = `b`.`id`)));

-- --------------------------------------------------------

--
-- Structure for view `faculty_subjct_view`
--
DROP TABLE IF EXISTS `faculty_subjct_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `faculty_subjct_view` AS select `s`.`name` AS `subjectName`,`s`.`code` AS `subjectCode`,`s`.`short_name` AS `shortName`,`s`.`id` AS `subjectId`,`fs`.`branch_id` AS `branchId`,`fs`.`batch_id` AS `batchId`,`fs`.`faculty_id` AS `facultyId`,`fs`.`semester_id` AS `semesterId` from (`subjects` `s` join `faculty_subjects` `fs` on((`fs`.`subject_id` = `s`.`id`)));

-- --------------------------------------------------------

--
-- Structure for view `user_login`
--
DROP TABLE IF EXISTS `user_login`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_login` AS (select `students`.`reg_no` AS `login_id`,`students`.`name` AS `name`,`students`.`password` AS `password`,`students`.`email` AS `email`,`students`.`mobile` AS `mobile`,`students`.`default_password` AS `default_password`,`students`.`status` AS `status`,`students`.`role` AS `role`,`students`.`designation` AS `designation` from `students`) union (select `faculties`.`id` AS `login_id`,`faculties`.`name` AS `name`,`faculties`.`password` AS `password`,`faculties`.`email` AS `email`,`faculties`.`phone` AS `mobile`,`faculties`.`default_password` AS `default_password`,`faculties`.`status` AS `status`,`faculties`.`role` AS `role`,`faculties`.`designation` AS `designation` from `faculties`);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `batches`
--
ALTER TABLE `batches`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `download_logs`
--
ALTER TABLE `download_logs`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `phone` (`phone`,`email`);

--
-- Indexes for table `faculty_subjects`
--
ALTER TABLE `faculty_subjects`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `semester_assignments`
--
ALTER TABLE `semester_assignments`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `file_name` (`file_name`);

--
-- Indexes for table `semester_subjects`
--
ALTER TABLE `semester_subjects`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
 ADD PRIMARY KEY (`reg_no`), ADD UNIQUE KEY `email` (`email`), ADD UNIQUE KEY `email_2` (`email`), ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Indexes for table `students_guardian`
--
ALTER TABLE `students_guardian`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `guardian_number` (`guardian_number`);

--
-- Indexes for table `student_assignments_submission`
--
ALTER TABLE `student_assignments_submission`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `upload_logs`
--
ALTER TABLE `upload_logs`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `batches`
--
ALTER TABLE `batches`
MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
MODIFY `id` int(1) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `download_logs`
--
ALTER TABLE `download_logs`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `faculty_subjects`
--
ALTER TABLE `faculty_subjects`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `semester_assignments`
--
ALTER TABLE `semester_assignments`
MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `semester_subjects`
--
ALTER TABLE `semester_subjects`
MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `students_guardian`
--
ALTER TABLE `students_guardian`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `student_assignments_submission`
--
ALTER TABLE `student_assignments_submission`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `upload_logs`
--
ALTER TABLE `upload_logs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
