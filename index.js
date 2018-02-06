var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: '',
    isRunning: false
  },
  methods: {
    executeSearch:function() {
      this.isRunning = true
      // document.forms[0].submit()
    },
    parentClick:function() {
      console.log('parentClick')
    }
  }
})
