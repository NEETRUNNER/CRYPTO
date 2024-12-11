const express = require('express'); // Подключаем express
const axios = require('axios'); // Подключаем axios
const cors = require('cors'); // Подключаем cors

const app = express(); // Создаем приложение express
const PORT = 5000; // Порт, на котором будет работать сервер

// Включаем CORS
app.use(cors());

// Создаем прокси-эндпоинт
app.get('/proxy', async (req, res) => {
    try {
        const targetUrl = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info';

        console.log('Отправка запроса к:', targetUrl);
        const response = await axios.get(targetUrl, {
            headers: {
                'X-CMC_PRO_API_KEY': 'bcfbb943-46c0-4377-8923-1972ede9a891',
            },
        });
        console.log('Ответ от API:', response.data);

        res.json(response.data);
    } catch (error) {
        console.error('Ошибка:', error.response?.data || error.message);
        res.status(500).json({ message: 'Ошибка при выполнении запроса.' });
    }
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});