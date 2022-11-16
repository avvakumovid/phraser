import { createSlice } from '@reduxjs/toolkit';
import { getRandomTasks } from '../../services/tasks';
import { Task } from '../../types/types';
import { data } from './../../data/data';

type SliceState = {
    tasks: Task[],
    complitedTaskId: Number[],
}

// First approach: define the initial state using that type
const initialState: SliceState = {
    tasks: [],
    complitedTaskId: []
}

const slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTasks: state => {
            if (state.tasks.length) {
                state.complitedTaskId = [
                    ...state.complitedTaskId,
                    ...state.tasks.map(task => task.id),
                ];
            }
            if (data.length - state.complitedTaskId.length <= 1) {
                state.complitedTaskId = [];
            }
            const tasks = getRandomTasks(
                data.filter(task => {
                    const res = state.complitedTaskId.findIndex(c => c == task.id);
                    return res === -1;
                })
            );
            state.tasks = tasks;
        },
    },
})


export const { setTasks } = slice.actions

export default slice.reducer;