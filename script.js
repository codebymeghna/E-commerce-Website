// PRODUCT ARRAY
const products = [
  {
    name: "Apex Wireless Headphones",
    category: "Electronics",
    price: "₹2,999",
    rating: "★★★★★ (4.6)",
    brand: "Sony",
    stock: "In Stock",
    image: "headset.jpg",
    description:
      "Immersive noise-cancelling wireless headphones with 40-hour battery life.",
  },

  {
    name: "Vanguard Smart Watch Ultra",
    category: "Electronics",
    price: "₹1,999",
    rating: "★★★★★ (4.6)",
    brand: "Noise",
    stock: "In Stock",
    image: "smart.jpg",
    description:
      "Smartwatch featuring heart-rate monitoring, fitness tracking, and AMOLED display.",
  },

  {
    name: "Horizon Mechanical Keyboard",
    category: "Electronics",
    price: "₹5,775",
    rating: "★★★★★ (4.7)",
    brand: "Logitech",
    stock: "In Stock",
    image: "keyboard.jpg",
    description:
      "Mechanical RGB gaming keyboard with tactile switches and customizable lighting.",
  },

  {
    name: "Lumina Ambient Light",
    category: "Electronics",
    price: "₹999",
    rating: "★★★★★ (4.5)",
    brand: "Logitech",
    stock: "In Stock",
    image: "lumina.jpg",
    description:
      "Create a warm and inviting atmosphere with the lumina ambidient light, designed to enhance any room with a soft and modern glow.",
  },

  {
    name: "Studio Professional Tripod Camera",
    category: "Electronics",
    price: "₹39,999",
    rating: "★★★★★ (4.6)",
    brand: "Canon",
    stock: "In Stock",
    image: "cam.jpg",
    description: "Sturdy aluminum tripod for DSLR cameras and smartphones.",
  },

  {
    name: "SonicBoom Bluetooth Speaker",
    category: "Electronics",
    price: "₹1,499",
    rating: "★★★★★ (4.5)",
    brand: "JBL",
    stock: "In Stock",
    image: "speaker.jpg",
    description:
      "Portable Bluetooth speaker delivering deep bass and crystal-clear sound.",
  },

  {
    name: "Urban Leather Jacket",
    category: "Fashion",
    price: "₹4,599",
    rating: "★★★★★ (4.5)",
    brand: "Zara",
    stock: "In Stock",
    image: "jacket.jpg",
    description:
      "Classic genuine leather jacket designed for comfort and rugged elegance.",
  },

  {
    name: "Trekker Waterproof Jacket",
    category: "Fashion",
    price: "₹1,500",
    rating: "★★★★★ (4.7)",
    brand: "Wildcraft",
    stock: "In Stock",
    image: "jeans.jpg",
    description:
      "All-weather windbreaker with thermal lining and breathable shell.",
  },

  {
    name: "Eclipse Sunglasses",
    category: "Fashion",
    price: "₹345",
    rating: "★★★★★ (4.5)",
    brand: "Ray-Ban",
    stock: "In Stock",
    image: "glass.jpg",
    description:
      "Unisex retro sunglasses with polarized UV400 protective lenses.",
  },

  {
    name: "AeroFit Premium Running Shoes",
    category: "Fashion",
    price: "₹820",
    rating: "★★★★★ (4.3)",
    brand: "Nike",
    stock: "In Stock",
    image: "shoe.jpg",
    description:
      "Lightweight and breathable running sneakers for long-distance training.",
  },

  {
    name: "Impulse Travel Laptop Backpack",
    category: "Fashion",
    price: "₹699",
    rating: "★★★★★ (4.3)",
    brand: "American Tourister",
    stock: "In Stock",
    image: "bag.jpg",
    description:
      "Water-resistant travel backpack with USB charging port and dedicated laptop sleeve.",
  },

  {
    name: "Sunset Printed Backdrop T-Shirt",
    category: "Fashion",
    price: "₹399",
    rating: "★★★★★ (4.9)",
    brand: "H&M",
    stock: "In Stock",
    image: "tshirt.jpg",
    description:
      "Premium polyester printed T-shirt with a modern design, soft fabric, and comfortable fit for everyday wear.",
  },

  {
    name: "Apple iPhone 16",
    category: "Brands",
    price: "₹45,999",
    rating: "★★★★★ (4.5)",
    brand: "Apple",
    stock: "In Stock",
    image: "iphone.jpg",
    description:
      "The base Apple iPhone 16 features a 6.1-inch Retina XDR display powered by the A18 chipset and 8 GB of RAM.",
  },

  {
    name: "Samsung Galaxy S25 Ultra",
    category: "Electronics",
    price: "₹98,999",
    rating: "★★★★★ (4.9)",
    brand: "Samsung",
    stock: "In Stock",
    image: "samsung.jpg",
    description:
      "A powerhouse smartphone featuring the Snapdragon processor, a 6.8-inch Dynamic AMOLED 2X display and flagship performance.",
  },

  {
    name: "Sony Xperia 1 VII",
    category: "Electronics",
    price: "₹1,09,999",
    rating: "★★★★★ (5.0)",
    brand: "Sony",
    stock: "In Stock",
    image: "sony.jpg",
    description:
      "Premium 5G Android smartphone featuring a 6.5-inch display, Snapdragon 8 Elite chipset, and professional-grade camera system.",
  },

  {
    name: "Apple 13-inch MacBook",
    category: "Electronics",
    price: "₹79,900",
    rating: "★★★★★ (4.7)",
    brand: "Apple",
    stock: "In Stock",
    image: "apple.jpg",
    description:
      "Apple 13-inch MacBook powered by a fast processor with a brilliant Retina display and efficient 5-core GPU for work and entertainment.",
  },

  {
    name: "Samsung Galaxy Book4",
    category: "Electronics",
    price: "₹1,22,990",
    rating: "★★★★★ (4.9)",
    brand: "Samsung",
    stock: "In Stock",
    image: "samsung2.jpg",
    description:
      "Premium Galaxy Book4 laptop featuring Snapdragon or Intel Core Ultra processors with AI-powered Copilot+ features.",
  },

  {
    name: "Sony VAIO Fit 15E",
    category: "Electronics",
    price: "₹83,257",
    rating: "★★★★★ (4.3)",
    brand: "Sony",
    stock: "In Stock",
    image: "sony2.jpg",
    description:
      "Classic Sony VAIO laptop offering reliable performance, elegant design, and a comfortable computing experience.",
  },

  {
    name: "Elegant Jhumka Earring",
    category: "Accessories",
    price: "₹519",
    rating: "★★★★★ (4.2)",
    brand: "Voylla",
    stock: "In Stock",
    image: "accessories.jpg",
    description:
      "Add timeless charm to your ethnic look with these beautifully crafted traditional jhumka earrings.",
  },

  {
    name: "Premium Collection",
    category: "Accessories",
    price: "₹1,789",
    rating: "★★★★★ (4.7)",
    brand: "Lakmé",
    stock: "In Stock",
    image: "makeup.jpg",
    description:
      "Enhance your natural beauty with a premium collection of high-quality makeup essentials for every occasion.",
  },

  {
    name: "Men's Fashion Collection",
    category: "Accessories",
    price: "₹655",
    rating: "★★★★★ (4.5)",
    brand: "Fastrack",
    stock: "In Stock",
    image: "accessories3.jpg",
    description:
      "Complete your look with stylish and versatile men's accessories designed for everyday fashion.",
  },

  {
    name: "Stylish Wall Decor",
    category: "Home & Living",
    price: "₹4,500",
    rating: "★★★★★ (4.6)",
    brand: "Home Centre",
    stock: "In Stock",
    image: "decor.jpg",
    description:
      "Transform your space with elegant wall décor pieces that add personality, warmth, and charm to every room.",
  },

  {
    name: "Modern Wall Paintings",
    category: "Home & Living",
    price: "₹2,777",
    rating: "★★★★★ (4.8)",
    brand: "Art Street",
    stock: "In Stock",
    image: "decor2.jpg",
    description:
      "Elevate your interiors with stunning wall paintings and art prints that bring style, color, and personality to any space.",
  },

  {
    name: "Plant Collection",
    category: "Home & Living",
    price: "₹250",
    rating: "★★★★★ (5.0)",
    brand: "Ugaoo",
    stock: "In Stock",
    image: "decor3.jpg",
    description:
      "Bring freshness and natural beauty to your home with vibrant indoor plants perfect for every living space.",
  },
];

// PRODUCT MODAL
let currentProductIndex = 0;
function openProduct(index) {
  currentProductIndex = index;

  const product = products[index];

  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalCategory").innerHTML = product.category;
  document.getElementById("modalName").innerHTML = product.name;
  document.getElementById("modalRating").innerHTML = product.rating;
  document.getElementById("modalPrice").innerHTML = product.price;
  document.getElementById("modalDescription").innerHTML = product.description;
  document.getElementById("modalBrand").innerHTML = product.brand;
  document.getElementById("modalStock").innerHTML = product.stock;

  document.getElementById("productModal").classList.remove("hidden");
  document.getElementById("productModal").classList.add("flex");
}

function closeProduct() {
  document.getElementById("productModal").classList.remove("flex");
  document.getElementById("productModal").classList.add("hidden");
}

// SLIDER
const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider > div");

let currentSlide = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 4000);

// PAGINATION
let activePage = 1;

function showPage(page) {
  activePage = page;

  const cards = document.querySelectorAll(".page1, .page2, .page3, .page4");

  cards.forEach((card) => {
    card.style.display = "none";
  });

  const currentPage = document.querySelectorAll(".page" + page);

  currentPage.forEach((card) => {
    card.style.display = "";
  });

  for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById("btn" + i);

    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("border", "border-gray-300");
  }

  const activeBtn = document.getElementById("btn" + page);

  activeBtn.classList.remove("border", "border-gray-300");
  activeBtn.classList.add("bg-blue-600", "text-white");
}

showPage(1);

// CATEGORY SECTION
function showCategory(category) {
  // goto catalog section
  document.getElementById("catalog").scrollIntoView({
    behavior: "smooth",
  });

  const cards = document.querySelectorAll(".page1, .page2, .page3, .page4");

  // hide everything
  cards.forEach(function (card) {
    card.style.display = "none";
  });

  // only matching one
  cards.forEach(function (card) {
    const cardCategory = card.getAttribute("data-category");

    if (cardCategory === category) {
      card.style.display = "block";
    }
  });

  for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById("btn" + i);

    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("border", "border-gray-300");
  }
}

//  TESTIMONIALS
let names = ["Meghna Chauhan", "Sriti", "Anjali Rawat"];

let reviews = [
  "The Apex Wireless Headphones completely changed my work-from-home experience. Crystal-clear audio, amazing noise cancellation, and fast delivery. Highly recommended!",

  "I am incredibly picky with running shoes, but the AeroFit line feels like running on clouds. Excellent support and premium quality. Worth every rupee!",

  "Bought the Minimalist Desk Organizer and Ceramic Mug. They completely transformed my study table. Premium quality and elegant design.",
];

let photos = ["meg.jpeg", "sriti.jpeg", "anjali.jpeg"];

let current = 0;

function changeReview() {
  document.getElementById("name").textContent = names[current];
  document.getElementById("review").textContent = reviews[current];
  document.getElementById("photo").src = photos[current];

  current++;

  if (current >= names.length) {
    current = 0;
  }
}

changeReview();

setInterval(changeReview, 3000);

// SHOPPING PANEL
let cart = [];

function openCart() {
  document.getElementById("cartPanel").style.right = "0";
}

function closeCart() {
  document.getElementById("cartPanel").style.right = "-100%";
}

function addToCart(index) {
  let product = products[index];

  let existingProduct = cart.find((item) => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCart();
  showToast("🛒 Added to Cart");
}

function updateCart() {
  let totalItems = 0;

  cart.forEach((item) => {
    totalItems += item.quantity;
  });

  document.getElementById("cartCount").innerText = totalItems;

  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <p class="text-gray-500 text-center mt-10">
                Your cart is empty.
            </p>
        `;

    document.getElementById("subtotal").innerHTML = "₹0";
    document.getElementById("tax").innerHTML = "₹0";
    document.getElementById("grandTotal").innerHTML = "₹0";

    return;
  }

  let html = "";

  let subtotal = 0;

  cart.forEach((item) => {
    let price = Number(item.price.replace("₹", "").replace(/,/g, ""));

    subtotal += price * item.quantity;

    html += `

        <div class="flex gap-4 mb-5 border-b pb-4">

            <img src="${item.image}"
                class="w-20 h-20 rounded-lg object-cover">

            <div class="flex-1">

                <h3 class="font-bold">${item.name}</h3>

                <p class="text-blue-600 font-semibold">
                    ${item.price}
                </p>

                <div class="flex items-center gap-3 mt-3">

                    <button
                        onclick="decreaseQuantity('${item.name}')"
                        class="w-8 h-8 rounded-full border hover:bg-gray-200">
                        -
                    </button>

                    <span class="font-bold">
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity('${item.name}')"
                        class="w-8 h-8 rounded-full border hover:bg-gray-200">
                        +
                    </button>

                </div>

            </div>

            <button
                onclick="removeFromCart('${item.name}')"
                class="text-red-500 hover:text-red-700 text-xl">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;
  });

  cartItems.innerHTML = html;

  let tax = subtotal * 0.18;

  let grandTotal = subtotal + tax;

  document.getElementById("subtotal").innerHTML =
    "₹" + subtotal.toLocaleString();

  document.getElementById("tax").innerHTML =
    "₹" + Math.round(tax).toLocaleString();

  document.getElementById("grandTotal").innerHTML =
    "₹" + Math.round(grandTotal).toLocaleString();
}

function increaseQuantity(name) {
  let product = cart.find((item) => item.name === name);

  if (product) {
    product.quantity++;
  }

  updateCart();
}

function decreaseQuantity(name) {
  let product = cart.find((item) => item.name === name);

  if (product) {
    product.quantity--;

    if (product.quantity <= 0) {
      cart = cart.filter((item) => item.name !== name);
    }
  }

  updateCart();
  showToast("🗑️ Removed from Cart");
}

function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);

  updateCart();
  showToast("🗑️ Removed from Cart");
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");

    return;
  }

  showToast("🎉 Order Placed Successfully!");

  cart = [];

  updateCart();

  closeCart();
}

// WISHLIST PANEL
let wishlist = [];

function openWishlist() {
  document.getElementById("wishlistPanel").style.right = "0";
}

function closeWishlist() {
  document.getElementById("wishlistPanel").style.right = "-100%";
}

function addToWishlist(index, button) {
  let product = products[index];

  let existingProduct = wishlist.find((item) => item.name === product.name);

  let icon = button.querySelector("i");

  if (existingProduct) {
    wishlist = wishlist.filter((item) => item.name !== product.name);

    icon.classList.remove("fa-solid", "text-red-500");
    icon.classList.add("fa-regular");
  } else {
    wishlist.push(product);

    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid", "text-red-500");
  }

  updateWishlist();
  showToast("❤️ Added to Wishlist");
}

function updateWishlist() {
  document.getElementById("wishlistCount").innerText = wishlist.length;

  document.getElementById("wishlistBadge").innerText = wishlist.length;

  displayWishlist();
}

function displayWishlist() {
  const wishlistItems = document.getElementById("wishlistItems");

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `

        <div class="flex flex-col items-center justify-center h-full text-center text-gray-500">

            <i class="fa-regular fa-heart text-7xl mb-6 text-gray-300"></i>

            <h3 class="text-3xl font-bold text-gray-800">
                Your Wishlist is Empty
            </h3>

            <p class="mt-4 text-lg">
                Keep track of products you adore by tapping the
                heart icon on cards.
            </p>

        </div>

        `;

    return;
  }

  let html = "";

  wishlist.forEach((item) => {
    html += `

        <div class="flex gap-4 mb-5 border-b pb-4">

            <img src="${item.image}"
                class="w-20 h-20 rounded-lg object-cover">

            <div class="flex-1">

                <h3 class="font-bold">
                    ${item.name}
                </h3>

                <p class="text-blue-600 font-semibold">
                    ${item.price}
                </p>

                <button
                    onclick="addToCart(products.findIndex(p => p.name === '${item.name}'))"
                    class="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">

                    Add Cart

                </button>

            </div>

            <button
                onclick="removeWishlist('${item.name}')"
                class="text-red-500 hover:text-red-700 text-xl">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;
  });

  wishlistItems.innerHTML = html;
}

function removeWishlist(name) {
  wishlist = wishlist.filter((item) => item.name !== name);

  updateWishlist();
  showToast("❌ Removed from Wishlist");
}

// SEARCH BAR
console.log("Search code loaded");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  let searchValue = this.value.toLowerCase().trim();
  console.log(searchValue);

  // If search box is empty, return to current page
  if (searchValue === "") {
    showPage(activePage);
    return;
  }

  let found = false;

  for (let page = 1; page <= 4; page++) {
    let products = document.querySelectorAll(".page" + page);

    let matchFound = false;

    products.forEach(function (product) {
      let name = product.querySelector("h3").innerText.toLowerCase();

      if (name.includes(searchValue)) {
        matchFound = true;
      }
    });

    if (matchFound) {
      showPage(page);

      products.forEach(function (product) {
        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(searchValue)) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });

      found = true;
      break;
    }
  }

  if (!found) {
    document
      .querySelectorAll(".page1, .page2, .page3, .page4")
      .forEach(function (product) {
        product.style.display = "none";
      });
  }
});

// ACCOUNT BUTTON
const accountBtn = document.getElementById("accountBtn");
const accountDropdown = document.getElementById("accountDropdown");

accountBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  accountDropdown.classList.toggle("hidden");
});

document.addEventListener("click", function () {
  accountDropdown.classList.add("hidden");
});

accountDropdown.addEventListener("click", function (e) {
  e.stopPropagation();
});

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  const email = document.getElementById("loginEmail").value.trim();

  const password = document.getElementById("loginPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please fill all fields.");
    return;
  }

  localStorage.setItem("userEmail", email);

  showUser(email);
});

function showUser(email) {
  document.getElementById("accountContent").innerHTML = `

        <div class="p-6">

            <h2 class="text-2xl font-bold text-center mb-4">
                Welcome Back!
            </h2>

            <p class="text-center text-gray-600 mb-6">
                ${email}
            </p>

            <button
                id="logoutBtn"
                class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">

                Sign Out

            </button>

        </div>

    `;

  document.getElementById("logoutBtn").addEventListener("click", logout);
}

function logout() {
  localStorage.removeItem("userEmail");

  location.reload();
}

document.getElementById("modalAddCart").addEventListener("click", function () {
  addToCart(currentProductIndex);
});

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;

  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  if (fullName === "" || email === "" || subject === "" || message === "") {
    showToast("⚠️ Please fill all the fields.");

    return;
  }

  showToast("✅ Message sent successfully!");

  contactForm.reset();
});
