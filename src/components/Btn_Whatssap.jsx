import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Btn_Whatssap = () => {
    return (
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', color: 'green', fontSize: '4rem' }}>
            <a href="https://api.whatsapp.com/send?phone=522461878084" target={'_blank'}>
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    )
}
