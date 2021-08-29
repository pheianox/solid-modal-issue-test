import { removeModal } from "../../stores/modal-store";

function Modal(props) {
  return (
    <div class="backdrop">
      <div class="modal">
        <h1 class="title">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}

export function NotificationFromGod() {
  return (
    <Modal title="Notification From God">
      <p>
        And he gave a sign the same day, saying: This shall be the sign, that
        the Lord hath spoken: Behold the altar shall be rent, and the ashes that
        are upon it, shall be poured out.
      </p>
      <button class="btn" onClick={removeModal}>
        Ok
      </button>
    </Modal>
  );
}
