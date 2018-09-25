const state = {
  dialog: [],
  token: localStorage.getItem( 'token' )
}

const mutations = {
  ADD_DIALOG (state, payload) {
    state.dialog = payload || []
  },
  ADD_MESSAGE (state, payload) {
    state.dialog.push(payload)
  },
  SET_TOKEN (state, payload) {
    localStorage.setItem( 'token', payload )
    state.token = payload
  }
}

const actions = {
  addDialog (context, payload) {
    context.commit('ADD_DIALOG', payload)
  },
  addMessage (context, payload) {
    context.commit('ADD_MESSAGE', payload)
  },
  setToken (context, payload) {
    context.commit('SET_TOKEN', payload)
  }
}

const getters = {
  getDialog: state => state.dialog,
  getToken: state => state.token
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

const widgetHeader = {
  template:
  `<div 
    class="widget__header d-flex justify-content-between px-2"
    @click="switchDialog"
  >
    <div>
      <span class="widget__header--text-big text-monospace">LIVE CHAT</span>
      <p class="widget__header--text-middle mb-0">How can we help?</p>
    </div>
    
    <div class="widget__header__icon">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><circle style="fill:#71E2EF;" cx="256" cy="256" r="256"/><path style="fill:#71E2EF;" d="M123.814,472.781h268.386c60.418-38.04,103.808-100.628,116.184-173.773L322.367,112.992L123.814,472.781z"/></g><path style="fill:#38C6D9;" d="M123.814,472.781h268.386c60.418-38.04,103.808-100.628,116.184-173.773L322.367,112.992L123.814,472.781z"/><path style="fill:#494948;" d="M202.416,101.71c0,0-13.465-7.871-34.047,11.205c-35.34,32.754-41.805,148.256,21.549,247.811h145.239c0,0,69.675-160.18-2.155-241.204C284.262,64.543,202.416,101.71,202.416,101.71z"/><path style="fill:#333333;" d="M333.002,119.524c-22.566-25.455-52.226-31.153-77.576-29.937v271.141h79.731C335.157,360.727,404.832,200.547,333.002,119.524z"/><rect x="213.333" y="292.219" style="fill:#FCD088;" width="85.333" height="104.296"/><rect x="255.431" y="292.219" style="fill:#DDAB62;" width="43.236" height="104.296"/><path style="fill:#D9EDEC;" d="M199.456,351.454l-45.22,9.044c-23.024,4.606-39.596,24.821-39.596,48.3v59.809c40.432,27.067,89.05,42.861,141.36,42.861s100.928-15.794,141.36-42.861v-59.809c0-23.48-16.572-43.696-39.596-48.3l-45.22-9.044l-7.992-11.666c-1.496-2.184-4.327-3.007-6.759-1.965L256,385.322l-41.543-47.48c-2.415-1.053-5.239-0.262-6.754,1.893L199.456,351.454z"/><path style="fill:#AABAB9;" d="M357.764,360.5l-45.22-9.044l-7.992-11.666c-1.496-2.184-4.327-3.007-6.759-1.965L256,385.322l-0.574-0.655v126.792c0.191,0,0.381,0.01,0.574,0.01c52.31,0,100.928-15.794,141.36-42.861v-59.809C397.36,385.319,380.788,365.104,357.764,360.5z"/><path style="fill:#FFEDB5;" d="M347.531,205.44c0.459-4.244,0.698-8.428,0.698-12.509c0-53.974-41.293-97.728-92.229-97.728s-92.229,43.753-92.229,97.728c0,4.08,0.24,8.264,0.698,12.509c-8.945,2.326-13.202,16.087-9.506,30.817c3.708,14.776,14.014,24.921,23.018,22.661c0.821-0.205,1.586-0.538,2.326-0.927c16.667,33.452,44.351,60.594,75.693,60.594s59.027-27.139,75.693-60.594c0.74,0.39,1.505,0.722,2.326,0.927c9.004,2.26,19.309-7.885,23.018-22.661C360.732,221.527,356.476,207.763,347.531,205.44z"/><path style="fill:#E8CF89;" d="M347.531,205.44c0.459-4.244,0.698-8.428,0.698-12.509c0-53.974-41.293-97.728-92.229-97.728c-0.193,0-0.381,0.014-0.574,0.016v223.349c0.191,0.002,0.381,0.016,0.574,0.016c31.342,0,59.027-27.139,75.693-60.594c0.74,0.39,1.505,0.722,2.326,0.927c9.004,2.26,19.309-7.885,23.018-22.661C360.732,221.527,356.476,207.763,347.531,205.44z"/><polygon style="fill:#B7CECC;" points="256,481.461 211.32,401.291 256,385.322 300.68,401.291 "/><polygon style="fill:#8EA3A0;" points="300.68,401.291 256,385.322 255.426,385.527 255.426,480.432 256,481.461 "/><path style="fill:#273B7A;" d="M189.345,353.477l-35.73,6.632c-23.164,4.634-39.838,24.972-39.838,48.595v60.175c40.531,27.133,89.24,42.996,141.648,43.111v-46.289L189.345,353.477z"/><path style="fill:#121149;" d="M358.384,360.108l-35.873-6.661L256,466.673l-0.574-0.974v46.289c0.191,0,0.381,0.01,0.574,0.01c52.629,0,101.543-15.891,142.222-43.122v-60.173C398.222,385.081,381.549,364.742,358.384,360.108z"/><path style="fill:#494948;" d="M330.847,279.704C330.4,187.74,220.948,155.152,220.948,155.152s-21.592,34.204-56.479,50.288c0,0-5.868,0.998-9.892,11.342c-4.024,10.343-12.929-88.35,53.872-119.38s117.634-2.481,141.36,50.424C387.305,231.434,330.847,279.704,330.847,279.704z"/><path style="fill:#333333;" d="M349.81,147.825c-17.789-39.665-50.816-65.639-94.384-63.078v85.47c32.125,17.601,75.142,51.903,75.421,109.487C330.847,279.704,387.305,231.434,349.81,147.825z"/><g><circle style="fill:#D9EDEC;" cx="256" cy="403.963" r="4.31"/><circle style="fill:#D9EDEC;" cx="256" cy="421.788" r="4.31"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    </div>
  </div>`,
  methods: {
    switchDialog () {
      this.$emit('switch-dialog')
    }
  }
}

const widgetMessage = {
  template:
  `<li 
    class="widget__message" 
    :class="{
      'widget__message--right': message.sender.type !== 'manager',
      'widget__message--left': message.sender.type === 'manager'
    }"
  >
    <p class="widget__message__text">{{message.text}}</p>
  </li>`,
  props: ['message']
}

const widgetDialog = {
  template:
  `<div class="widget__dialog">
    <div v-if="tokenIsExist">
      <p class="widget__dialog__request px-2">Please, enter your name.</p>
      <div class="input-group input-group-sm mb-3">
        <input 
          type="text" 
          class="form-control"  
          v-model="name"
          @keyup.enter="sendName"
          placeholder="Type a name here" 
          aria-label="Type a name here"
        >
        <div class="input-group-append">
          <button 
            class="btn btn-outline-primary" 
            type="button" @click="sendName"
          >Send</button>
        </div>
      </div>
    </div>
    <ul 
      v-else
      class="widget__message-list"
      ref="messages"
    >
      <transition-group tag="div" class="img-slider" name="slide">
        <widget-message 
          :message="message" 
          v-for='(message, index) in dialog' 
          :key="index"
        ></widget-message>
      </transition-group>
    </ul>
  </div>`,
  data () {
    return {
      name: ''
    }
  },
  computed: {
    dialog () {
      return this.$store.getters.getDialog
    },
    tokenIsExist () {
      return !this.$store.getters.getToken
    }
  },
  methods: {
    sendName () {
      wsServer.send('addClient', {
        name: this.name
      })
    }
  },
  components: {
    widgetMessage
  },
  updated () {
    var messages = this.$refs.messages.children[0].children
    if(messages && messages.length > 0) {
      messages[messages.length - 1].scrollIntoView()
    }
  }
}

const widgetForm = {
  template:
  `<div>
    <hr />
    <div class="input-group input-group-sm mb-3">
      <input 
        type="text" 
        class="form-control"  
        v-model="text"
        @keyup.enter="sendMessage"
        placeholder="Type a message here" 
        aria-label="Type a message here"
        :disabled="tokenIsExist"
      >
      <div class="input-group-append">
        <button 
          class="btn btn-outline-primary" 
          type="button"
          @click="sendMessage"
          :disabled="tokenIsExist"
        >Send</button>
      </div>
    </div>
  </div>`,
  data () {
    return {
      text: ''
    }
  },
  computed: {
    tokenIsExist () {
      return !this.$store.getters.getToken
    }
  },
  methods: {
    sendMessage () {
      if(this.text) {
        wsServer.send('addMessage', { 
          token: this.$store.getters.getToken,
          text: this.text
        })
        
        this.text = ''
      }
    }
  }
}

const widgetBody = {
  template:
  `<div class="widget__body d-flex flex-column justify-content-end px-2">
    <widget-dialog></widget-dialog>
    <widget-form></widget-form>
  </div>`,
  components: {
    widgetDialog,
    widgetForm
  }
}

new Vue({
  el: '#widget',
  components: {
    widgetHeader,
    widgetBody
  },
  store,
  template: 
  `<div 
    class="widget widget--right widget--color-main"
  >
    <widget-header @switch-dialog="switchDiolog"></widget-header>
    <transition name="fade">
      <widget-body v-if="dialogOpen"></widget-body>
    </transition>
  </div>`,
  data () {
    return {
      dialogOpen: true
    }
  },
  methods: {
    switchDiolog () {
      this.dialogOpen = !this.dialogOpen
    }
  }
})

//// Web-socket ////

const messageEvents = {
  'setToken': function(data) {
    store.dispatch('setToken', data.token)
  },
  'getDialog': function(data) {
    store.dispatch('addDialog', data.dialog)
  },
  'getLastMessage': function(data) {
    store.dispatch('addMessage', data.message)
  }
}

const wsEvents = {
  onMessage: function(event) {
    const data = JSON.parse(event.data);
      
    this.messageEvents[data.event].call(this, data.data)
  },
  onOpen: function() {
    var token = store.getters.getToken
    if(token)
      this.send('continueDialog', { token })
  },
  onError: function(e) {
    alert('Not Catched error')

    throw new Error('Not Catched error')
  },
  onClone: function() {
    throw new Error('Close the contection with server')
  }
}

class WSServer {
  constructor(address, port) {
    this.ws = new WebSocket("ws://" + address  + ':' + port)
    this.messageEvents = messageEvents
    this._setWsEvents()
  }

  _setWsEvents() {
    this.ws.onmessage = wsEvents.onMessage.bind(this)
    this.ws.onopen = wsEvents.onOpen.bind(this)
    this.ws.onclose = wsEvents.onClone.bind(this)
    this.ws.onerror = wsEvents.onError.bind(this)
  }

  on(event, func) {
    this.messageEvents[event] = func
  }

  send(event, data) {
    this.ws.send( JSON.stringify({
      event,
      data
    }) )    
  }
}

////

// var wsServer = new WSServer("93.171.10.54", 5000)
var wsServer = new WSServer("localhost", 5000)