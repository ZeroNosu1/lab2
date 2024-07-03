const express = require("express");
const users = require('./db.json');
const app = express();
const port = process.env.PORT || 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(user => user.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found.');
    }
});

// POST a new user
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send(`User ${newUser.username} has been added.`);
});

// PUT (update) user by ID
app.put('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updateUser = req.body;

    const index = users.findIndex(user => user.id === userId);

    if (index !== -1) {
        users[index] = {
            id: userId,
            username: updateUser.username,
            // Add other fields to update as needed
        };
        res.send(`User with ID ${userId} has been updated.`);
    } else {
        res.status(404).send('User not found.');
    }
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex(user => user.id === userId);

    if (index !== -1) {
        users.splice(index, 1);
        res.send(`User with ID ${userId} has been deleted.`);
    } else {
        res.status(404).send('User not found.');
    }
});

// Example route
app.get("/satang", (req, res) => {
    res.send("Hello! My name is Peerakan");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`API is available at http://127.0.0.1:${port}/api/users`);
});
