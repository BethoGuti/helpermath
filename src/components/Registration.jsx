import { Nav, Btn } from "."
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useForm } from "../hooks/useForm"

export const Registration = () => {

    const { signup } = useAuth();


    const { email, password,name, onInputChange, onResetForm } = useForm({
        email: '',
        password: '',
        name: ''
    });


    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const user = await signup(email, password, name);
            alert('¡Se agrego correctamente!')
            navigate("/");
        } catch (error) {
            setError(error.message);
            alert(error);
        }
    };

    return (
        <>
            {/* <Nav color="black" /> */}
            <section className="container-sm mt-5">
                <div className="row justify-content-md-center">
                    <h1 className="mb-5 fw-bold text-center">Registro</h1>
                    <form onSubmit={handleSubmit} className="col-12 col-md-6 ">
                        <div className="check mb-4">
                            <label htmlFor="name" className="form-label fw-bold">Nombre Completo:</label>
                            <input type="text" name="name" className="form-control" id="name" value={name} onChange={onInputChange} />
                        </div>
                        <div className="check mb-4">
                            <label htmlFor="email" className="form-label fw-bold">Correo:</label>
                            <input type="email" name="email" className="form-control" id="email" value={email} onChange={onInputChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-bold">Contraseña:</label>
                            <input type="password" name="password" className="form-control " id="password" value={password} onChange={onInputChange} />
                        </div>
                        <div className="text-center">
                            <Btn text="Registrar" type="submit" color="yellow" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
