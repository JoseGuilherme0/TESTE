//O Banco de dados se encontra no seguinte seguimento:C:\ProgramData\MySQL\MySQL Server 8.0\Data\sistemadecadastro

//Para cria-lo foi usado o MySQL Workbench, por ser mais dinâmico e fácil de se trabalhar;
/*/Foram dados os seguintes comandos:

1- Para criação do Banco de Dados:

CREATE SCHEMA `sistemadecadastro` DEFAULT CHARACTER SET utf8 ;

2-Para criação da tabela principal que foi atribuida o nome de usuários:

CREATE TABLE `sistemadecadastro`.`usuarios` (
  `idusuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `formacao` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusuarios`));

3-




/*/
//sujeito a alteração!!!
//Iniciando o Banco de Dados para nossa aplicação:
const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "16140112",
  database: "sistemadecadastro",
});

//Exportamos para que nosso arquivo backend.js consiga acessa-lo:
module.exports = pool.promise();
