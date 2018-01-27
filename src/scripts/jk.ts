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
}

export default Jk
