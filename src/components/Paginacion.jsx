import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Paginacion = ( {onCount, onSubtract} ) => {
    return (
        <nav aria-label="Page navigation example" className='position-fixed bottom-0 end-0 start-0'>
            <ul className="pagination justify-content-center" >
                <li className="page-item disabled" onClick={onSubtract}>
                    <a className="page-link"><FontAwesomeIcon icon={faArrowLeft} className="fa-2x" /></a>
                </li>
                <li className="page-item" onClick={onCount}>
                    <a className="page-link" href="#"><FontAwesomeIcon icon={faArrowRight} className="fa-2x" /></a>
                </li>
            </ul>
        </nav>
    )
}
