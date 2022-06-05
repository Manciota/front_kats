import './styles.css'

export const Button = ({
  disabled = false,
  onClick,
  title,
  type = 'button'
}) => (
  <button className='button' onClick={onClick} type={type} disabled={disabled}>
    {title}
  </button>
)
