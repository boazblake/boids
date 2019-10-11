class EbsiToggle extends HTMLElement {
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
    this.ctrl.type = "checkbox";
  }

  attached() {
    this.p.appendChild(this.label);
    this.p.appendChild(this.ctrl);
    this.root.appendChild(this.p);
  }

  mounted() {
    this.label.textContent = this.getAttribute("label");

    this.ctrl.addEventListener("change", () => {
      this.dispatchEvent(
        new CustomEvent("updated", { detail: { value: this.ctrl.checked } })
      );
    });
  }
}

customElements.define("ebsi-toggle", EbsiToggle);
