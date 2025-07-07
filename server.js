const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'student' && password === 'password') {
        res.redirect('/student.html');
    } else if (username === 'admin' && password === 'admin') {
        res.redirect('/admin.html');
    } else {
        res.send('Invalid credentials. <a href="/">Try again</a>');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
