import { useLessons } from "../context/LessonContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"
import { Btn } from "./Btn"

export const AddLesson = () => {

    const { lesson, setLesson } = useLessons();
    const navigate = useNavigate();

    console.log(lesson);

    const { Title, description, img, duracion, onInputChange } = useForm({
        Title: '',
        description: '',
        img: '',
        duracion: '',
        video: ''
    });

    const onFormSubmit = (e) => {
        
        e.preventDefault();
        setLesson({
            ...lesson,
            Title,
            description,
            img,
            duracion,
            video
        });
        navigate("/addPAgeLesson");
    }

    return (
        <section className="container-sm mt-5">
            <div className="row justify-content-md-center">
                <h1 className="mb-5 fw-bold text-center">Agregar información sobre la lección</h1>
                <form className="col-12 col-md-6 " onSubmit={onFormSubmit}>
                    <div className="check mb-4">
                        <label htmlFor="name" className="form-label fw-bold">Nombre de la lección:</label>
                        <input type="text" name="Title" className="form-control" id="name" onChange={onInputChange} />
                    </div>
                    <div className="check mb-4">
                        <label htmlFor="email" className="form-label fw-bold">Descripción de la lección:</label>
                        <input type="text" name="description" className="form-control" id="email" onChange={onInputChange} />
                    </div>
                    <div className="check mb-4">
                        <label htmlFor="number" className="form-label fw-bold">Duración de la lección:</label>
                        <input type="number" name="duracion" className="form-control" id="email" onChange={onInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="form-label fw-bold">Imagen para la lección:</label>
                        <input type="text" name="img" className="form-control " id="password" placeholder="Agrega la url de la imagen" onChange={onInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="form-label fw-bold">Imagen para la lección:</label>
                        <input type="text" name="video" className="form-control " id="password" placeholder="Agrega la url del video" onChange={onInputChange} />
                    </div>
                    <div className="text-center">
                        <Btn text="Guardar" color="red" type="submit" />
                    </div>
                </form>
            </div>
        </section>
    )
}
