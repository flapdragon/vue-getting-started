var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: '',
    isRunning: false
  },
  methods: {
    executeSearch:function() {
      console.log('executeSearch')
      // this.isRunning = true
      // document.forms[0].submit()
    },
    parentClick:function() {
      console.log('parentClick')
    },
    evaluateKey: function() {
      console.log('evaluateKey')
    }
  }
})
