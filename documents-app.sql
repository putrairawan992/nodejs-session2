-- phpMyAdmin SQL Dump
-- version 5.2.0
-- SQLINES DEMO *** admin.net/
--
-- SQLINES DEMO *** 889
-- SQLINES DEMO *** May 13, 2023 at 09:22 AM
-- SQLINES DEMO *** .7.39
-- PHP Version: 8.2.0

SET @SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET @time_zone = "+00:00";


/* SQLINES DEMO *** ARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** LLATION_CONNECTION=@@COLLATION_CONNECTION */;
/* SQLINES DEMO *** tf8mb4 */;

--
-- SQLINES DEMO *** nts-app`
--

-- SQLINES DEMO *** ---------------------------------------

--
-- SQLINES DEMO *** or table `documents`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE documents (
  id int NOT NULL,
  file varchar(255) NOT NULL,
  title varchar(255) NOT NULL,
  description varchar(max) NOT NULL,
  id_user int NOT NULL,
  created_at datetime2 NOT NULL DEFAULT GETDATE()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- SQLINES DEMO *** ---------------------------------------

--
-- SQLINES DEMO *** or table `users`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE users (
  id int NOT NULL,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  role enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- SQLINES DEMO *** table `users`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
INSERT INTO users (id, username, password, role) VALUES
(1, 'admin', '$2a$12$g4Tolo54Afdp4YL5wHZHc.aP13ZXpxoioBQNqarC0N5NODdrqzlCi', 'admin'),
(2, 'user', '$2a$12$9/Wfab1l4Dcezc/EwuSZ7Ogq/x1sXE8UP2nNyBWiVOBKROIn5z.Le', 'user');

--
-- SQLINES DEMO *** d tables
--

--
-- SQLINES DEMO ***  `documents`
--
ALTER TABLE documents
  ADD PRIMARY KEY (id);

--
-- SQLINES DEMO ***  `users`
--
ALTER TABLE users
  ADD PRIMARY KEY (id);

--
-- SQLINES DEMO *** r dumped tables
--

--
-- SQLINES DEMO *** r table `documents`
--
ALTER TABLE documents
  MODIFY id cast(11 as int) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- SQLINES DEMO *** r table `users`
--
ALTER TABLE users
  MODIFY id cast(11 as int) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** ON_CONNECTION=@OLD_COLLATION_CONNECTION */;
