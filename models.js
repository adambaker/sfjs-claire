var bb = require('backbone');
var _  = require('underscore');

var App = {
  Models: {
    SpecialItem: bb.Model.extend({
      copy: function(){ return new App.Models.SpecialItem(this.attributes) }
    })
    ,Video: bb.Model.extend({
      copy: function(){ return new App.Models.Video(this.attributes) }
    })
    ,EndOfUnit: bb.Model.extend({
      copy: function(){ return new App.Models.EndOfUnit(this.attributes) }
    })
    ,Unit: bb.Model.extend({
      copy: function(){
        return new App.Models.Unit(_.extend({}, this.attributes, {
          items: this.get('items').map(function(i){return i.copy()})
        }))
      }
    })
    ,Class: bb.Model.extend({
      copy: function(){
        return new App.Models.Class(_.extend({ }, this.attributes, {
        }))
      }
    })
  }
}

module.exports = App