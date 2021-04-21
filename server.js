const inquirer = require('inquirer');
const sql = require('mysql2');
const db = require('./db/connection');

require('dotenv').config(); //process.env.DB_User for example
