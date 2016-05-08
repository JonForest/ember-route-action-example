import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);
Ember.$.xhrPool = [];
Ember.$.ajaxSetup({
  beforeSend: function(jqXHR, settings) {
    debugger
    if ((typeof settings.global !== 'undefined') && !(settings.global) && (settings.jqXHRArray)) {
      //  add connection to list
      Ember.$.xhrPool.push(jqXHR);
    }
  }, complete: function(jqXHR) {
    var i = $.xhrPool.indexOf(jqXHR);
    if (i > -1) {
      //  remove from list by index
      Ember.$.xhrPool.splice(i, 1);
    }
  }
})
export default App;
