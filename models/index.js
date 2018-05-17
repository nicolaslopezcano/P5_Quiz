var Quiz = require("./quiz");
exports.Quiz = Quiz;

const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:quizzes.sqlite');

sequelize.import(path.join(__dirname, 'quiz'));
sequelize.sync()
.then(() => {console.log("BBDD creada")})
.catch(error => {
    console.log("Error al crear la  BBDD:", error);
    process.exit(1);
});
module.exports = sequelize;