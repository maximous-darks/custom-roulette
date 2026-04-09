const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/api', (req, res) => {
    res.json({ message: 'Backend Launched Successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});