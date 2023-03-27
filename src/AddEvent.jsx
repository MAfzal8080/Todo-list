import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "./store/EventSlice";
import List from  "./List"

const AddEvent = () => {
    const dispatch = useDispatch();
    const [event, setEvent] = useState("")

    const handleChange = (e) => {
        setEvent({...event, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(event.name.length !== 0){
        dispatch(addEvent(event.name))
      }
    }

  return (
    <>
    <div className="container my-4" style={{width:'700px'}}>
      <form onSubmit={handleSubmit} className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        <legend><b>Add events</b></legend>
        <h5>Event name</h5>
        <div className="input-group mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter event"
            aria-label="Enter event"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <button type="submit" className="input-group-text bg-primary text-light" id="basic-addon2"><b>+</b></button>
        </div>
      </form>
    </div>
    <List />
    </>
  );
};

export default AddEvent;
