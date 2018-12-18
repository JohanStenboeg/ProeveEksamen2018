'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');
  // todoList Routes
  app.route('/hent')
    .get(controller.hentbrugere)
    .post(controller.opretbruger)
    .post(controller.opretkonto);

  app.route('/hentkonti')
    .post(controller.hentkonti);


};