
const Sequelize = require('sequelize');
const {models} =  require('../models');

exports.index = (req, res, next) => {
  models.quiz.findAll()
      .then(quizzes =>{
          console.log(quizzes);
          res.render('quizzes/index.ejs', {quizzes});

      })
      .catch(error => {next(error)});
};