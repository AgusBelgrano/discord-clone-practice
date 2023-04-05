import { LegacyRef } from 'react';
import './Input.css';

interface Props {
    name: string;
    label: string;
    defaultValue?: string;
    onChange: (e: any) => void;
}

const Input = ({ name, label, onChange, defaultValue }: Props) => {
    return (
        <div className="input-container">
            <label htmlFor={name} className="control-label">{label}</label>
            <input name={name} id={name} className='control-input' onChange={(e: any) => onChange(e)} defaultValue={defaultValue} />
        </div>
    )
}

export default Input