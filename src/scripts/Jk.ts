import JkCall from "./JkCall"

class Jk {
  private progressCount: number
  constructor() {
    console.log("jk Constructor is called.")
    const jkcall = new JkCall()
    jkcall.echoName()
  }

  public reportProgress(progress: number): void {
    
    console.log('progress: ' + Math.ceil(progress * Math.random()) + ' byte!')
  }

  public copyStringToClipboard(text: string){
    function handler (event){
      event.clipboardData.setData('text/plain', text)
      event.preventDefault()
      document.removeEventListener('copy', handler, true)
    }
  
    document.addEventListener('copy', handler, true)
    document.execCommand('copy')
  }
}

export default Jk
