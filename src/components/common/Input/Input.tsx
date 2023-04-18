import './Input.css';

interface Props {
    name: string;
    label: string;
    onChange: (e: any) => void;
    defaultValue?: string;
    error?: string;
    type?: string;
}

const Input = ({ name, label, type = "text", onChange, defaultValue, error }: Props) => {
    return (
        <div className="input-container">
            {error && <div>
                <label>{error}</label>
            </div>}
            <label htmlFor={name} className="control-label">{label}</label>
            <input type={type} name={name} id={name} className='control-input' onChange={(e: any) => onChange(e)} defaultValue={defaultValue} />
        </div>
    )
}

export default Input