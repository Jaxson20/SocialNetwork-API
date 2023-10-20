const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;



app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use('/', routes); 


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
