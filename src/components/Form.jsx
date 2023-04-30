
import { Btn } from ".";

export const Form = ({ handleSubmit, onInputChange, email, password }) => {

    return (

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

    )
}
