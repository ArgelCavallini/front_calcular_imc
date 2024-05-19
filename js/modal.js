export const Modal = {
  message: $(".modal-message"),
  wrapper: $(".modal-wrapper"),
  btnClose: $(".close"),
  open() {
    Modal.wrapper.addClass("open")
  },
  close() {
    Modal.wrapper.removeClass("open")
  },
}

Modal.btnClose.click(Modal.close)

window.addEventListener("keydown", handleKeydown)
function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}
