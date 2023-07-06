import {React,useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../Redux/action';
import './Common.css'
const Form = () => {
    const [text, setText] = useState("");
    const dispatch=useDispatch();
    const onFormSubmit=(e)=>{
      e.preventDefault();
      
      dispatch(addNewTodo(text));
     setText('')
    }
  const  onInputChange=(e)=>{
   
    setText(e.target.value);
  
    }
  return (
    <form className='form'onSubmit={onFormSubmit} >
        <input placeholder='Enter new TODO...' onChange={onInputChange} value={text}/>
    </form>
  )
}

export default Form