class EbsiSlider extends HTMLElement {
  constructor() {
    super();
    this.created();
    this.attached();
    this.mounted();
  }

  created() {
    this.root = this.attachShadow({ mode: "open" });
    this.p = document.createElement("p");
    this.label = document.createElement("label");

    this.ctrl = document.createElement("input");
    this.ctrl.value = this.getAttribute("value");
    this.ctrl.min = this.getAttribute("min");
    this.ctrl.max = this.getAttribute("max");
    this.ctrl.step = this.getAttribute("step") || 1;

    this.span = document.createElement("span");
    this.span.textContent = this.ctrl.value;
    this.ctrl.type = "range";
  }

  attached() {
    this.p.appendChild(this.label);
    this.p.appendChild(this.ctrl);
    this.p.appendChild(this.span);
    this.root.appendChild(this.p);
  }

  mounted() {
    this.label.textContent = this.getAttribute("label");

    this.ctrl.addEventListener("input", () => {
      this.span.textContent = this.ctrl.value;
      this.dispatchEvent(
        new CustomEvent("updated", { detail: { value: this.ctrl.value } })
      );
    });
  }
}

customElements.define("ebsi-slider", EbsiSlider);
