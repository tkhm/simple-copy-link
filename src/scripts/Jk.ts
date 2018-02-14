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
}

export default Jk
