export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.task = this.document.getElementById("task");
    this.task.addEventListener("touchstart", (e) => {
      this.handleTaskMoveStart(e.touches[0].pageX, e.touches[0].pageY);
    });
    this.task.addEventListener("touchmove", (e) => {
      this.handleTaskMoveUpdate(e.touches[0].pageX, e.touches[0].pageY);
    });
    this.task.addEventListener("touchend", (e) => {
      this.handleTaskMoveEnd();
    });

    this.task.addEventListener("mousedown", (e) => {
      this.handleTaskMoveStart(e.pageX, e.pageY);
    });
    window.addEventListener("mousemove", (e) => {
      this.handleTaskMoveUpdate(e.pageX, e.pageY);
    });
    window.addEventListener("mouseup", () => {
      this.handleTaskMoveEnd();
    });
  }

  handleTaskMoveStart(x, y) {
    this.startLocs = [x, y];
  }

  handleTaskMoveUpdate(x, y) {
    if (!this.startLocs) return;
    let movement = x - this.startLocs[0];
    this.task.style.transform = "translateX(" + movement + "px)";
    this.lastLocation = [x, y];
  }

  handleTaskMoveEnd() {
    if (!this.startLocs) return;
    this.task.style.transform = "translateX(0)";
    if (
      Math.abs(this.lastLocation[0] - this.startLocs[0]) >
      this.task.getBoundingClientRect().width * 0.2
    ) {
      console.log("action");
    }
    this.startLocs = undefined;
  }
}
