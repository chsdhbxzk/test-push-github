

let index = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

function showSlide(n){
  index = (n + slides.length) % slides.length;

  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

dots.forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});

// Auto slideshow
setInterval(() => showSlide(index + 1), 5000);

//frame7


document.addEventListener("DOMContentLoaded", () => {
  const set1 = [
    { img: "img/frame7/anh1_8.png", name:"ZERO VELVET TINT" },
    { img: "img/frame7/anh2_3.png", name: "BẢNG PHẤNTINT"},
    { img: "img/frame7/anh2_3.png", name: "BETTER THAN PALTINT"},
    { img: "img/frame7/anh4.png", name:"BLUFUDGE TINT" },
  ];
  const set2 = [
    { img: "img/frame7/anh5_12.png", name: "SON ROMAND CHÍNH HÃNG"},
    { img: "img/frame7/anh6.png", name:"SON ROMAND DEWYFUL WATER TINT" },
    { img: "img/frame7/anh7.png", name: "ZERO GRAM MATTE LIPSTINT"},
    { img: "img/frame7/anh1_8.png", name: "ZERO VELVETTINT"},
  ];
  const set3 = [
    { img: "img/frame7/anh9.png", name:"GLASTING WATER TINT" },
    { img: "img/frame7/anh10.png", name:"HANBOK PROJECT GLASTING WATER TINT" },
    { img: "img/frame7/anh11.png", name:"HANBOK SEE THROUGH MATTE TINT" },
    { img: "img/frame7/anh5_12.png", name:"JUICY LASTING TINT" },
  ];
  const set4 = [
    { img: "img/frame7/anh13.png", name: "LIP MATE PENCIL"},
    { img: "img/frame7/anh14.png", name:"MILK TEA VELVET TINTPENCIL" },
    { img: "img/frame7/anh15.png", name: "MILK TEA VELVET TINTPENCIL"},
    { img: "img/frame7/anh16.png", name:"NEW ZERO MATTE LIPENCIL" },
  ];
  const set5 = [
    { img: "img/frame7/anh17.png", name:"CHÌ KẺ VIPENCIL" },
    { img: "img/frame7/anh18.png", name:"DEWYFUL WATEPENCIL" },
    { img: "img/frame7/anh19.png", name:"GLASTING COLORPENCIL" },
    { img: "img/frame7/anh20.png", name:"GLASTING MELTINPENCIL" },
  ];

  const allSets = [set1, set2, set3, set4, set5];

  let currentSetIndex = 0; // bắt đầu từ set1
  const images = document.querySelectorAll(".frame7-img img");

  function updateImages(index) {
    const arr = allSets[index];
    images.forEach((img, i) => {
      img.src = arr[i].img;
    });

    const names = document.querySelectorAll(".frame7-name");
  names.forEach((nameEl, i) => {
    nameEl.textContent = arr[i].name;
  });
  }

  

  // lấy overlay
  const leftOverlay = document.querySelector(".frame7-left-overlay");
  const rightOverlay = document.querySelector(".frame7-right-overlay");

  // click next
  rightOverlay.addEventListener("click", () => {
    currentSetIndex++;
    if (currentSetIndex >= allSets.length) currentSetIndex = 0;
    updateImages(currentSetIndex);
  });

  // click prev
  leftOverlay.addEventListener("click", () => {
    currentSetIndex--;
    if (currentSetIndex < 0) currentSetIndex = allSets.length - 1;
    updateImages(currentSetIndex);
  });

  // khởi tạo hiển thị ban đầu
  updateImages(currentSetIndex);
});

//frame9

// =========================
// BỘ DỮ LIỆU 2 SET (MỖI SET 3 CARD)
// =========================

const sets = [
  [
    {
      img: "img/frame9/anh1.png",
      title: "So sánh son kem và son thỏi: Nên chọn loại nào?",
      desc: "Bạn đang phân vân khi chọn lựa giữa son kem và son thỏi? Bởi cả..."
    },
    {
      img: "img/frame9/anh2.png",
      title: "Son kem và son tint: Sự lựa chọn hoàn hảo cho đôi môi quyến rũ",
      desc: "Son kem và son tint là hai loại son môi phổ biến được nhiều người yêu..."
    },
    {
      img: "img/frame9/anh3.png",
      title: "Review top son tint bóng Romand nhất định phải thử",
      desc: "Bạn đang tìm kiếm bí quyết cho đôi môi căng mọng, quyến rũ? Son tint..."
    }
  ],

  [
    {
      img: "img/frame9/anh4.png",
      title: "Son Tint là gì? Review 5 thỏi son tint đáng thử nhất cho mọi cô nàng",
      desc: "Khám phá son tint - xu hướng son môi hot nhất 2025! Đâu là 5..."
    },
    {
      img: "img/frame9/anh1.png",
      title: "So sánh son kem và son thỏi: Nên chọn loại nào?",
      desc: "Bạn đang phân vân khi chọn lựa giữa son kem và son thỏi? Bởi cả..."
    },
    {
      img: "img/frame9/anh2.png",
      title: "Son kem và son tint: Sự lựa chọn hoàn hảo cho đôi môi quyến rũ",
      desc: "Son kem và son tint là hai loại son môi phổ biến được nhiều người yêu..."
    },
  ]
];

// =========================
// LẤY 3 CARD TRONG HTML
// =========================

const cards = document.querySelectorAll(".frame9-card");

// Chỉ lấy icon bên trái và phải
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

// Vị trí set hiện tại (0 hoặc 1)
let currentSet = 0;

// =========================
// HÀM CẬP NHẬT CARD
// =========================

function updateCards() {
  const data = sets[currentSet];

  cards.forEach((card, i) => {
    card.querySelector("img").src = data[i].img;
    card.querySelector("h3").textContent = data[i].title;
    card.querySelector("p").textContent = data[i].desc;
  });
}

// =========================
// SỰ KIỆN CLICK ICON LEFT / RIGHT
// =========================

leftBtn.addEventListener("click", () => {
  currentSet = currentSet === 0 ? 1 : 0;
  updateCards();
});

rightBtn.addEventListener("click", () => {
  currentSet = currentSet === 0 ? 1 : 0;
  updateCards();
});

//FRAME10

document.getElementById("subscribeBtn").addEventListener("click", function () {
  const emailInput = document.getElementById("emailInput");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  const email = emailInput.value.trim();

  // Ẩn lỗi + ẩn success mỗi lần nhấn
  emailError.style.display = "none";
  successMessage.style.display = "none";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.innerText = "Vui lòng nhập địa chỉ email.";
    emailError.style.display = "block";
    return;
  }

  if (!emailRegex.test(email)) {
    emailError.innerText = "Địa chỉ email không hợp lệ.";
    emailError.style.display = "block";
    return;
  }

  // Thành công — hiện thông báo
  successMessage.innerText = "Xin cảm ơn, form đã được gửi thành công.";
  successMessage.style.display = "block";

  // Xóa input
  emailInput.value = "";
});
