import Jk from './Jk'

// preventing the compile error for typescript
import { } from '@types/chrome'

// see deleted default context menus https://gitlab.com/pushmestudio/simple-copy-link/issues/4

class ChromeContext {
  constructor() {
    // Set up context menu tree at install time.
    chrome.runtime.onInstalled.addListener(() => {
      // Create copy to clipboard menu.
      chrome.contextMenus.create({ 'title': 'Copy Title and Link', 'id': 'slink' })
    })
    chrome.contextMenus.onClicked.addListener(this.onClickHandler)
  }

  // The onClicked callback function.
  public onClickHandler(info, tab) {
    const jk = new Jk()
    jk.reportProgress(64)

    if (info.menuItemId === 'slink') {
      console.log('slink clicked')
      jk.copyStringToClipboard('Your opinion have just become mine.')
    }
  }
}

export default ChromeContext