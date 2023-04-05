import './TextArea.css';

interface Props {
    channel?: string;
}

const TextArea = ({ channel }: Props) => {
    return (
        <textarea placeholder={`Mensaje en ${channel}`}></textarea>
    )
}

export default TextArea