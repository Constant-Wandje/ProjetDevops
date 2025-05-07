const express = require('express');
const bodyParser = require('body-parser');
const userData = require('./userData');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: 'Champs requis : name, email' });

    const user = userData.addUser(name, email);
    res.status(201).json(user);
});


app.get('/users', (req, res) => {
    res.json(userData.getAllUsers());
});


app.get('/users/:id', (req, res) => {
    const user = userData.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(user);
});


app.put('/users/:id', (req, res) => {
    const updatedUser = userData.updateUser(parseInt(req.params.id), req.body);
    if (!updatedUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(updatedUser);
});


app.delete('/users/:id', (req, res) => {
    const deletedUser = userData.deleteUser(parseInt(req.params.id));
    if (!deletedUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(deletedUser);
});


app.listen(port, () => {
    console.log(`Serveur en ligne sur http://localhost:${port}`);
});
