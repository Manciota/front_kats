import './styles.css'

import logo from '../../img/cat-error.svg'

export const GenericError = () => (
  <div className='error-container'>
    <img src={logo} alt='Wilston, we have a problem!' />
    <p>Houve um erro!</p>
  </div>
)
