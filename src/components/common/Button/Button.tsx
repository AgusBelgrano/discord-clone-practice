import './Button.css';  

const Button = ({type = "button", value}: any) => {
  return (
    <button type={type}>{value}</button>
  )
}

export default Button;