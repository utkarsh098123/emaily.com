const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'my first website' });
});


const Host = '0.0.0.0';

const PORT = process.env.PORT || 10000 ;

app.listen(PORT,Host , () => {
  console.log('server is running')
})
