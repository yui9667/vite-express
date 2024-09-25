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

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json(info);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
