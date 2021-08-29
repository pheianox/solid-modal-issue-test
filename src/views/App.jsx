import { ModalProvider, setModal } from "../stores/modal-store";
import { NotificationFromGod } from "../components/Modals/Modals";

export default function App() {
  function onOpenModal() {
    setModal(NotificationFromGod);
  }

  return (
    <div class="app">
      <h1>Hello my best friend, my hand</h1>
      <button onClick={onOpenModal}>Open Modal</button>
      <ModalProvider mount={document.getElementById("modal")} />
    </div>
  );
}
