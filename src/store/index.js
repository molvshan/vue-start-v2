import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 14,
    status: 'normal',
    todos: [
      {
        id: '1',
        label: 'a'
      },
      {
        id: '2',
        label: 'b'
      },
      {
        id: '3',
        label: 'c'
      }
    ]
  },
  mutations: {
    increment(state, obj) {
      console.log(obj.type);
      state.count += obj.num;
    }
  },
  getters: {
    addCount: state =>  state.count + 11,
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

export default store
