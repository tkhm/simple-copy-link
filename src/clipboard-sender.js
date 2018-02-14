browser.runtime.onMessage.addListener(copyStringToClipboard)

function copyStringToClipboard(message) {
    function handler(event) {
        event.clipboardData.setData('text/plain', message.url)

        // Event.stopImmediatePropagation() - Web APIs | MDN https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation
        event.stopImmediatePropagation();
        event.preventDefault();
        document.removeEventListener('copy', handler, true);
    }
    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
}
