import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const colorDefault = {
    red: '#149EF2',
    yellow: '#F0A818'
}

export const Btn = ({color, text, type = 'button'}) => {
  return (
    <button className='btn text-white fw-bold fs-4 mt-5 rounded-pill ms-2 me-2' style={ { background: colorDefault[color], width: '310px' } } type={type}  > {text} </button>
  )
}

Btn.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}