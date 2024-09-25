const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173'],
};

const info = {
  name: 'Yui',
  age: '28',
  hobby: 'Dance and play Drums',
};

const message = 'Nice to meet you!';

app.use(cors(corsOptions));
//first route
app.get('/api', (req, res) => {
  res.json(info);
});
//Second route

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
