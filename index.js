setTimeout(growler, 3000)

var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    history: ''
  },
  created: function() {
    this.history = 'Growler created! OMG! ...'
  },
  methods: {
    executeOrder66: function() {
      console.log('66')
    }
  }
})
