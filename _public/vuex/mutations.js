import * as types from './mutation-types';

exports default {
  [types.RECEIVE_MESSAGE] (state, { message }) {
    addMessage(state, message);
  }
}

function addMessage (state, message) {
  console.log('Receive message');
}