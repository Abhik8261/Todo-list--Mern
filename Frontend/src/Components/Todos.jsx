import {React,useEffect} from 'react'
import Todo from './Todo';
import { getAllTodos } from '../Redux/action/index';
import { useDispatch,useSelector } from 'react-redux';
const Todos = () => {
    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos)
    useEffect(() => {
      dispatch(getAllTodos());
     
    },[])
    
  return (
    <article>
        <ul>
            {
                todos.map(todo =>(

                   <Todo 
                   key={todo._id}
                   todo={todo}
                   />
                ))
            }
        </ul>
    </article>
  )
}

export default Todos