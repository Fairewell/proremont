import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import cors from 'cors'; // Импортируем cors

const app = express();

// Используем cors middleware
app.use(cors({
  origin: 'http://localhost:5173' // Разрешаем запросы только с этого домена
}));

app.use(bodyParser.json());

// Пример маршрута
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Пример подключения к MongoDB
const url = 'mongodb+srv://r58hb0qrn9d:FYB-5iP-CDP-HR3@cluster0.dn0ygnt.mongodb.net/';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    return;
  }
  console.log('Connected to MongoDB');
  const db = client.db('your-database-name');
  // Выполняем операции с базой данных здесь
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
