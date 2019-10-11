class EbsiDropdown extends HTMLElement {
  constructor() {
    super();
    this.created();
    this.attached();
    this.mounted();
  }

  created() {
    const value = this.getAttribute("value");

    this.root = this.attachShadow({ mode: "open" });
    this.p = document.createElement("p");
    this.label = document.createElement("label");

    this.ctrl = document.createElement("select");

    this.square = document.createElement("option");
    this.square.textContent = "square";
    this.square.value = "square";
    if (value === "square") this.square.selected = true;

    this.triangle = document.createElement("option");
    this.triangle.value = "triangle";
    this.triangle.textContent = "triangle";
    if (value === "triangle") this.triangle.selected = true;
  }

  attached() {
    this.ctrl.appendChild(this.square);
    this.ctrl.appendChild(this.triangle);
    this.p.appendChild(this.label);
    this.p.appendChild(this.ctrl);
    this.root.appendChild(this.p);
  }

  mounted() {
    this.label.textContent = this.getAttribute("label");

    this.ctrl.addEventListener("change", e => {
      this.dispatchEvent(
        new CustomEvent("updated", { detail: { value: e.target.value } })
      );
    });
  }
}

customElements.define("ebsi-dropdown", EbsiDropdown);
