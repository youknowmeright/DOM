// // const trending = () => {
// //   fetch('https://fakestoreapi.com/products')
// //     .then(res => res.json())
// //     .then(data => dataload(data));
// // };

// // function dataload(products) {
// //   const trendingContainer = document.getElementById("trending-container");
// //   trendingContainer.innerHTML = ""; // clear container

// //   // Only take first 6 products
// //   const limitedProducts = products.slice(0, 3);

// //   for (const product of limitedProducts) {
// //     //creaate the div

// //     const productDiv = document.createElement('div');
// //     productDiv.className = "card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300";

// //     // create  the inner div of the product card and populate it with product data
// //     productDiv.innerHTML = `
// //       <!-- Image -->
// //       <figure class="p-6 bg-gray-50">
// //         <img src="${product.image}" 
// //              alt="${product.title}" 
// //              class="h-48 object-contain mx-auto transform hover:scale-105 transition duration-300">
// //       </figure>

// //       <div class="card-body p-5">

// //         <!-- Category & Rating -->
// //         <div class="flex justify-between items-center mb-2">
// //           <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
// //             ${product.category}
// //           </span>

// //           <span class="text-sm text-yellow-500 font-medium">
// //             ⭐ ${product.rating.rate} (${product.rating.count})
// //           </span>
// //         </div>

// //         <!-- Title -->
// //         <h2 class="text-md font-semibold text-gray-800 line-clamp-2">
// //           ${product.title}
// //         </h2>

// //         <!-- Price -->
// //         <p class="text-lg font-bold text-purple-700 mt-2">
// //           $${product.price}
// //         </p>

// //         <!-- Buttons -->
// //         <div class="flex justify-between items-center mt-4">

// //           <button class="text-sm text-purple-600 hover:underline">
// //             Details
// //           </button>

// //           <button class="btn bg-purple-600 text-white hover:bg-purple-700 transition duration-300">
// //             Add to Cart
// //           </button>

// //         </div>

// //       </div>
// //     `;

// // // appending the product card to the trending container 
// //     trendingContainer.appendChild(productDiv);
// //   }
// // }





// // trending();






// // // ======================
// // // Sections
// // // ======================
// // const homeSection = document.querySelector(".Banner");
// // const whySection = document.querySelector(".why-section");
// // const trendingSection = document.getElementById("trending-section");

// // // ======================
// // // Navbar buttons
// // // ======================
// // const homeBtns = document.querySelectorAll(".nav-home");
// // const productsBtns = document.querySelectorAll("#load-products-btn, .nav-products");

// // // ======================
// // // Show Home page
// // // ======================
// // function showHome() {
// //   homeSection.style.display = "block";
// //   whySection.style.display = "block";
// //   trendingSection.style.display = "none";

// //   // Active nav
// //   document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
// //   homeBtns.forEach(btn => btn.classList.add("active-nav"));
// // }

// // // ======================
// // // Show Products page
// // // ======================
// // function showProducts() {
// //   homeSection.style.display = "none";
// //   whySection.style.display = "none";
// //   trendingSection.style.display = "block";

// //   // Active nav
// //   document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
// //   productsBtns.forEach(btn => btn.classList.add("active-nav"));

// //   // Fetch products only once
// //   if (!trendingSection.dataset.loaded) {
// //     fetch('https://fakestoreapi.com/products')
// //       .then(res => res.json())
// //       .then(data => dataload(data))
// //       .catch(err => console.error(err));
// //     trendingSection.dataset.loaded = "true";
// //   }
// // }

// // // ======================
// // // Render products
// // // ======================
// // function dataload(products) {
// //   const container = document.getElementById("trending-containers");
// //   container.innerHTML = "";

// //   const limitedProducts = products.slice(0, 20); // 2x3 grid

// //   for (const product of limitedProducts) {
// //     const card = document.createElement("div");
// //     card.className = "card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300";

// //     card.innerHTML = `
// //       <figure class="p-6 bg-gray-50">
// //         <img src="${product.image}" alt="${product.title}" class="h-48 object-contain mx-auto transform hover:scale-105 transition duration-300">
// //       </figure>
// //       <div class="card-body p-5">
// //         <div class="flex justify-between items-center mb-2">
// //           <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">${product.category}</span>
// //           <span class="text-sm text-yellow-500 font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
// //         </div>
// //         <h2 class="text-md font-semibold text-gray-800 line-clamp-2">${product.title}</h2>
// //         <p class="text-lg font-bold text-purple-700 mt-2">$${product.price}</p>
// //         <div class="flex justify-between items-center mt-4">
// //           <button class="text-sm text-purple-600 hover:underline">Details</button>
// //           <button class="btn bg-purple-600 text-white hover:bg-purple-700 transition duration-300">Add to Cart</button>
// //         </div>
// //       </div>
// //     `;
// //     container.appendChild(card);
// //   }
// // }

// // // ======================
// // // Event listeners
// // // ======================
// // homeBtns.forEach(btn => btn.addEventListener("click", showHome));
// // productsBtns.forEach(btn => btn.addEventListener("click", showProducts));

// // // ======================
// // // Initialize Home page
// // // ======================
// // showHome();
// // ======================
// // Home Trending Products (3 products)
// // ======================
// function loadHomeTrending() {
//   fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => {
//       const container = document.getElementById("home-trending-container");
//       container.innerHTML = "";
//       const limited = data.slice(0, 3);
//       limited.forEach(product => {
//         const card = document.createElement("div");
//         card.className = "card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300";
//         card.innerHTML = `
//           <figure class="p-6 bg-gray-50">
//             <img src="${product.image}" alt="${product.title}" class="h-48 object-contain mx-auto transform hover:scale-105 transition duration-300">
//           </figure>
//           <div class="card-body p-5">
//             <div class="flex justify-between items-center mb-2">
//               <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">${product.category}</span>
//               <span class="text-sm text-yellow-500 font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
//             </div>
//             <h2 class="text-md font-semibold text-gray-800 line-clamp-2">${product.title}</h2>
//             <p class="text-lg font-bold text-purple-700 mt-2">$${product.price}</p>
//           </div>
//         `;
//         container.appendChild(card);
//       });
//     });
// }

// // ======================
// // Products Page (20 products)
// // ======================
// function loadProductsPage() {
//   const trendingSection = document.getElementById("trending-section");
//   if (!trendingSection.dataset.loaded) {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => {
//         const container = document.getElementById("trending-container");
//         container.innerHTML = "";
//         const limited = data.slice(0, 20);
//         limited.forEach(product => {
//           const card = document.createElement("div");
//           card.className = "card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300";
//           card.innerHTML = `
//             <figure class="p-6 bg-gray-50">
//               <img src="${product.image}" alt="${product.title}" class="h-48 object-contain mx-auto transform hover:scale-105 transition duration-300">
//             </figure>
//             <div class="card-body p-5">
//               <div class="flex justify-between items-center mb-2">
//                 <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">${product.category}</span>
//                 <span class="text-sm text-yellow-500 font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
//               </div>
//               <h2 class="text-md font-semibold text-gray-800 line-clamp-2">${product.title}</h2>
//               <p class="text-lg font-bold text-purple-700 mt-2">$${product.price}</p>
//             </div>
//           `;
//           container.appendChild(card);
//         });
//         trendingSection.dataset.loaded = "true";
//       });
//   }
// }

// // ======================
// // Sections
// // ======================
// const homeSection = document.querySelector(".Banner");
// const whySection = document.querySelector(".why-section");
// const homeTrending = document.getElementById("home-trending-section");
// const productsSection = document.getElementById("trending-section");


// // ======================
// // Navbar buttons
// // ======================
// const homeBtns = document.querySelectorAll(".nav-home");
// const productsBtns = document.querySelectorAll(".nav-products, #load-products-btn");

// // ======================
// // Show Home
// // ======================
// function showHome() {
//   homeSection.style.display = "block";
//   whySection.style.display = "block";
//   homeTrending.style.display = "block";
//   productsSection.style.display = "none";

//   // Active nav
//   document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
//   homeBtns.forEach(btn => btn.classList.add("active-nav"));

//   loadHomeTrending(); // show 3 products
// }

// // ======================
// // Show Products
// // ======================
// function showProducts() {
//   homeSection.style.display = "none";
//   whySection.style.display = "none";
//   homeTrending.style.display = "none";
//   productsSection.style.display = "block";

//   // Active nav
//   document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
//   productsBtns.forEach(btn => btn.classList.add("active-nav"));

//   loadProductsPage(); // fetch 20 products only once
// }

// // ======================
// // Event listeners
// // ======================
// homeBtns.forEach(btn => btn.addEventListener("click", showHome));
// productsBtns.forEach(btn => btn.addEventListener("click", showProducts));

// // ======================
// // Initialize Home page
// // ======================
// showHome();
// ======================
// Sections
// ======================
const homeSection = document.querySelector(".Banner");
const whySection = document.querySelector(".why-section");
const homeTrending = document.getElementById("home-trending-section");
const productsSection = document.getElementById("trending-section");

// ======================
// Load Home Trending (3 products)
// ======================
function loadHomeTrending() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("home-trending-container");
      container.innerHTML = "";
      data.slice(0, 3).forEach(product => {
        const card = document.createElement("div");
        card.className = "card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300";
        card.innerHTML = `
          <figure class="p-6 bg-gray-50">
            <img src="${product.image}" alt="${product.title}" class="h-48 object-contain mx-auto transform hover:scale-105 transition duration-300">
          </figure>
          <div class="card-body p-5">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">${product.category}</span>
              <span class="text-sm text-yellow-500 font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
            </div>
            <h2 class="text-md font-semibold text-gray-800 line-clamp-2">${product.title}</h2>
            <p class="text-lg font-bold text-purple-700 mt-2">$${product.price}</p>
          </div>
        `;
        container.appendChild(card);
      });
    });
}

// ======================
// Load Products Page (20 products)
// ======================
function loadProductsPage() {
  const trendingSection = document.getElementById("trending-section");
  if (!trendingSection.dataset.loaded) {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("trending-container");
        container.innerHTML = "";
        data.slice(0, 20).forEach(product => {
          const card = document.createElement("div");
          card.className = "card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300";
          card.innerHTML = `
            <figure class="p-6 bg-gray-50">
              <img src="${product.image}" alt="${product.title}" class="h-48 object-contain mx-auto transform hover:scale-105 transition duration-300">
            </figure>
            <div class="card-body p-5">
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">${product.category}</span>
                <span class="text-sm text-yellow-500 font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
              </div>
              <h2 class="text-md font-semibold text-gray-800 line-clamp-2">${product.title}</h2>
              <p class="text-lg font-bold text-purple-700 mt-2">$${product.price}</p>
            </div>
          `;
          container.appendChild(card);
        });
        trendingSection.dataset.loaded = "true";
      });
  }
}

// ======================
// Show Home
// ======================
function showHome() {
  homeSection.style.display = "block";
  whySection.style.display = "block";
  homeTrending.style.display = "block";
  productsSection.style.display = "none";

  document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
  document.querySelectorAll(".nav-home").forEach(btn => btn.classList.add("active-nav"));

  loadHomeTrending();
}

// ======================
// Show Products
// ======================
function showProducts() {
  homeSection.style.display = "none";
  whySection.style.display = "none";
  homeTrending.style.display = "none";
  productsSection.style.display = "block";

  document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
  document.querySelectorAll(".nav-products").forEach(btn => btn.classList.add("active-nav"));

  loadProductsPage();
}

// ======================
// Event Delegation for navbar (desktop + mobile)
// ======================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-home")) {
    showHome();
  }
  if (e.target.classList.contains("nav-products")) {
    showProducts();
  }
});

// ======================
// Initialize
// ======================
showHome();
