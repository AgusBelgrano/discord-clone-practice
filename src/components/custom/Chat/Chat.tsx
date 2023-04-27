import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="user-info">
          <img
            className="avatar"
            src="https://via.placeholder.com/32"
            alt="User Avatar"
          />
          <div className="username">Nombre del usuario</div>
        </div>
      </div>
      <div className="chat-body">
        <div className="message from-me">
          <div className="avatar">
            <img src="https://via.placeholder.com/32" alt="User Avatar" />
          </div>
          <div className="message-content">
            <div className="message-text">Hola, ¿cómo estás?</div>
            <div className="message-time">12:34 PM</div>
          </div>
        </div>
        <div className="message from-them">
          <div className="avatar">
            <img src="https://via.placeholder.com/32" alt="User Avatar" />
          </div>
          <div className="message-content">
            <div className="message-text">Muy bien, gracias. ¿Y tú?</div>
            <div className="message-time">12:35 PM</div>
          </div>
        </div>
        <div className="message from-me">
          <div className="avatar">
            <img src="https://via.placeholder.com/32" alt="User Avatar" />
          </div>
          <div className="message-content">
            <div className="message-text">
              Estoy bien también, gracias por preguntar.
            </div>
            <div className="message-time">12:35 PM</div>
          </div>
        </div>
      </div>
      <div className="message-input">
        <textarea placeholder="Escribe un mensaje"></textarea>
        <button>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
