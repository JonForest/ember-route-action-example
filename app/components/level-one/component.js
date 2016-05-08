import Ember from 'ember';
const {get, set} = Ember

export default Ember.Component.extend({
  actions: {
    onClick (arg) {
      this.sendAction('onClick', arg)
    }
  }
})
