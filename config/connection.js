const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/database-name')//Put the database name DONT FORGET

module.export = connection;