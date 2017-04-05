import * as types from './mutation-types'

export const getMessage = ({ commit }) => {
  commit(types.RECEIVE_MESSAGE, {
    'teste'
  })
}