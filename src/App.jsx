import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import TodoItem from './components/TodoItem'
import FormInput from './components/FormInput'
import './App.css'


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sholat Subuh berjamaah"
      },
      {
        id: 2,
        title: "Baca Quran"
      },
      {
        id: 3,
        title: "Baca Buku"
      },
      {
        id: 4,
        title: "Nonton..."
      }
    ]
  }
  deleteTask = (id) => {
    // console.log("delete ok")
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
  }
  addTask = (data) => {
    console.log(data)
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <div className='App'>
          <a href="https://rezweb.my.id" target="_blank">
            <img src={reactLogo} className="logo react " alt="React logo" />
          </a>
          <h1>Task List</h1>
        </div>
        <div className="list">
          {todos.map(item =>
            // kiirm props ke komponen todoitem
            <TodoItem key={item.id} todo={item} del={this.deleteTask} />
          )}
        </div>

        <div className='input-form'>
          <FormInput add={this.addTask} />
        </div>
      </div>
    )
  }
}



export default App;

