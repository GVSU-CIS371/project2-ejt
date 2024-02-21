import { Product, products } from "./data.ts";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById("main-container");

    for (var prod of prods){
        var str = generateProductHTML(prod);
        mainContainer?.insertAdjacentHTML('beforeend', str);
    };
}

function getByCategory(category: string): void {
    const filtered = products.filter((prod: Product) => prod.category == category);
    renderProducts(filtered);
}

function getByRating(minRating: number): void {
    const filtered = products.filter((prod: Product) => prod.rating >= minRating);
    renderProducts(filtered);
}

export { renderProducts, getByCategory, getByRating };