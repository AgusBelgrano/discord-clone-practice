import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  close: () => void;
  title: string;
  children?: React.ReactNode;
}

const BsModal = ({ title, children, show, close }: Props) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
    </Modal>
  );
};

export default BsModal;
