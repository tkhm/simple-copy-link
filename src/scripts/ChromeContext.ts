import Jk from './Jk'

// preventing the compile error for typescript
import { } from '@types/chrome'

// see deleted default context menus https://gitlab.com/pushmestudio/simple-copy-link/issues/4

class ChromeContext {
  constructor() {
    // Set up context menu tree at install time.
    chrome.contextMenus.create({ 'title': 'Copy Title and Link', 'id': 'slink', 'contexts': ['all'] })
    chrome.contextMenus.onClicked.addListener(this.onClickHandler)
  }

  // The onClicked callback function.
  public onClickHandler(info, tab) {
    const jk = new Jk()
    jk.reportProgress(64)

    if (info.menuItemId === 'slink') {
      console.log('slink clicked')
      const titleAndUrl = '[' + tab.title + '](' + tab.url + ')'
      // send text to browser content message listener
      chrome.tabs.sendMessage(tab.id, {text: titleAndUrl})
    }
  }
}

export default ChromeContext
