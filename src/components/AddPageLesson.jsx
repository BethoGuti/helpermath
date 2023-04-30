import { useState } from "react";
import { useLessons } from "../context/LessonContext";
import { useForm } from "../hooks/useForm"
import { Btn } from "./Btn"
import { app } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AddPageLesson = () => {
    const navigate = useNavigate();
    const { lesson, setLesson } = useLessons();
    const [lessons, setlessons] = useState([])
    const { subtitle, content, img, onInputChange, onResetForm } = useForm({
        subtitle: '',
        content: '',
        img: ''
    });

    const onSaveLesson = e => {
        e.preventDefault();
        const array = [];
        const arrayLesson = {subtitle, content, img};
        array.push(arrayLesson);
        setlessons([...lessons, ...array])
        onResetForm();
    }

    const onSave = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        try {
            const leccion = {
                ...lesson,
                lessons
            };
            // console.log(leccion);
            const docRef = await addDoc(collection(db, "lecciones"), {
                ...lesson,
                lesson: lessons
            });
            navigate('/');
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          

        setLesson({
            ...lesson,
            lessons
        })
    }

    console.log(lessons)

    return (
        <section className="container-sm mt-5">
            <div className="row justify-content-md-center">
                <h1 className="mb-5 fw-bold text-center">Agregar páginas para la lección</h1>
                <form className="col-12 col-md-6 ">
                    <div className="check mb-4">
                        <label htmlFor="subtitle" className="form-label fw-bold">Subtitulo del tema:</label>
                        <input type="text" name="subtitle" className="form-control" id="name" onChange={onInputChange} value={subtitle} />
                    </div>
                    <div className="check mb-4">
                        <label htmlFor="email" className="form-label fw-bold">Descripción del tema:</label>
                        <input type="text" name="content" className="form-control" id="email" onChange={onInputChange} value={content} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="form-label fw-bold">Imagen para la lección:</label>
                        <input type="text" name="img" className="form-control " id="password" onChange={onInputChange} value={img} />
                    </div>
                    <div className="text-center" onClick={onSaveLesson} >
                        <Btn text="Guardar" color="red" onClick={onSaveLesson} />
                    </div>
                    <div className="text-center" onClick={onSave} >
                        <Btn text="Finalizar" color="red" />
                    </div>
                </form>
            </div>
        </section>
    )
}