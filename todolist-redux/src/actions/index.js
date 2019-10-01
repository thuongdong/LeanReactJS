import * as types from './../constant/ActionTypes'

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task
  }
}

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
}

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  }
}

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id
  }
}