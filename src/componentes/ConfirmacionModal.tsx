type ConfirmacionModalProps = {
  mensaje: string;
  onConfirmar: () => void;
  onCancelar: () => void;
};


export default function ConfirmacionModal({
  mensaje,
  onConfirmar,
  onCancelar
}: ConfirmacionModalProps) {
    return (
    <div className="modalOverlay">
      <div className="modal">

        <h3>Confirmar eliminación</h3>

        <p>{mensaje}</p>

        <div className="modalActions">

          <button onClick={onConfirmar}>
            Eliminar
          </button>

          <button onClick={onCancelar}>
            Cancelar
          </button>

        </div>

      </div>
    </div>
    );
}