import { createSignal } from "solid-js";
import { Portal } from "solid-js/web";

let mount;
const [_getModal, _setModal] = createSignal();

export function setModal(modal) {
  // Some styling stuff
  document.body.overflowX = "hidden";
  document.body.paddingRight = "0 !important";
  mount.style.pointerEvents = "all";

  _setModal(modal);
}

export function removeModal() {
  document.body.overflowX = "auto";
  document.body.position = "static";
  mount.style.pointerEvents = "none";

  _setModal(null);
}

export function ModalProvider(props) {
  mount = props.mount;
  return <Portal mount={mount}>{_getModal()}</Portal>;
}
