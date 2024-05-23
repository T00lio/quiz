import "./ResetPasswordModal.css";

const ResetPasswordModal = ({ isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>
          No has configurado una contraseña para esta cuenta. Haz clic en el siguiente botón para ir al proceso de
          restablecimiento.
        </p>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
