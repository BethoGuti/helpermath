import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Btn, ContentHeader, Nav } from "."


export const Header = () => {
    const { user, logout, loading } = useAuth();
    return (
        <header className="pb-5" style={{ backgroundColor: '#181848' }}>
            {/* <Nav /> */}
            <ContentHeader />
            <div className="text-center">
                {
                    user ? '' :<>
                        <Link to='/login'>
                            <Btn text='Iniciar Sesión' color='red' />
                        </Link>

                        <Link to='/registro'>
                            <Btn text='Registrase' color='yellow' />
                        </Link>
                    </>
                }

            </div>
        </header>
    )
}
