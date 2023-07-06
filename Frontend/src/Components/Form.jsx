import {React,useState} from 'react'
import './Common.css'
const Form = () => {
    const [text, setText] = useState("")
    const onFormSubmit=()=>{

    }
  const  onInputChange=(e)=>{
   
    setText(e.target.value);
    }
  return (
    <form className='form'onSubmit={onFormSubmit} >
        <input placeholder='Enter new TODO...' onChange={onInputChange}/>
    </form>
  )
}

export default Form