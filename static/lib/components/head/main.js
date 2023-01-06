export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.date = this.document.getElementById("date");
    this.time = this.document.getElementById("time");

    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    this.date.innerText = new Date().toLocaleDateString();
    this.time.innerText = new Date().toLocaleTimeString();
  }
}
