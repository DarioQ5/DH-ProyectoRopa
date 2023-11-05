-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2023 a las 01:25:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_ropa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `category` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `category`) VALUES
(1, 'Hombres'),
(2, 'Mujeres'),
(3, 'Niños');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `id` int(11) NOT NULL,
  `colores` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `colores`
--

INSERT INTO `colores` (`id`, `colores`) VALUES
(1, 'Blanco'),
(2, 'Azul'),
(3, 'Negro'),
(4, 'Azul Oscuro'),
(5, 'Gris Claro'),
(6, 'Rojo'),
(7, 'Dorado'),
(8, 'Rosa'),
(9, 'Gris Melange'),
(10, 'Violeta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_colores` int(11) DEFAULT NULL,
  `id_size` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `description`, `image`, `id_category`, `id_colores`, `id_size`, `price`) VALUES
(1, 'Camisa de vestir', 'Camisa elegante de manga larga para ocasiones formales.', 'camisa-hombre.png', 1, 3, NULL, 40),
(2, 'Jeans Ajustados', 'Jeans modernos y cómodos para uso diario.', 'j2164.png', 1, 2, NULL, 30),
(3, 'Chaleco de vestir', 'Chaleco de vestir para hombres excelente para eventos formales.', 'chaleco-formal.png', 1, 5, NULL, 33),
(4, 'Vestido de noche', 'Vestido elegante perfecto para eventos nocturnos.', 'vestido.jpg', 2, 7, NULL, 50),
(5, 'Blusa casual', 'Blusa ligera y cómoda, ideal para el día a día.', 'blusa-mujer.jpg', 2, 1, NULL, 25),
(6, 'Pantalon Babucha Algodon', 'Rustico jogger jogging comodo para salir a correr.', 'pantalon-mujer.jpg', 2, 9, NULL, 37),
(7, 'Vestido de tul', 'Vestido de manga larga para cumpleaños.', 'vestido-niñas.jpg', 3, 8, NULL, 11),
(8, 'Conjunto Buzo y Jogging', 'Conjunto ideal para la temporada otoño e invierno.', 'conjunto.jpg', 3, 3, NULL, 16),
(9, 'Pijama', 'Pijama entero para que duerman los niños comodos.', 'pijamas.jpg', 3, 10, NULL, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE TABLE `tallas` (
  `id` int(11) NOT NULL,
  `size` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tallas`
--

INSERT INTO `tallas` (`id`, `size`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, '5'),
(6, '8'),
(7, '10'),
(8, '12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `last_name`, `email`, `password`, `image`) VALUES
(1, 'Mateo', 'Garcia', 'mateogarcia@gmail.com', '1234', 'imagen.jpg'),
(2, 'Lucas', 'Salas', 'lucassalas@gmail.com', '2345', 'imagen.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_998fe731-50ef-4d2b-8488-799d563c998f` (`id_category`),
  ADD KEY `FK_8ecb7c1d-8aab-481a-ae3f-2538f474edba` (`id_size`),
  ADD KEY `FK_34203fcf-d757-4efd-b6c6-8bc5a4e15f55` (`id_colores`);

--
-- Indices de la tabla `tallas`
--
ALTER TABLE `tallas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_34203fcf-d757-4efd-b6c6-8bc5a4e15f55` FOREIGN KEY (`id_colores`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `FK_8ecb7c1d-8aab-481a-ae3f-2538f474edba` FOREIGN KEY (`id_size`) REFERENCES `tallas` (`id`),
  ADD CONSTRAINT `FK_998fe731-50ef-4d2b-8488-799d563c998f` FOREIGN KEY (`id_category`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
