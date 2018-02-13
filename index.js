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
    onBlockClickLeft: function(e) {
      console.log('onBlockClickLeft')
      console.log('e.button', e.button)
    },
    onBlockClickMiddle: function(e) {
      console.log('onBlockClickLeft')
      console.log('e.button', e.button)
    },
    onBlockClickRight: function(e) {
      console.log('onBlockClickLeft')
      console.log('e.button', e.button)
      this.showContextMenu = !this.showContextMenu
      if (this.showContextMenu) {
        this.top= e.y+ 'px'
        this.left= e.x+ 'px'
      }
    },
    closeContextMenu: function() {
      console.log('closeContextMenu')
    },
    onCopyClick: function() {
      console.log('onCopyClick')
    },
    onPasteClick: function() {
      console.log('onPasteClick')
    }
  }
})
