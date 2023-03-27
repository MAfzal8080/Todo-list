import {configureStore} from '@reduxjs/toolkit'
import EventSlice from './EventSlice'

const store =  configureStore({
    reducer: {
        events: EventSlice,
    },
});

export default store