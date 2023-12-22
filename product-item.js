class ProductItem extends HTMLElement {
  static get observedAttributes() {
    return ['image', 'name', 'description', 'price'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="product-item">
        <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
        <div class="product-details">
          <h3>${this.getAttribute('name')}</h3>
          <p>${this.getAttribute('description')}</p>
          <p>${this.getAttribute('price')}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('product-item', ProductItem);
