import * as types from './../constant/ActionTypes';

export const listALl = () => {
	return {
		type: types.LIST_ALL
	}
}

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task
  }
}

export const toggleForm = (task) => {
  return {
    type: types.TOGGLE_FORM,
    task
  }
}

export const closeForm = (task) => {
  return {
    type: types.CLOSE_FORM,
    task
  }
}

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  }
}