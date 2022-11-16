import { createSlice } from '@reduxjs/toolkit';
import { getRandomTasks } from '../../services/tasks';
import { Task } from '../../types/types';
import { data } from './../../data/data';

interface ITask {
    number: number;
    title: string;
    audio: (id: string) => any;
    to: string;
    duration: number;
}
const tasks: ITask[] = [
    {
        number: 1,
        title: 'ПОСЛУШАЙ И ЗАПОМНИ',
        audio: require('../../assets/sounds/ПОСЛУШАЙ И ЗАПОМНИ.mp3'),
        to: '/questionTask/0',
        duration: 1600,
    },
    {
        number: 2,
        title: 'послушай и соедени картинки правильно',
        audio: require('../../assets/sounds/послушай и соедени картинки правильно.mp3'),
        to: '/finalTask',
        duration: 2600,
    },
];

type SliceState = {
    tasks: Task[],
    taskNumbers: ITask[],
    complitedTaskId: Number[],
}

// First approach: define the initial state using that type
const initialState: SliceState = {
    tasks: [],
    complitedTaskId: [],
    taskNumbers: tasks
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
                    const res = state.complitedTaskId.findIndex(c => c === task.id);
                    return res === -1;
                })
            );
            state.tasks = tasks;
        },
    },
})


export const { setTasks } = slice.actions

export default slice.reducer;