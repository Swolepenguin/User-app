//add all models
const db = require('./models');

// create a new user inside of user table
// db.user.create({
//     firstName: 'Ashton',
//     lastName: 'Mitchell',
//     age: 21
// }) .then(createdUser =>{
//     console.log(createdUser);
// })

// db.user.create({
//     firstName: 'billy',
//     lastName: 'batson',
//     age: 41
// }) .then(createdUser =>{
//     console.log(createdUser.get());
// })


//read from user's table 
// db.user.findOne({
//     where: {firstName: 'Ashton'}
// }).then(foundUser =>{
//     console.log(foundUser.get())
// })

// // Find all users
// db.user.findAll().then(allUsers => {
//     console.log(allUsers.get());
// });

// // Update a user
// db.user.update({
//     lastName: 'Batson'
// }, {
//     where: { firstName: 'Billy' }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged);
// }); 

// Delete a user
// db.user.destroy({
//     where: { lastName: 'Bobby' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted);
// });