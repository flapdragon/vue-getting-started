var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: ''
  },
  methods: {
    executeSearch:function(event) {
      if (this.query) {
        console.log('submit')
        document.forms[0].submit()
      }
      else {
        alert('Show me da qwaery')
      }
    }
  }
})
