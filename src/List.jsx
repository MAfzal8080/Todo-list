import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeEvent, deleteAll } from './store/EventSlice'

const List = () => {
  const [text, setText] = useState(false)

  const dispatch = useDispatch()
    
  const data = useSelector((state)=>{
    return state.events;
  })

  const handleDelete = (data) =>{
    dispatch(removeEvent(data))
  }

  const handleDeleteAll = (len) =>{
    dispatch(deleteAll(len))
  }

  let myStyle = {
    display:'inline-flex',
  }
  const handleChange = ()=>{
    if (text === true) {
      setText(false)
    }
    else{
      setText(true)
    }
    
  }

  if (text === true) {
    myStyle = {
      display: 'inline-flex',
      textDecoration:'line-through',
      color:'grey'
    }
  }
  else{
    myStyle = {
      display: 'inline-flex',
    }
  }

  return (
    <div className='container p-3 border border-primary rounded bg-light' style={{width:'700px'}}>
      <h4>Todo List</h4>
      <p className={`${data.length===0 ? 'd-flex' : 'd-none'}` }>No task added</p>
      {data.map((data, id) =>{
        return <div className="container border border-info bg-light p-2 align-items-center" style={{height:'45px', verticalAlign:'middle'}} key={id}>
            <span><h5 style={myStyle}>{data}</h5></span><button type='button' className='btn-close' style={{float:'right'}} aria-label='Close' onClick={() => handleDelete(data)} ></button><input className='form-check-input border border-dark' style={{float:'right'}} type="checkbox" name="check" onClick={handleChange} />
        </div>
      })}
      <button className={`btn btn-danger d-block mt-3 ${data.length===0 ? 'd-none' : ''}`} onClick={() => handleDeleteAll(data.length)}>Remove all items</button>
    </div>
  )
}

export default List
