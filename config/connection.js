const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/MyDb';


connect(connectionString);

module.exports = connection;
