import {createSlice} from '@reduxjs/toolkit'

const EventSlice = createSlice({
    name: 'event',
    initialState: [],
    reducers: {
        addEvent(state, action){
            state.push(action.payload)
        },
        removeEvent(state, action){
            state.splice(action.payload, 1)
        },
        deleteAll(state, action){
           for (let index = 0; index <= action.payload; index++) {
                state.pop()  
            }
        }
    }
})

export default EventSlice.reducer
export const { addEvent, removeEvent, deleteAll} = EventSlice.actions
