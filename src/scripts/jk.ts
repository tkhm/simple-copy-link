import Jkcall from "./jkcall";

class Jk {
  constructor() {
    console.log("jk Works!");
    const jkcall = new Jkcall();
    jkcall.echoName();
  }
}

window.addEventListener("DOMContentLoaded", () => new Jk());
