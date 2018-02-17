import { } from '@types/chrome'

class ClipboardSender {
  constructor() {
    // listen message from background
    chrome.runtime.onMessage.addListener(this.copyStringToClipboard)
  }

  public copyStringToClipboard(message) {
      function handler(event) {
          event.clipboardData.setData('text/plain', message.text)

          // prevent duplicated call
          event.stopImmediatePropagation()
          event.preventDefault()
          document.removeEventListener('copy', handler, true)
      }
      document.addEventListener('copy', handler, true)
      document.execCommand('copy')
  }
}
export default ClipboardSender
