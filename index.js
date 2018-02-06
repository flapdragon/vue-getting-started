var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: 'the event is easier to see with text'
  },
  methods: {
    clickGrandparent:function(event) {
      console.log('method: clickGrandparent')
    },
    clickParent:function(event) {
      console.log('method: clickParent')
    },
    clickButton:function(event) {
      console.log('method: clickButton')
    }
  }
})
