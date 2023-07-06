import {React,useState} from 'react'
import './Common.css'
import { toggleTodo,updateTodo } from '../Redux/action'
import { delteTodo } from '../Redux/action'
import { useDispatch } from 'react-redux'



const Todo = ({todo}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
    const dispatch =useDispatch();


const onFormSubmit=(e)=>{
  e.preventDefault();
  setEditing(prevState=>!prevState);
  dispatch(updateTodo(todo._id,text))
}
  return (
   <li className='task'onClick={()=>dispatch(toggleTodo(todo._id))}
   style={{
    textDecoration:todo.done?'line-through':'',
    color:todo.done?'#bdc3c7':'#34495e'
   }}
   >
    <span style={{display:editing?'none':''}}>{todo.data}</span>
    <form style={{display:editing?'inline':'none'}} onSubmit={onFormSubmit}>
      <input  className='edit-todo'
       value={text}
       onChange={(e)=>{ setText(e.target.value)}}
       />
    </form >
    <span className='icon' onClick={()=>{dispatch(delteTodo(todo._id))}}>
    <i class="fa fa-trash"></i>
    </span>
    <span className='icon' onClick={()=>setEditing(prevState=>!prevState)}> 
        <i className='fas fa-pen'/>
    </span>
   </li>
  )
}

export default Todo