import { unmountComponentAtNode } from "react-dom";

class CustomTestClass {
  constructor() {
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }
  clear() {
    unmountComponentAtNode(this.container);
    this.container.remove();
    this.container = null;
  }
}
export default CustomTestClass;
