import { useContext } from "react";
import { createContext, useState } from "react";

export const LessonContext = createContext();

export const useLessons = () => {
    const con = useContext(LessonContext);
    if (!con) throw new Error("There is no Auth provider");
    return con;
};

export const LessonProviner = ({ children }) => {
    const [lesson, setLesson] = useState({
        Title: '',
        img: '',
        description: '',
        duracion: '',
        video: ''
    });

    return (
        <LessonContext.Provider value={{ lesson, setLesson }}>
            {children}
        </LessonContext.Provider>
    );
}