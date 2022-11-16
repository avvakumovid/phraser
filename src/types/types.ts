export interface SvgProps {
    scale?: number;
    topColor: string;
    bottomColor: string;
}
export interface IColors {
    top: string;
    bottom: string;
    bg: string;
    text: string;
};



export interface IData {
    taskId: number
    taskName: string
    accept: boolean
}


export interface Task {
    id: number
    phrase: string
    explanation: string
    image: (id: string) => any
    audio1: (id: string) => any
    audio2: (id: string) => any
    audio3: (id: string) => any
}
