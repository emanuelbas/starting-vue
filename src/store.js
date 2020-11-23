import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	frutas: [
  		{nombre: "Manzana", cantidad: 0},
  		{nombre: "Naranja", cantidad: 0},
  		{nombre: "Banana", cantidad: 0}
  	]
  }
})
