let users = [
    {
        id: 1, 
    name: 'Alice', 
    email: 'cosnz@gmail.com'
 },
 {
    id: 2, 
name: 'Lil', 
email: 'cosnz@gmail.com'
},
{
    id: 3, 
name: 'Codeur', 
email: 'cosnz@gmail.com'
},
{
    id: 4, 
name: 'Texter', 
email: 'cosnz@gmail.com'
}
];
let idCounter = 1;

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(u => u.id === id);
}

function addUser(name, email) {
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    return newUser;
}

function updateUser(id, updatedFields) {
    const user = getUserById(id);
    if (!user) return null;
    Object.assign(user, updatedFields);
    return user;
}

function deleteUser(id) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    const deleted = users.splice(index, 1);
    return deleted[0];
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
