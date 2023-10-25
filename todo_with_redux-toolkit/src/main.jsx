import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoForm from './components/TodoForm.jsx'
import Todos from './components/Todos.jsx'
import { store } from './app/store.js'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store} >
    <App />
    <TodoForm/>
    <Todos/>
  </Provider>,
)
