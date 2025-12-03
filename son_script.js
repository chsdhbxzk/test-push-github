// Fake data 12 sản phẩm (bé có thể thay link ảnh & tên)
const products = [
  {name: "SON ROMAND CHÍNH HÃNG 01", price: "279.000đ", img: "img/p1.jpg"},
  {name: "SON ROMAND CHÍNH HÃNG 02", price: "279.000đ", img: "img/p2.jpg"},
  {name: "SON ROMAND CHÍNH HÃNG 03", price: "139.000đ", img: "img/p3.jpg"},
  {name: "HANBOK GLAZING TINT 01", price: "279.000đ", img: "img/p4.jpg"},
  {name: "HANBOK GLAZING TINT 02", price: "279.000đ", img: "img/p5.jpg"},
  {name: "HANBOK GLAZING TINT 03", price: "279.000đ", img: "img/p6.jpg"},
  {name: "BLUR FUDGE TINT 01", price: "279.000đ", img: "img/p7.jpg"},
  {name: "BLUR FUDGE TINT 02", price: "279.000đ", img: "img/p8.jpg"},
  {name: "BLUR FUDGE TINT 03", price: "279.000đ", img: "img/p9.jpg"},
  {name: "BLUR FUDGE TINT 04", price: "279.000đ", img: "img/p10.jpg"},
  {name: "NEW ROMAND 2025", price: "279.000đ", img: "img/p11.jpg"},
  {name: "BEST SELLER 2025", price: "279.000đ", img: "img/p12.jpg"},
];

const PRODUCTS_PER_PAGE = 8;

function renderPage(page) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  let start = (page - 1) * PRODUCTS_PER_PAGE;
  let end = start + PRODUCTS_PER_PAGE;

  let pageProducts = products.slice(start, end);

  pageProducts.forEach(p => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="">
        <p class="product-name">${p.name}</p>
        <p class="product-price">${p.price}</p>
      </div>
    `;
  });

  document.querySelectorAll(".page-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`.page-btn[data-page="${page}"]`).classList.add("active");
}

document.querySelectorAll(".page-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let page = Number(btn.dataset.page);
    renderPage(page);
  });
});

// chạy mặc định trang 1
renderPage(1);
