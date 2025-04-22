const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Указываем, что статические файлы находятся в текущей директории
app.use(express.static(path.join(__dirname)));

app.use((req, res, next) => {
    if (req.path === '/') {
        return res.redirect('/menu/index.html');
    }
    next();
});

// Обработка запроса к главной странице
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu/index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});