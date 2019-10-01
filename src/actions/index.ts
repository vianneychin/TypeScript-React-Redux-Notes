import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchToDosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  // When using redux-thunk for promises, we return a function.
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    dispatch<FetchToDosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    })
  }
}
