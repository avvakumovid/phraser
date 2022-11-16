import { Task } from '../types/types';

export const getRandomItam = (length: number) => {
    return Math.floor(Math.random() * length);
};

export const getRandomTasks = (data: Task[]) => {
    const firstTaskIndex = getRandomItam(data.length);
    let secondTaskIndex;
    do {
        secondTaskIndex = getRandomItam(data.length);
    } while (firstTaskIndex === secondTaskIndex);
    return [data[firstTaskIndex], data[secondTaskIndex]];
};