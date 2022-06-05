import './styles.css'

export const Button = ({
  disabled = false,
  onClick,
  title,
  type = 'button',
  icon
}) => (
  <button className='button' onClick={onClick} type={type} disabled={disabled}>
    {icon && icon}
    {title}
  </button>
)
