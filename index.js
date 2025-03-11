const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Проверочный маршрут
app.get('/', (req, res) => {
  res.send('Webhook handler is up and running!');
});

// Прием вебхуков
app.post('/webhook', (req, res) => {
  console.log('Получен вебхук:', req.body);
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});