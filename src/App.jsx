import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import TodoItem from './components/TodoItem'
import FormInput from './components/FormInput'
import EditModal from './components/EditModal'
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
    ],
    isEdit: false,
    editData: {
      id: "",
      title: ""
    },
  }
  
  deleteTask = (id) => {
    // console.log("delete ok")
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
  }
  addTask = (data) => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }
  
  openModal = () => {
    this.setState({
      isEdit: true
    })
  }
  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }
  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
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
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              open={this.openModal}
            />

          )}
        </div>
        <div className='input-form'>
          <FormInput add={this.addTask} />
        </div>
         <EditModal edit={this.state.isEdit} close={this.closeModal}/>

      </div>
    )
  }
}



export default App;

