var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./movie');

module.exports = Backbone.Collection.extend({
  model: MovieModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/bb-IMDB-mitch',
  initialize: function () {
    console.log('model is running');
  }

});
