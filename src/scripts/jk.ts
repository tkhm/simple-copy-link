import Jkcall from "./jkcall"

class Jk {
  constructor() {
    console.log("jk Constructor is called.")
    const jkcall = new Jkcall()
    jkcall.echoName()
  }

  public reportProgress(progress: number): void {
    console.log('progress: ' + progress + ' byte!')
  }

  public copyStringToClipboard(string){
    function handler (event){
      event.clipboardData.setData('text/plain', string);
      event.preventDefault();
      document.removeEventListener('copy', handler, true);
    }
  
    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
    console.log(string);
  }
}

export default Jk
