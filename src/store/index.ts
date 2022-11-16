import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import mainSlice from './slice/mainSlice'


const rootReducer = combineReducers({
    main: mainSlice
})

const store = configureStore({
    reducer: rootReducer
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch //

export type RootState = ReturnType<typeof rootReducer>

export default store