import { Nav, Btn } from ".";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useForm } from "../hooks/useForm";


export const Login = () => {

    const { email, password, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    });


    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            alert('Bienvenido');
            navigate("/");
        } catch (error) {
            setError(error.message);
            alert(error);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
            await resetPassword(user.email);
            setError('We sent you an email. Check your inbox')
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <>
            {/* <Nav color="black" /> */}
            <section className="container-sm mt-4">
                <div className="row justify-content-md-center">
                    <h1 className="mb-5 fw-bold text-center">Inicio de Sesión</h1>
                    <form onSubmit={handleSubmit} className="col-12 col-md-6 ">
                        <div className="check mb-4">
                            <label htmlFor="email" className="form-label fw-bold">Correo:</label>
                            <input type="email" name="email" className="form-control" id="email" value={email} onChange={onInputChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-bold">Contraseña:</label>
                            <input type="password" name="password" className="form-control " id="password" value={password} onChange={onInputChange} />
                        </div>
                        <div className="text-center">
                            <Btn text="Iniciar" type="submit" color="yellow" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
