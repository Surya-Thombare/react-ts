import React from 'react'
import './styles.css'
import { Todo } from '../models'
import TodoListItem from "./TodoListItem";



interface Props{
  todos: Todo[];
  setTodos: (todos: Todo[]) => void
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((todo) => 
        <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
      )}
    </div>
  )
}

export default TodoList