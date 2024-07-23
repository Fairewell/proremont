import { MongoClient } from 'mongodb';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);
  const url = 'mongodb+srv://r58hb0qrn9d:FYB-5iP-CDP-HR3@cluster0.dn0ygnt.mongodb.net/';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('Proremont');
    // Выполняем операции с базой данных здесь

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to connect to MongoDB' }),
    };
  } finally {
    await client.close();
  }
}