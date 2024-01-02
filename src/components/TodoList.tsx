import React from 'react'
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList = ({ todos, setTodos,completedTodos,setCompletedTodos }: Props) => {


    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {(provided) => (
                    <div className="todos" ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">
                            Active Tasks
                        </span>
                        {
                            todos.map((todo,index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    todos={todos}
                                    key={todo.id}
                                    setTodos={setTodos}
                                />
                            ))
                        }
                    </div>
                )
                }

            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided) => (
                        <div className="todos remove">
                            <span className="todos__heading">
                                Completed Tasks
                            </span>
                            {completedTodos.map((todo,index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    todos={completedTodos}
                                    key={todo.id}
                                    setTodos={setCompletedTodos}
                                />
                            ))
                            }
                        </div>
                    )
                }

            </Droppable>

        </div>
    )
}

export default TodoList