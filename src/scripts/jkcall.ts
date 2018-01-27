class Jkcall {
  private name: string
  constructor() {
    this.name = 'jkcall'
  }

  public echoName(): void {
    console.log(this.name + ', I backed!')    
  }
}
export default Jkcall
