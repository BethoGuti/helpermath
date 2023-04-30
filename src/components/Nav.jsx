import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import Reack from "react";

export const Nav = Reack.memo(({ color = 'white' }) => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            logout();
            navigate("/");
            window.location.reload();

        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#181848' }}>
            <div className="container-fluid">
                <a className="navbar-brand me-5" href="#"><img style={{ width: '45px' }} src={'/img/logo.png'} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'white' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" style={{ color: color }} aria-current="page" to={'/'}>Inicio</Link>
                        </li>
                        {
                            (user
                                ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bold" style={{ color: color }} to={''}>Mis Lecciones</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bold" style={{ color: color }} onClick={handleLogout} >Cerrar Sesión</Link>
                                    </li>
                                </>
                                :
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" style={{ color: color }} to={'/login'}>Iniciar Sesión</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" style={{ color: color }} to={'/registro'}>Registrarse</Link>
                                        </li>
                                    </>
                                )
                            )

                        }

                        {
                            user ?
                            user.rol == 'Admin' ?
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" style={{ color: color }} to={'/addLesson'}>Agregar nueva lección</Link>
                                </li>
                                : ''
                                : ''
                        }

                    </ul>
                </div>
            </div >
        </nav >
    )
}
)
