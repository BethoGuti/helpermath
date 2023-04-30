import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';



export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#181848' }} className="p-3 text-center ">
      <div className="d-flex justify-content-evenly flex-column flex-sm-row text-white p-5">
        <h3 className="m-3"><FontAwesomeIcon icon={faFacebookSquare} className="me-3" />
Facebook</h3>
        <h3 className="m-3"><FontAwesomeIcon icon={faTwitterSquare} className="me-3"/>Twitter</h3>
        <h3 className="m-3"><FontAwesomeIcon icon={faInstagramSquare} className="me-3"/>Instagram</h3>
      </div>
      <div>
        <h4 className="text-light-emphasis fs-5">CREATED BY MELAWEB</h4>
      </div>
    </footer>
  )
}
