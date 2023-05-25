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
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default BsModal;
