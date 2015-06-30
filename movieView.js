var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: _.template($('#movieTmpl').html()),
  initialize: function () {
    console.log('model view created');
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  events: {
    "click .destroy" : "destroyThis"
  },
  destroyThis: function (event) {
    event.preventDefault();
    console.log('running destroy');
    this.model.destroy();
    return this;
  },
});
