import './product-item.js';

class ProductContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <product-item image="product1.jpg" name="Producto 1" description="Descripción del producto 1" price="$50"></product-item>
      <product-item image="product2.jpg" name="Producto 2" description="Descripción del producto 2" price="$60"></product-item>
      <product-item image="product3.jpg" name="Producto 3" description="Descripción del producto 3" price="$70"></product-item>
    `;
  }
}

customElements.define('product-container', ProductContainer);
