// preventing the compile error for typescript
import { } from '@types/chrome'

// see deleted default context menus https://gitlab.com/pushmestudio/simple-copy-link/issues/4

class ChromeContext {
  constructor() {
    // Set up context menu tree at install time.
    chrome.contextMenus.create({ 'title': 'Copy as Markdown', 'id': 'slink_md', 'contexts': ['all'] })
    chrome.contextMenus.create({ 'title': 'Copy as Plaintext', 'id': 'slink_txt', 'contexts': ['all'] })
    chrome.contextMenus.onClicked.addListener(this.onClickHandler)
    chrome.commands.onCommand.addListener(this.onCommandHandler)
  }

  // The onClicked callback function.
  public onClickHandler(info, tab) {
    let titleAndUrl = ''
    if (info.menuItemId === 'slink_md') {
      titleAndUrl = info.selectionText == null 
                      ? '[' + tab.title + '](' + tab.url + ')'
                      : '[' + info.selectionText + '](' + tab.url + ')'
    } else if (info.menuItemId === 'slink_txt') {
      titleAndUrl = info.selectionText == null
                        ? tab.title + ' ' + tab.url
                        : info.selectionText + ' ' + tab.url
    }
    // send text to browser content message listener
    chrome.tabs.sendMessage(tab.id, {text: titleAndUrl})
  }

  public onCommandHandler(command) {
    function sendTabInfo(tabs){
      let titleAndUrl = ''
      if(command === "copy-as-plaintext"){
        titleAndUrl = tabs[0].title + ' ' + tabs[0].url
      }else if(command === "copy-as-markdown"){
        titleAndUrl = '[' + tabs[0].title + '](' + tabs[0].url + ')'
      }
      chrome.tabs.sendMessage(tabs[0].id, { text: titleAndUrl })
    }
    chrome.tabs.query({active: true, currentWindow: true}, sendTabInfo)
  }
}

export default ChromeContext
