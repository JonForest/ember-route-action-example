import Ember from 'ember'
const {get, set} = Ember

export default Ember.Route.extend({
  model() {
    return {}
  },
  actions: {
    updateModel(arg) {
      // Mutate the model here
      set(this, 'currentModel.localVal', arg)
      // We'd really do a save here as well, instead we'll just...
      alert(get(this, 'currentModel.localVal'))
    }
  }
})
