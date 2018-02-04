var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: 'the event is easier to see with text'
  },
  methods: {
    executeSearch:function() {
      console.log(this.query)
    }
  }
})
