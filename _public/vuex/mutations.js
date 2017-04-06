import * as types from './mutation-types'

export default {
  [types.RECEIVE_MESSAGE] (state, { message }) {
    addMessage(state, message);
  },
  [types.SET_NAME] (state, { name }) {
    setName(state, name);
  },
}

function addMessage (state, message) {
  console.log('Receive message');
}

function setName (state, name) {
  state.name = name
}