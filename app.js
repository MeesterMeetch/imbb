var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieColView');
var $ = require('jquery');
var formView = require('./formView');

module.exports = $(function (){
  var collection = new MovieCollection();
  collection.fetch().then(function (data) {
      var applyView = new MovieCollectionView({collection: collection});
      var newMovieForm = new formView({collection: collection});
  });
});
