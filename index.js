Vue.config.keyCodes = {
  f1: 112
}

var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: '',
    showContextMenu: false,
    top: '0px',
    left: '0px'
  },
  methods: {
    executeNewSearch: function() {
      console.log('executeNewSearch')
    },
    executeSearchInNewWindow: function() {
      console.log('executeSearchInNewWindow')
      window.open(window.location.href, '_blank')
    }
  }
})
