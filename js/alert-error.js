export const AlertError = {
  element: $(".alert-error"),
  open() {
    AlertError.element.addClass("open")
  },
  close() {
    AlertError.element.removeClass("open")
  },
}
