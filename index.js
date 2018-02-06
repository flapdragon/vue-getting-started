var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: ''
  },
  methods: {
    grandparentClick:function(event) {
      console.log('method: grandparentClick')
    },
    parentClick:function(event) {
      console.log('method: parentClick')
    },
    executeSearch:function(event) {
      console.log('method: executeSearch')
    }
  }
})
