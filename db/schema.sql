CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL,
  `devoured` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
