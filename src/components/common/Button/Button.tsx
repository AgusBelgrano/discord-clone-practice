import './Button.css';  

const Button = ({type = "button", value, onClick}: any) => {
  return (
    <button type={type} onClick={onClick}>{value}</button>
  )
}

export default Button;