// Global error banner for runtime debugging
window.onerror = function (message, source, lineno, colno, error) {
    const errorBanner = document.createElement('div');
    errorBanner.style.position = 'fixed';
    errorBanner.style.top = '0';
    errorBanner.style.left = '0';
    errorBanner.style.width = '100%';
    errorBanner.style.backgroundColor = 'rgba(231, 76, 60, 0.95)';
    errorBanner.style.color = 'white';
    errorBanner.style.zIndex = '999999';
    errorBanner.style.padding = '15px';
    errorBanner.style.fontSize = '14px';
    errorBanner.style.fontWeight = 'bold';
    errorBanner.style.textAlign = 'center';
    errorBanner.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    errorBanner.textContent = `JS Error: ${message} (Line ${lineno}:${colno})`;
    document.body.appendChild(errorBanner);
    return false;
};

const defaultMenuData = [

    // Veggie Pizzas (under "veg" category)
    { id: 1, name: "Margherita", category: "veg", desc: "Say Cheese", emoji: "🍕", price: { small: 119, medium: 219, large: 319 }, rating: 4.8, reviews: 1450, badges: ["veg", "bestseller"] },
    { id: 2, name: "Spring Filling", category: "veg", desc: "Capsicum, Sweet Corn, Paneer", emoji: "🍕", price: { small: 170, medium: 260, large: 390 }, rating: 4.6, reviews: 780, badges: ["veg"] },
    { id: 3, name: "Garden Special", category: "veg", desc: "Mushroom, Capsicum, Onion, Tomato", emoji: "🍕", price: { small: 170, medium: 260, large: 390 }, rating: 4.5, reviews: 540, badges: ["veg"] },
    { id: 4, name: "Tandoori Paneer", category: "veg", desc: "Paneer, Capsicum, Onion, Tomato", emoji: "🍕", price: { small: 170, medium: 260, large: 390 }, rating: 4.7, reviews: 920, badges: ["veg", "bestseller"] },
    { id: 5, name: "Veg BBQ", category: "veg", desc: "Mushroom, Onion, Sweet Corn", emoji: "🍕", price: { small: 170, medium: 260, large: 390 }, rating: 4.4, reviews: 310, badges: ["veg"] },
    { id: 6, name: "Hot Pepper Passion (Spicy)", category: "veg", desc: "Capsicum, Jalapeno, Red Paprika", emoji: "🍕", price: { small: 170, medium: 260, large: 390 }, rating: 4.6, reviews: 480, badges: ["veg", "spicy"] },
    { id: 8, name: "Paneer Makhani (Spicy)", category: "veg", desc: "Paneer, Capsicum, Onion, Tomato, Red Paprika", emoji: "🍕", price: { small: 190, medium: 270, large: 400 }, rating: 4.8, reviews: 1050, badges: ["veg", "spicy", "bestseller"] },
    { id: 9, name: "Farm Villa", category: "veg", desc: "Capsicum, Onion, Tomato, Black Olives, Sweet Corn", emoji: "🍕", price: { small: 190, medium: 270, large: 400 }, rating: 4.7, reviews: 880, badges: ["veg"] },
    { id: 10, name: "Veggie Peri Peri (Spicy)", category: "veg", desc: "Paneer, Capsicum, Onion, Black Olive, Jalapeno", emoji: "🍕", price: { small: 190, medium: 270, large: 400 }, rating: 4.6, reviews: 670, badges: ["veg", "spicy"] },

    // Classic Non-Veg Pizza (under "nonveg" category)
    { id: 12, name: "Chicken Margherita", category: "nonveg", desc: "Chicken, Cheese", emoji: "🍕", price: { small: 209, medium: 349, large: 509 }, rating: 4.6, reviews: 610, badges: ["nonveg"] },
    { id: 13, name: "Chicken Tikka (Spicy)", category: "nonveg", desc: "Chicken, Capsicum, Jalapeno, Onion", emoji: "🍕", price: { small: 210, medium: 355, large: 510 }, rating: 4.8, reviews: 1140, badges: ["nonveg", "spicy", "bestseller"] },
    { id: 14, name: "Chicken Mexican (Spicy)", category: "nonveg", desc: "Chicken, Tomato, Sweet Corn, Jalapeno", emoji: "🍕", price: { small: 210, medium: 355, large: 510 }, rating: 4.7, reviews: 830, badges: ["nonveg", "spicy"] },
    { id: 15, name: "Tandoori Chicken", category: "nonveg", desc: "Chicken, Onion, Capsicum, Tomato", emoji: "🍕", price: { small: 210, medium: 355, large: 510 }, rating: 4.8, reviews: 1250, badges: ["nonveg", "bestseller"] },
    { id: 16, name: "Chicken Pepper Mix (Spicy)", category: "nonveg", desc: "Chicken, Capsicum, Jalapeno, Red Paprika", emoji: "🍕", price: { small: 219, medium: 370, large: 530 }, rating: 4.6, reviews: 540, badges: ["nonveg", "spicy"] },
    { id: 17, name: "Chicken Peri-Peri (Spicy)", category: "nonveg", desc: "Chicken Onion, Red Paprika", emoji: "🍕", price: { small: 219, medium: 370, large: 530 }, rating: 4.7, reviews: 720, badges: ["nonveg", "spicy"] },
    { id: 19, name: "Chicken BBQ", category: "nonveg", desc: "Chicken, Capsicum, Onion", emoji: "🍕", price: { small: 219, medium: 370, large: 530 }, rating: 4.6, reviews: 810, badges: ["nonveg", "new"] },
    { id: 20, name: "Chicken Supreme (Spicy)", category: "nonveg", desc: "Chicken, Mushroom, Capsicum, Onion, Tomato, Black Olive, Jalapeno", emoji: "🍕", price: { small: 240, medium: 390, large: 550 }, rating: 4.9, reviews: 1560, badges: ["nonveg", "spicy", "bestseller"] },

    // Garlic Bread & Zingy / Strombolis (under "sides" category)
    { id: 21, name: "Garlic Bread Sticks (6 pcs)", category: "sides", desc: "Freshly baked garlic bread sticks", emoji: "🥖", price: { small: 95, medium: 95, large: 95 }, rating: 4.6, reviews: 2100, badges: ["veg", "bestseller"] },
    { id: 22, name: "Cheesy Sticks", category: "sides", desc: "Garlic bread sticks loaded with extra cheese", emoji: "🥖", price: { small: 115, medium: 115, large: 115 }, rating: 4.7, reviews: 1450, badges: ["veg"] },
    { id: 23, name: "Stuffed Cheesy Garlic Bread (6 pcs)", category: "sides", desc: "Only Cheese", emoji: "🥖", price: { small: 135, medium: 135, large: 135 }, rating: 4.5, reviews: 860, badges: ["veg"] },
    { id: 24, name: "Stuffed Veg Garlic Bread", category: "sides", desc: "Sweet Corn, Jalapeno Cheese", emoji: "🥖", price: { small: 155, medium: 155, large: 155 }, rating: 4.8, reviews: 1890, badges: ["veg", "spicy", "bestseller"] },
    { id: 25, name: "Stuffed Chicken Garlic Bread", category: "sides", desc: "Chicken, Chicken", emoji: "🥖", price: { small: 165, medium: 165, large: 165 }, rating: 4.8, reviews: 1120, badges: ["nonveg"] },

    // Veggie Pizza Mania (under "veg" category)
    { id: 26, name: "Cheese / Capsicum / Onion / Tomato / Sweet Corn", category: "veg", desc: "Topped with crunchy capsicum, onion, fresh tomato, and sweet corn", emoji: "🍕", price: { small: 80, medium: 95, large: 95 }, rating: 4.4, reviews: 310, badges: ["veg", "mania"] },
    { id: 27, name: "Onion, Capsicum", category: "veg", desc: "Classic combination of crunchy onion and green capsicum", emoji: "🍕", price: { small: 105, medium: 120, large: 120 }, rating: 4.5, reviews: 420, badges: ["veg", "mania"] },
    { id: 28, name: "Capsicum, Paneer", category: "veg", desc: "Succulent paneer cubes with fresh green capsicum", emoji: "🍕", price: { small: 115, medium: 130, large: 130 }, rating: 4.6, reviews: 580, badges: ["veg", "mania", "bestseller"] },
    { id: 29, name: "Black Olives, Jalapeno", category: "veg", desc: "Zesty combination of sliced black olives and spicy jalapenos", emoji: "🍕", price: { small: 125, medium: 140, large: 140 }, rating: 4.5, reviews: 340, badges: ["veg", "mania"] },
    { id: 30, name: "Paneer, Sweet Corn, Jalapeno", category: "veg", desc: "Loaded with paneer, sweet corn, and spicy jalapenos", emoji: "🍕", price: { small: 130, medium: 145, large: 145 }, rating: 4.7, reviews: 650, badges: ["veg", "mania", "bestseller"] },
    { id: 31, name: "Paneer, Capsicum Red Paprika", category: "veg", desc: "Paneer chunks, green capsicum, and spicy red paprika", emoji: "🍕", price: { small: 140, medium: 155, large: 155 }, rating: 4.6, reviews: 480, badges: ["veg", "mania"] },

    // Non-Veg Pizza Mania (under "nonveg" category)
    { id: 32, name: "Chicken Tikka", category: "nonveg", desc: "Flavorful chicken tikka pieces on a single-serve base", emoji: "🍕", price: { small: 125, medium: 140, large: 140 }, rating: 4.7, reviews: 520, badges: ["nonveg", "mania", "bestseller"] },
    { id: 33, name: "Chicken Capsicum", category: "nonveg", desc: "Juicy chicken bits and fresh capsicum toppings", emoji: "🍕", price: { small: 135, medium: 150, large: 150 }, rating: 4.6, reviews: 390, badges: ["nonveg", "mania"] },

    // Beverages (under "drinks" category)
    { id: 34, name: "Virgin Mojito", category: "drinks", desc: "Refreshing mint and lime mocktail", emoji: "🥤", price: { small: 99, medium: 99, large: 99 }, rating: 4.6, reviews: 520, badges: ["veg"] },
    { id: 35, name: "Blue Lagoon", category: "drinks", desc: "Zesty blue curacao drink with a hint of lemon", emoji: "🥤", price: { small: 99, medium: 99, large: 99 }, rating: 4.5, reviews: 340, badges: ["veg"] },
    { id: 36, name: "Masala Cold Drink", category: "drinks", desc: "Spiced cola with unique Indian masala blend", emoji: "🥤", price: { small: 49, medium: 49, large: 49 }, rating: 4.7, reviews: 810, badges: ["veg", "bestseller"] },
    { id: 37, name: "Lemon Ice Tea", category: "drinks", desc: "Chilled black tea with fresh lemon flavor", emoji: "🥤", price: { small: 79, medium: 79, large: 79 }, rating: 4.4, reviews: 290, badges: ["veg"] },
    { id: 38, name: "Cold Coffee", category: "drinks", desc: "Rich and creamy blended iced coffee", emoji: "🥤", price: { small: 79, medium: 79, large: 79 }, rating: 4.6, reviews: 920, badges: ["veg", "bestseller"] },
    { id: 39, name: "Kitkat/Oreo Shake", category: "drinks", desc: "Thick chocolate shake blended with Kitkat or Oreo cookies", emoji: "🥤", price: { small: 109, medium: 109, large: 109 }, rating: 4.8, reviews: 1150, badges: ["veg", "bestseller"] },
    { id: 40, name: "Lemon Soda", category: "drinks", desc: "Refreshing fizzy soda with fresh lime juice", emoji: "🥤", price: { small: 49, medium: 49, large: 49 }, rating: 4.5, reviews: 670, badges: ["veg"] },

    // Zingy Parcels (under "sides" category)
    { id: 41, name: "Veggie Zingy", category: "sides", desc: "Fresh paneer and spicy harissa sauce in a warm, golden pastry parcel", emoji: "🥟", price: { small: 60, medium: 60, large: 60 }, rating: 4.5, reviews: 480, badges: ["veg"] },
    { id: 42, name: "Chicken Zingy", category: "sides", desc: "Juicy chicken chunks and harissa sauce in a fresh pastry parcel", emoji: "🥟", price: { small: 80, medium: 80, large: 80 }, rating: 4.7, reviews: 630, badges: ["nonveg", "bestseller"] },

    // Strombolis (under "sides" category)
    { id: 43, name: "Veggie Stromboli", category: "sides", desc: "Capsicum, onion, sweet corn, and melted cheese rolled in dough", emoji: "🥖", price: { small: 120, medium: 120, large: 120 }, rating: 4.5, reviews: 290, badges: ["veg"] },
    { id: 69, name: "Peri-Peri Veg Stromboli", category: "sides", desc: "Capsicum, onion, sweet corn, peri peri seasoning and cheese", emoji: "🥖", price: { small: 150, medium: 150, large: 150 }, rating: 4.6, reviews: 180, badges: ["veg", "spicy"] },
    { id: 44, name: "Chicken Stromboli", category: "sides", desc: "Spiced chicken chunks, capsicum, and mozzarella rolled in golden dough", emoji: "🥖", price: { small: 160, medium: 160, large: 160 }, rating: 4.7, reviews: 410, badges: ["nonveg", "bestseller"] },
    { id: 70, name: "Peri-Peri Chicken Stromboli", category: "sides", desc: "Chicken, capsicum, onion, peri peri seasoning and cheese", emoji: "🥖", price: { small: 180, medium: 180, large: 180 }, rating: 4.7, reviews: 210, badges: ["nonveg", "spicy"] },

    // Add Ons (under "sides" category)
    { id: 45, name: "Cheese Slice", category: "sides", desc: "Extra slice of premium processed cheese", emoji: "🧀", price: { small: 18, medium: 18, large: 18 }, rating: 4.4, reviews: 150, badges: ["veg"] },
    { id: 46, name: "Tandoori Dip", category: "sides", desc: "Creamy tandoori-flavored dipping sauce", emoji: "🍯", price: { small: 25, medium: 25, large: 25 }, rating: 4.6, reviews: 780, badges: ["veg"] },
    { id: 47, name: "Cheesy Dip", category: "sides", desc: "Rich and creamy cheese dipping sauce", emoji: "🍯", price: { small: 25, medium: 25, large: 25 }, rating: 4.7, reviews: 920, badges: ["veg", "bestseller"] },
    { id: 48, name: "Jalapeno Dip", category: "sides", desc: "Spicy and tangy jalapeno dip", emoji: "🍯", price: { small: 25, medium: 25, large: 25 }, rating: 4.5, reviews: 410, badges: ["veg"] },
    { id: 49, name: "Cheesy Garlic Dip", category: "sides", desc: "Zesty garlic and cheese dipping sauce", emoji: "🍯", price: { small: 25, medium: 25, large: 25 }, rating: 4.7, reviews: 860, badges: ["veg", "bestseller"] },

    // Burgers (under "burgers" category)
    { id: 50, name: "Aloo Tikki Burger", category: "burgers", desc: "Crispy aloo patty with onion and signature sauce", emoji: "🍔", price: { small: 59, medium: 59, large: 59 }, rating: 4.5, reviews: 310, badges: ["veg"] },
    { id: 51, name: "Veggie Burger", category: "burgers", desc: "Crispy veggie patty with onion, tomato, and signature sauce", emoji: "🍔", price: { small: 79, medium: 79, large: 79 }, rating: 4.6, reviews: 420, badges: ["veg"] },
    { id: 52, name: "Veggie Tandoori Burger", category: "burgers", desc: "Crispy veggie patty with onion, tomato, cucumber, and tandoori sauce", emoji: "🍔", price: { small: 89, medium: 89, large: 89 }, rating: 4.6, reviews: 290, badges: ["veg"] },
    { id: 53, name: "Veggie Makhni Burger", category: "burgers", desc: "Crispy veggie patty with onion, tomato, cucumber, and makhni sauce", emoji: "🍔", price: { small: 89, medium: 89, large: 89 }, rating: 4.5, reviews: 180, badges: ["veg"] },
    { id: 54, name: "Paneer Burger", category: "burgers", desc: "Crispy paneer patty with onion, tomato, cucumber, and signature sauce", emoji: "🍔", price: { small: 99, medium: 99, large: 99 }, rating: 4.8, reviews: 850, badges: ["veg", "bestseller"] },
    { id: 55, name: "Chicken Burger", category: "burgers", desc: "Crispy chicken patty with signature sauce", emoji: "🍔", price: { small: 89, medium: 89, large: 89 }, rating: 4.6, reviews: 620, badges: ["nonveg"] },
    { id: 56, name: "Chicken Zinger", category: "burgers", desc: "Crispy chicken zinger with crunchy cabbage and garlic sauce", emoji: "🍔", price: { small: 110, medium: 110, large: 110 }, rating: 4.8, reviews: 1140, badges: ["nonveg", "bestseller"] },
    { id: 57, name: "Murg Makhni Burger", category: "burgers", desc: "Crispy chicken patty with onion, tomato, cucumber, and makhni sauce", emoji: "🍔", price: { small: 99, medium: 99, large: 99 }, rating: 4.7, reviews: 480, badges: ["nonveg"] },

    // Fries & Sides (under "sides" category)
    { id: 58, name: "Salted Fries", category: "sides", desc: "Crispy golden fries tossed in seasoned salt with dip", emoji: "🍟", price: { small: 69, medium: 69, large: 69 }, rating: 4.5, reviews: 920, badges: ["veg"] },
    { id: 59, name: "Peri Peri Fries", category: "sides", desc: "Crispy golden fries with peri peri seasoning with dip", emoji: "🍟", price: { small: 89, medium: 89, large: 89 }, rating: 4.7, reviews: 1040, badges: ["veg", "spicy"] },
    { id: 60, name: "Loaded Cheesy Fries", category: "sides", desc: "Crispy golden fries smothered in warm liquid cheese", emoji: "🍟", price: { small: 119, medium: 119, large: 119 }, rating: 4.8, reviews: 1450, badges: ["veg", "bestseller"] },
    { id: 61, name: "Pizza Cheesy Fries", category: "sides", desc: "Crispy fries with black olives, liquid cheese, and signature pizza sauce", emoji: "🍟", price: { small: 139, medium: 139, large: 139 }, rating: 4.8, reviews: 880, badges: ["veg", "bestseller"] },
    { id: 67, name: "Chicken Popcorn with Dip.", category: "sides", desc: "Crispy chicken popcorn served with delicious dip", emoji: "🍗", price: { small: 110, medium: 110, large: 110 }, rating: 4.6, reviews: 310, badges: ["nonveg"] },
    { id: 68, name: "Chicken Cheese Ball (6 pcs) with Dip.", category: "sides", desc: "Crispy chicken cheese balls served with delicious dip", emoji: "🧀", price: { small: 120, medium: 120, large: 120 }, rating: 4.7, reviews: 240, badges: ["nonveg"] },

    // Pasta (under "pasta" category)
    { id: 62, name: "Veggie Pasta", category: "pasta", desc: "Choice of Red/White/Mix Sauce, Tomato, Capsicum, Onion", emoji: "🍝", price: { small: 150, medium: 150, large: 150 }, rating: 4.6, reviews: 340, badges: ["veg"] },
    { id: 63, name: "Chicken Pasta", category: "pasta", desc: "Choice of Red/White/Mix Sauce, Chicken, Tomato, Capsicum, Onion", emoji: "🍝", price: { small: 180, medium: 180, large: 180 }, rating: 4.7, reviews: 490, badges: ["nonveg"] },

    // Desserts (under "desserts" category)
    { id: 64, name: "Hot Choco Lava Cake", category: "desserts", desc: "Rich chocolate cake with a molten chocolate center", emoji: "🌋", price: { small: 79, medium: 79, large: 79 }, rating: 4.9, reviews: 1850, badges: ["veg", "bestseller"] },
    { id: 65, name: "Brownie with Chocolate Sauce", category: "desserts", desc: "Warm chocolate brownie drizzled with rich chocolate sauce", emoji: "🍫", price: { small: 89, medium: 89, large: 89 }, rating: 4.8, reviews: 920, badges: ["veg", "bestseller"] },
    { id: 66, name: "Add Ice-Cream", category: "desserts", desc: "Scoop of creamy vanilla ice cream to accompany your dessert", emoji: "🍨", price: { small: 30, medium: 30, large: 30 }, rating: 4.5, reviews: 290, badges: ["veg"] }

];

let menuData = JSON.parse(localStorage.getItem('menuData')) || defaultMenuData;
if (!localStorage.getItem('menuData')) {
    localStorage.setItem('menuData', JSON.stringify(defaultMenuData));
}

let reviewsData = JSON.parse(localStorage.getItem('reviewsData')) || [
    { name: "Rahul Sharma", initial: "RS", rating: 5, text: "Absolutely the best pizza I've ever had! The crust was perfectly crispy, cheese was oozing, and delivery was super fast. Will order again!", date: "2 days ago", order: "Chicken Tikka (Spicy), Garlic Bread Sticks (6pcs)" },
    { name: "Priya Patel", initial: "PP", rating: 5, text: "The Paneer Makhni pizza is to die for! Fresh ingredients, generous toppings, and the cheesy garlic bread is incredible. My new go-to pizza place!", date: "5 days ago", order: "Paneer Makhni (Spicy), Stuffed Cheesy Garlic Bread" },
    { name: "Amit Kumar", initial: "AK", rating: 4, text: "Great taste and quality! Delivery was within 25 minutes. The only improvement could be in packaging - it was slightly soggy. But taste-wise, perfect!", date: "1 week ago", order: "Margherita, Garlic Bread Sticks (6pcs)" },
    { name: "Sneha Reddy", initial: "SR", rating: 5, text: "Ordered the party pack for my birthday - everyone loved it! 4 pizzas, all different flavors, and every single one was delicious. Amazing value for money!", date: "1 week ago", order: "Party Pack" },
    { name: "Vikram Singh", initial: "VS", rating: 5, text: "The Chicken Supreme is a masterpiece! The combination of toppings makes it unique. Chef's kiss! 🤌 Also, their stuffed cheesy garlic bread is heavenly.", date: "2 weeks ago", order: "Chicken Supreme (Spicy), Stuffed Cheesy Garlic Bread" },
    { name: "Ananya Gupta", initial: "AG", rating: 4, text: "Love the customization options! Built my own pizza with extra cheese, mushrooms, and jalapeños. It was perfect. The app is very user-friendly too.", date: "2 weeks ago", order: "Custom Pizza" },
    { name: "Rohit Mehta", initial: "RM", rating: 5, text: "Best pizza delivery service in town! Consistent quality every time I order. The BOGO deal is unbeatable. My whole family is addicted now 😄", date: "3 weeks ago", order: "Chicken Tikka (Spicy), Farm Villa" },
    { name: "Kavitha Nair", initial: "KN", rating: 5, text: "Tried the Tandoori Paneer pizza and it was restaurant-quality! Worth every rupee. The flavor was authentic and veggies were fresh.", date: "3 weeks ago", order: "Tandoori Paneer" },
];

if (!localStorage.getItem('reviewsData')) {
    localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
}

// ===== STATE =====
let cart = [];
let currentCategory = 'all';
let currentSize = 'medium';
let selectedRating = 0;
let reviewSlide = 0;
let orderMode = 'dinein'; // 'dinein' or 'delivery'
let paymentMethod = 'cash'; // 'cash' or 'upi'

// Dine-In Table Ordering State
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get('table'); // No default to Table 2 (determined dynamically)
let orderedItems = [];
let kotsSent = 0;

// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);

    // Initialize Dine-in table identifiers in the UI
    const cartTableInfo = document.getElementById('cartTableInfo');
    const receiptTableNum = document.getElementById('receiptTableNum');
    const billTable = document.getElementById('billTable');
    
    if (tableNumber) {
        if (cartTableInfo) cartTableInfo.textContent = `Dine-in: Table ${tableNumber}`;
        if (receiptTableNum) receiptTableNum.textContent = tableNumber;
        if (billTable) billTable.textContent = `Table ${tableNumber}`;
        
        // Restore active session for this table if it exists
        const storedTableState = localStorage.getItem(`table_order_${tableNumber}`);
        if (storedTableState) {
            const parsed = JSON.parse(storedTableState);
            orderedItems = parsed.orderedItems || [];
            updateCart();
        }
    } else {
        // Since there is no table parameter, default to Home Delivery mode
        orderMode = 'delivery';
        
        const modeDineInBtn = document.getElementById('modeDineInBtn');
        const modeDeliveryBtn = document.getElementById('modeDeliveryBtn');
        if (modeDineInBtn && modeDeliveryBtn) {
            modeDineInBtn.classList.remove('active');
            modeDeliveryBtn.classList.add('active');
        }
        
        if (cartTableInfo) cartTableInfo.textContent = `Home Delivery`;
        if (receiptTableNum) receiptTableNum.textContent = `N/A`;
        if (billTable) billTable.textContent = `Home Delivery`;
        
        updateCart();
    }

    // Initialize Auto Login via Google One Tap (or sandbox One Tap fallback)
    initGoogleOneTap();
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 500);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function updateThemeIcon() {
    try {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        if (themeIcon) {
            if (currentTheme === 'light') {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
        }
    } catch (e) {
        console.error("Error updating theme icon:", e);
    }
}

// Initial state application for theme icon
updateThemeIcon();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        try {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
            updateThemeIcon();
        } catch (e) {
            console.error("Error handling theme toggle click:", e);
        }
    });
}

// Search
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active') && searchInput) {
            setTimeout(() => searchInput.focus(), 300);
        }
    });
}

if (searchClose && searchBar) {
    searchClose.addEventListener('click', () => {
        searchBar.classList.remove('active');
        if (searchInput) searchInput.value = '';
        renderMenuCards(menuData); // Reset search when closed
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        try {
            const query = e.target.value.toLowerCase().trim();
            if (query.length > 0) {
                currentCategory = 'all';
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                const catAllBtn = document.querySelector('[data-category="all"]');
                if (catAllBtn) catAllBtn.classList.add('active');
                
                const filtered = menuData.filter(item => {
                    const itemName = (item.name || '').toLowerCase();
                    const itemDesc = (item.desc || '').toLowerCase();
                    const itemCat = (item.category || '').toLowerCase();
                    return itemName.includes(query) || itemDesc.includes(query) || itemCat.includes(query);
                });
                renderMenuCards(filtered);

                // Auto-scroll to the menu section so the user sees results immediately
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                renderMenuCards(menuData);
            }
        } catch (err) {
            console.error("Error during search input processing:", err);
        }
    });
}

// ===== HERO COUNTER ANIMATION =====
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 80;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    });
}

// Intersection Observer for counter animation
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

// ===== MENU RENDERING =====
function getItemImage(item) {
    const name = item.name.toLowerCase();
    const category = item.category;

    const pizzaImages = [
        'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594007654729-407ededc4963?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605478328990-ec18012674e2?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=500&q=80'
    ];

    const burgerImages = [
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=500&q=80'
    ];

    const pastaImages = [
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80'
    ];

    const drinkImages = [
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80'
    ];

    const dessertImages = [
        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=80'
    ];

    const sidesImages = [
        'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608797178974-15b35a61d121?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628191137573-dee64e727614?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1619221882141-313d647bdfa6?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1595166183863-7186db3e67c8?auto=format&fit=crop&w=500&q=80'
    ];

    let imgArray;
    if (category === 'veg' || category === 'nonveg') {
        imgArray = pizzaImages;
    } else if (category === 'burgers') {
        imgArray = burgerImages;
    } else if (category === 'pasta') {
        imgArray = pastaImages;
    } else if (category === 'drinks') {
        imgArray = drinkImages;
    } else if (category === 'desserts') {
        imgArray = dessertImages;
    } else if (category === 'sides') {
        imgArray = sidesImages;
    } else {
        imgArray = pizzaImages;
    }

    const imgIndex = item.id % imgArray.length;
    return imgArray[imgIndex];
}

function renderMenuCards(items) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    
    items.forEach((item, index) => {
        const price = item.price[currentSize];
        const stars = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 >= 0.5 ? '½' : '');
        
        const badgeHTML = item.badges.map(b => {
            const labels = { veg: '🟢 Veg', nonveg: '🔴 Non-Veg', bestseller: '🔥 Bestseller', new: '✨ New', spicy: '🌶️ Spicy', mania: '🍕 Mania' };
            const classes = { veg: 'badge-veg', nonveg: 'badge-nonveg', bestseller: 'badge-bestseller', new: 'badge-new', spicy: 'badge-spicy', mania: 'badge-mania' };
            return `<span class="card-badge ${classes[b]}">${labels[b]}</span>`;
        }).join('');

        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="card-badges">${badgeHTML}</div>
            <div class="card-img">
                <button class="card-favorite" onclick="toggleFavorite(this)" aria-label="Add to favorites">
                    <i class="far fa-heart"></i>
                </button>
                <img src="${getItemImage(item)}" alt="${item.name}" loading="lazy">
                <div class="mobile-add-container">
                    <button class="mobile-add-btn" onclick="addToCart(${item.id})">ADD</button>
                    <span class="customisable-text">Customisable</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-num">${item.rating}</span>
                    <span class="rating-count">(${item.reviews.toLocaleString()})</span>
                </div>
                <div class="card-footer">
                    <div class="card-price">
                        ₹${price}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})" aria-label="Add ${item.name} to cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Category Filter
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        
        const filtered = currentCategory === 'all' 
            ? menuData 
            : menuData.filter(item => item.category === currentCategory);
        renderMenuCards(filtered);
    });
});

// Size Filter
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSize = btn.dataset.size;
        
        const filtered = currentCategory === 'all' 
            ? menuData 
            : menuData.filter(item => item.category === currentCategory);
        renderMenuCards(filtered);
    });
});

// Initial render
renderMenuCards(menuData);

// ===== FAVORITES =====
function toggleFavorite(btn) {
    btn.classList.toggle('liked');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('liked')) {
        icon.className = 'fas fa-heart';
        showToast('Added to favorites! ❤️', 'success');
    } else {
        icon.className = 'far fa-heart';
        showToast('Removed from favorites', 'info');
    }
}

// ===== CART FUNCTIONALITY =====
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');

cartToggle.addEventListener('click', openCart);
cartOverlay.addEventListener('click', closeCart);
cartClose.addEventListener('click', closeCart);

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(c => c.id === itemId && c.size === currentSize);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            emoji: item.emoji,
            price: item.price[currentSize],
            size: currentSize,
            qty: 1
        });
    }
    
    updateCart();
    showToast(`${item.name} added to cart! 🛒`, 'success');
    
    // Bump animation on cart count
    const countEl = document.getElementById('cartCount');
    countEl.classList.add('bump');
    setTimeout(() => countEl.classList.remove('bump'), 300);
}

function addDealToCart(name, price) {
    const existing = cart.find(c => c.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: Date.now(),
            name: name,
            emoji: '🎁',
            price: price,
            size: 'deal',
            qty: 1
        });
    }
    updateCart();
    showToast(`${name} added to cart! 🎉`, 'success');
    
    const countEl = document.getElementById('cartCount');
    countEl.classList.add('bump');
    setTimeout(() => countEl.classList.remove('bump'), 300);
}

function updateCart() {
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartCount = document.getElementById('cartCount');
    
    const draftCartItems = document.getElementById('draftCartItems');
    const orderedCartItems = document.getElementById('orderedCartItems');
    const orderedSection = document.getElementById('orderedSection');
    const draftTitle = document.getElementById('draftTitle');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const payBillBtn = document.getElementById('payBillBtn');
    
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0 && orderedItems.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        draftTitle.style.display = 'none';
        orderedSection.style.display = 'none';
        draftCartItems.innerHTML = '';
        orderedCartItems.innerHTML = '';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    
    // Render Draft Cart Items
    if (cart.length > 0) {
        draftTitle.style.display = 'block';
        let draftHtml = '';
        cart.forEach((item, index) => {
            draftHtml += `
                <div class="cart-item">
                    <div class="cart-item-img">${item.emoji}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-detail">${item.size !== 'deal' ? item.size.charAt(0).toUpperCase() + item.size.slice(1) : 'Deal'}</div>
                        <div class="cart-item-actions">
                            <div class="qty-control">
                                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                                <span class="qty-num">${item.qty}</span>
                                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                            </div>
                            <span class="cart-item-price">₹${item.price * item.qty}</span>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
        draftCartItems.innerHTML = draftHtml;
        checkoutBtn.style.display = 'block';
    } else {
        draftTitle.style.display = 'none';
        draftCartItems.innerHTML = '';
        checkoutBtn.style.display = 'none';
    }
    
    // Render Placed KOT Items (Only show in Dine-in mode)
    if (orderedItems.length > 0 && orderMode === 'dinein') {
        orderedSection.style.display = 'block';
        let orderedHtml = '';
        orderedItems.forEach((item) => {
            orderedHtml += `
                <div class="cart-item" style="opacity: 0.85;">
                    <div class="cart-item-img">${item.emoji}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name} <span class="cart-item-status status-cooking"><i class="fas fa-fire-burner"></i> Cooking</span></div>
                        <div class="cart-item-detail">${item.size !== 'deal' ? item.size.charAt(0).toUpperCase() + item.size.slice(1) : 'Deal'}</div>
                        <div class="cart-item-actions">
                            <span class="qty-num" style="font-weight:600;">Qty: ${item.qty}</span>
                            <span class="cart-item-price">₹${item.price * item.qty}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        orderedCartItems.innerHTML = orderedHtml;
        payBillBtn.style.display = 'none';
    } else {
        orderedSection.style.display = 'none';
        orderedCartItems.innerHTML = '';
        payBillBtn.style.display = 'none';
    }
    
    // Update totals (Draft + Placed)
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0) + (orderMode === 'dinein' ? orderedItems.reduce((sum, item) => sum + item.price * item.qty, 0) : 0);
    const delivery = 0;
    const total = subtotal + delivery;
    
    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
    const deliveryFeeRow = document.getElementById('deliveryFeeRow');
    if (deliveryFeeRow) {
        if (orderMode === 'dinein') {
            deliveryFeeRow.style.display = 'none';
        } else {
            deliveryFeeRow.style.display = 'flex';
        }
    }
    document.getElementById('deliveryFee').textContent = 'FREE';
    const cartGstEl = document.getElementById('cartGst');
    if (cartGstEl) cartGstEl.textContent = `₹0`;
    document.getElementById('cartTotal').textContent = `₹${total}`;

    // Update checkout button text based on mode
    const deliveryAddressSection = document.getElementById('deliveryAddressSection');
    const paymentMethodSection = document.getElementById('paymentMethodSection');
    if (checkoutBtn) {
        if (orderMode === 'dinein') {
            checkoutBtn.innerHTML = `<i class="fas fa-fire"></i> Send KOT to Kitchen`;
            if (payBillBtn) payBillBtn.style.display = 'none';
            if (deliveryAddressSection) deliveryAddressSection.style.display = 'none';
            if (paymentMethodSection) paymentMethodSection.style.display = 'none';
        } else {
            checkoutBtn.innerHTML = `<i class="fas fa-motorcycle"></i> Place Delivery Order`;
            if (payBillBtn) payBillBtn.style.display = 'none';
            if (deliveryAddressSection) deliveryAddressSection.style.display = 'block';
            if (paymentMethodSection) paymentMethodSection.style.display = 'block';
        }
    }
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    const name = cart[index].name;
    cart.splice(index, 1);
    updateCart();
    showToast(`${name} removed from cart`, 'info');
}

// Coupon
document.getElementById('applyCoupon').addEventListener('click', () => {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    if (code === 'PAPA20' || code === 'PIZZA20') {
        showToast('Coupon applied! 20% discount added 🎉', 'success');
    } else if (code === '') {
        showToast('Please enter a coupon code', 'error');
    } else {
        showToast('Invalid coupon code. Try PAPA20 🍕', 'error');
    }
});

// Dine-In LocalStorage Syncer
const NTFY_TOPIC = 'lapapas_pizza_shivam713_sync';

function publishSyncEvent(key, value) {
    fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
        method: 'POST',
        headers: {
            'Title': 'Sync Event',
            'Tags': 'sync'
        },
        body: JSON.stringify({ key, value })
    }).catch(err => console.error("Sync error:", err));
}

function saveDineInState(status = 'active') {
    const userEmail = localStorage.getItem('userEmail') || '';
    let userPhone = localStorage.getItem('userPhone') || '';
    if (!userPhone && userEmail) {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const matched = registeredUsers.find(u => u.email.toLowerCase() === userEmail.toLowerCase());
        if (matched && matched.phone) {
            userPhone = matched.phone;
            localStorage.setItem('userPhone', userPhone);
        }
    }
    const userName = localStorage.getItem('userName') || '';

    const state = {
        table: tableNumber,
        orderedItems: orderedItems,
        status: status, // 'active' or 'billing'
        customerPhone: userPhone,
        customerName: userName,
        lastUpdated: Date.now()
    };
    const key = `table_order_${tableNumber}`;
    localStorage.setItem(key, JSON.stringify(state));
    publishSyncEvent(key, state);
}

// Checkout: Send KOT or Place Delivery Order
document.getElementById('checkoutBtn').addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        showToast('Please Login to place your order! 🔒', 'error');
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.add('active');
        }
        return;
    }

    if (cart.length === 0) return;
    
    if (orderMode === 'dinein') {
        kotsSent++;
        
        // Add all cart items to orderedItems
        cart.forEach(cartItem => {
            const existing = orderedItems.find(o => o.name === cartItem.name && o.size === cartItem.size);
            if (existing) {
                existing.qty += cartItem.qty;
            } else {
                orderedItems.push({ ...cartItem });
            }
        });
        
        showToast(`Round ${kotsSent} KOT sent to Kitchen! 🍳`, 'success');
        cart = [];
        saveDineInState('active'); // Save KOT to Waiter Dashboard
        updateCart();
    } else {
        // Home Delivery Order
        if (localStorage.getItem('deliveryServiceStatus') === 'closed') {
            showToast('Home delivery is currently closed! Please select Dine-in.', 'error');
            return;
        }
        const addrHouse = document.getElementById('addrHouse').value.trim();
        const addrBuilding = document.getElementById('addrBuilding').value.trim();
        const addrLandmark = document.getElementById('addrLandmark').value.trim();
        const receiverName = document.getElementById('receiverName').value.trim();
        const receiverPhone = document.getElementById('receiverPhone').value.trim();
        
        let label = 'Home';
        const activeLabelBtn = document.querySelector('.addr-label-btn.active');
        if (activeLabelBtn) {
            label = activeLabelBtn.textContent.trim();
        }
        
        if (!addrHouse) {
            showToast('Please enter House No. & Floor! 🏠', 'error');
            return;
        }
        if (!receiverName) {
            showToast('Please enter Receiver\'s Name! 👤', 'error');
            return;
        }
        if (!receiverPhone) {
            showToast('Please enter Receiver\'s Phone Number! 📞', 'error');
            return;
        }
        
        // Construct the full address string formatted premium
        const addressParts = [
            `[${label}] House/Floor: ${addrHouse}`,
            addrBuilding ? `Building: ${addrBuilding}` : '',
            addrLandmark ? `Landmark: ${addrLandmark}` : '',
            `Contact: ${receiverName} (+91-${receiverPhone})`
        ].filter(Boolean);
        
        const address = addressParts.join(', ');

        const deliveryOrderId = 'LP' + Math.floor(10000 + Math.random() * 90000);
        const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const orderData = {
            orderId: deliveryOrderId,
            items: [...cart],
            subtotal: cartSubtotal,
            address: address,
            paymentMethod: paymentMethod,
            status: 'confirmed',
            timestamp: Date.now()
        };
        
        // Save in localStorage for order tracking ID lookup
        try {
            const key = `delivery_order_${deliveryOrderId}`;
            localStorage.setItem(key, JSON.stringify(orderData));
            publishSyncEvent(key, orderData);
        } catch (e) {
            console.error("Local storage error:", e);
        }
        
        // Save to customer's order history
        saveCustomerOrderToHistory({
            orderId: deliveryOrderId,
            type: 'delivery',
            items: [...orderData.items],
            total: orderData.subtotal,
            timestamp: orderData.timestamp
        });
        
        // Show delivery confirmation modal
        showDeliverySuccessModal(deliveryOrderId, orderData);
        
        // Clear cart and address inputs
        cart = [];
        document.getElementById('addrHouse').value = '';
        document.getElementById('addrBuilding').value = '';
        document.getElementById('addrLandmark').value = '';
        document.getElementById('receiverName').value = '';
        document.getElementById('receiverPhone').value = '';
        setAddressLabel('Home');
        updateCart();
        closeCart();
    }
});

// Helper for Delivery Modal
function showDeliverySuccessModal(orderId, orderData) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'deliverySuccessModal';
    modal.style.zIndex = '4000';
    
    const subtotal = orderData.subtotal;
    const total = subtotal;
    
    // Dynamic payment description HTML
    let paymentDescHtml = '';
    if (orderData.paymentMethod === 'upi') {
        const upiId = '8826384238@paytm'; 
        const merchantName = 'La Papas Pizza';
        const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${total}&cu=INR&tn=Order%20${orderId}`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiUrl)}`;
        
        paymentDescHtml = `
            <div id="deliveryPaymentContainer" style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px; text-align: center;">
                <div id="upiPaymentSubcontainer">
                    <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 8px; font-size: 0.85rem;"><i class="fas fa-qrcode"></i> Scan QR to Pay via UPI</div>
                    <img src="${qrCodeUrl}" alt="UPI Payment QR" style="width: 150px; height: 150px; display: block; margin: 0 auto 10px; border-radius: 8px; border: 4px solid white;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 12px;">Please scan the QR code to make payment of <strong>₹${total}</strong>.</div>
                    
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 12px; margin-top: 10px;">
                        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 8px;">Payment failed or having issues?</div>
                        <button class="btn btn-secondary btn-sm" onclick="switchDeliveryOrderToCOD('${orderId}', this)" style="width: 100%; justify-content: center; font-size: 0.85rem; padding: 8px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-main);">
                            <i class="fas fa-money-bill-wave" style="color: #2ecc71;"></i> Pay via Cash on Delivery (COD)
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        paymentDescHtml = `
            <div id="deliveryPaymentContainer" style="background: rgba(255,184,0,0.05); border: 1px solid rgba(255,184,0,0.2); border-radius: var(--radius-md); padding: 12px; margin-bottom: 20px; text-align: left; display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 1.8rem; color: #f1c40f;"><i class="fas fa-money-bill-wave"></i></div>
                <div>
                    <div style="font-weight: 700; color: var(--text-primary); font-size: 0.85rem;">Cash on Delivery (COD)</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Please pay <strong>₹${total}</strong> to the delivery rider.</div>
                </div>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="modal-content" style="text-align: center; width: 90%; max-width: 450px; background: var(--bg-dark); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 32px 24px 24px 24px; max-height: 90vh; overflow-y: auto; position: relative;">
            <button onclick="closeDeliverySuccessModal(this, 'cancel', '${orderId}')" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: var(--text-secondary); font-size: 1.2rem; cursor: pointer; transition: color 0.2s; z-index: 10;"><i class="fas fa-times"></i></button>
            <div style="font-size: 3.5rem; color: #2ecc71; margin-bottom: 10px;">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2 class="gradient-text" style="font-size: 1.8rem; margin-bottom: 8px; font-weight:800;">Order Placed!</h2>
            <p style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.9rem;">Your home delivery order has been received and is being prepared.</p>
            
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 12px; border-radius: var(--radius-md); margin-bottom: 20px;">
                <span style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 2px; font-weight:600; letter-spacing:0.5px;">YOUR TRACKING ID</span>
                <strong style="font-size: 1.6rem; color: var(--primary); letter-spacing: 2px;">${orderId}</strong>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Use this ID in the "Track Order" section below to trace your delivery.</p>
            </div>

            ${paymentDescHtml}
            
            <div style="text-align: left; margin-bottom: 20px; font-size: 0.95rem;">
                <div style="font-weight: 700; margin-bottom: 4px; color: var(--text-primary); font-size: 0.85rem;">Delivery Address:</div>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(orderData.address)}" target="_blank" style="color: #3498db; text-decoration: underline; margin-bottom: 12px; font-style: italic; background: rgba(0,0,0,0.15); padding: 8px 12px; border-radius: var(--radius-sm); border-left: 3px solid var(--primary); word-break: break-word; font-size: 0.85rem; display: block;"><i class="fas fa-map-marker-alt"></i> ${orderData.address}</a>
                
                <div style="font-weight: 700; margin-bottom: 8px; color: var(--text-primary); font-size: 0.85rem;">Order Summary:</div>
                <div style="max-height: 100px; overflow-y: auto; margin-bottom: 8px; font-size: 0.85rem;">
                    ${orderData.items.map(item => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px; color: var(--text-secondary);">
                            <span>${item.name} (${item.size.charAt(0).toUpperCase() + item.size.slice(1)}) x ${item.qty}</span>
                            <span>₹${item.price * item.qty}</span>
                        </div>
                    `).join('')}
                </div>
                <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 8px 0;">
                <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--text-primary); font-size: 0.9rem;">
                    <span>Total Amount (incl. tax & delivery)</span>
                    <span>₹${total}</span>
                </div>
            </div>
            
            <button class="btn-primary btn-full btn-lg" onclick="closeDeliverySuccessModal(this, 'confirm', '${orderId}')">
                Awesome, Got It!
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

window.closeDeliverySuccessModal = function(btn, action, orderId) {
    const modal = btn.closest('.modal-overlay');
    if (modal) {
        if (action === 'cancel' && orderId) {
            if (confirm("Are you sure you want to cancel this order?")) {
                const stored = localStorage.getItem('delivery_order_' + orderId);
                if (stored) {
                    const orderData = JSON.parse(stored);
                    // Restore cart items
                    cart = orderData.items || [];
                    // Remove from storage
                    const key = 'delivery_order_' + orderId;
                    localStorage.removeItem(key);
                    publishSyncEvent(key, null);
                    
                    showToast('Order cancelled. Items returned to cart.', 'info');
                    updateCart();
                    
                    // Open the cart sidebar again so they can edit
                    const cartSidebar = document.getElementById('cartSidebar');
                    if (cartSidebar) {
                        cartSidebar.classList.add('active');
                        const cartOverlay = document.getElementById('cartOverlay');
                        if (cartOverlay) cartOverlay.classList.add('active');
                    }
                }
            } else {
                // If they clicked "No" in confirm dialog, do not close the modal
                return;
            }
        } else {
            // Scroll to the tracker section automatically when confirmed
            const trackerSection = document.getElementById('tracker');
            if (trackerSection) {
                trackerSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Order Mode Selection Events
const modeDineInBtn = document.getElementById('modeDineInBtn');
const modeDeliveryBtn = document.getElementById('modeDeliveryBtn');

if (modeDineInBtn && modeDeliveryBtn) {
    modeDineInBtn.addEventListener('click', () => {
        if (!tableNumber) {
            showToast('Please scan the QR code on your table to use Dine-in ordering!', 'error');
            return;
        }
        orderMode = 'dinein';
        modeDineInBtn.classList.add('active');
        modeDeliveryBtn.classList.remove('active');
        const cartTableInfo = document.getElementById('cartTableInfo');
        if (cartTableInfo) {
            cartTableInfo.textContent = `Table ${tableNumber}`;
        }
        updateCart();
    });
    
    modeDeliveryBtn.addEventListener('click', () => {
        if (localStorage.getItem('deliveryServiceStatus') === 'closed') {
            showToast('Home delivery is currently closed! Please select Dine-in.', 'error');
            return;
        }
        orderMode = 'delivery';
        modeDeliveryBtn.classList.add('active');
        modeDineInBtn.classList.remove('active');
        const cartTableInfo = document.getElementById('cartTableInfo');
        if (cartTableInfo) {
            cartTableInfo.textContent = 'Home Delivery';
        }
        updateCart();
    });
}

// Payment Method Selection Events
const payCashBtn = document.getElementById('payCashBtn');
const payUpiBtn = document.getElementById('payUpiBtn');

if (payCashBtn && payUpiBtn) {
    payCashBtn.addEventListener('click', () => {
        paymentMethod = 'cash';
        payCashBtn.classList.add('active');
        payUpiBtn.classList.remove('active');
    });
    
    payUpiBtn.addEventListener('click', () => {
        paymentMethod = 'upi';
        payUpiBtn.classList.add('active');
        payCashBtn.classList.remove('active');
    });
}

// Placed Bill Settlement (Pay Bill) & Receipt Modal Handling
const receiptModal = document.getElementById('receiptModal');
const receiptModalClose = document.getElementById('receiptModalClose');
const closeReceiptBtn = document.getElementById('closeReceiptBtn');
const payBillBtn = document.getElementById('payBillBtn');

if (payBillBtn) {
    payBillBtn.addEventListener('click', () => {
        if (orderedItems.length === 0) return;
        
        // Populate receipt
        const receiptItemsList = document.getElementById('receiptItemsList');
        let receiptHtml = '';
        orderedItems.forEach(item => {
            receiptHtml += `
                <div class="receipt-item-row">
                    <span>${item.name} (${item.size.charAt(0).toUpperCase() + item.size.slice(1)}) x ${item.qty}</span>
                    <span>₹${item.price * item.qty}</span>
                </div>
            `;
        });
        receiptItemsList.innerHTML = receiptHtml;
        
        // Calculate totals
        const subtotal = orderedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        const total = subtotal;
        
        document.getElementById('receiptSubtotal').textContent = `₹${subtotal}`;
        const receiptGstEl = document.getElementById('receiptGst');
        if (receiptGstEl) receiptGstEl.textContent = `₹0`;
        document.getElementById('receiptTotal').textContent = `₹${total}`;
        
        // Generate dynamic UPI payment payload
        const upiId = '8826384238@paytm'; 
        const merchantName = 'La Papas Pizza';
        const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${total}&cu=INR&tn=Table%20${tableNumber}`;
        
        // Generate QR code pointing to the UPI payload URL
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
        document.getElementById('upiQrImg').src = qrCodeUrl;
        
        // Generate UPI app options links
        const upiParams = `pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${total}&cu=INR&tn=Table%20${tableNumber}`;
        document.getElementById('linkGPay').href = `upi://pay?${upiParams}`;
        document.getElementById('linkPhonePe').href = `phonepe://pay?${upiParams}`;
        document.getElementById('linkPaytm').href = `paytmmp://pay?${upiParams}`;
        document.getElementById('linkDefaultUpi').href = `upi://pay?${upiParams}`;

        // Reset display of selection list when modal is opened
        const upiAppOptions = document.getElementById('upiAppOptions');
        if (upiAppOptions) upiAppOptions.style.display = 'none';

        // Date details
        const dateEl = document.getElementById('billDate');
        if (dateEl) {
            const today = new Date();
            dateEl.textContent = today.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }) + ' ' + today.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        }
        
        saveDineInState('billing'); // Alert dashboard that table requested the bill
        receiptModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeCart();
    });
}

if (receiptModalClose) {
    receiptModalClose.addEventListener('click', () => {
        receiptModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (closeReceiptBtn) {
    closeReceiptBtn.addEventListener('click', () => {
        receiptModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Save to customer's order history
        const total = orderedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        const orderId = 'DI' + tableNumber + '-' + Math.floor(1000 + Math.random() * 9000);
        saveCustomerOrderToHistory({
            orderId: orderId,
            type: 'dinein',
            items: [...orderedItems],
            total: total,
            timestamp: Date.now()
        });

        const key = `table_order_${tableNumber}`;
        localStorage.removeItem(key); // Clear local storage (table vacant)
        publishSyncEvent(key, null);
        orderedItems = [];
        kotsSent = 0;
        updateCart();
        showToast('Bill settled! Thank you for dining with us! 🙏🍕', 'success');
    });
}

if (receiptModal) {
    receiptModal.addEventListener('click', (e) => {
        if (e.target === receiptModal) {
            receiptModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Toggle UPI App Options list and perform desktop warning checks
const upiPayLink = document.getElementById('upiPayLink');
const upiAppOptions = document.getElementById('upiAppOptions');
if (upiPayLink && upiAppOptions) {
    upiPayLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (upiAppOptions.style.display === 'none') {
            upiAppOptions.style.display = 'flex';
            // Scroll to view the options on smaller screens
            setTimeout(() => {
                upiAppOptions.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        } else {
            upiAppOptions.style.display = 'none';
        }
    });
}

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
document.querySelectorAll('.upi-app-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!isMobileDevice) {
            e.preventDefault();
            alert("UPI Apps are only supported on mobile devices. Please scan the QR code above using your mobile phone's scanner to pay.");
        }
    });
});

// Real-time Storage Listener to sync from dashboard (e.g. Waiter serving items or settling the bill)
window.addEventListener('storage', (e) => {
    if (e.key === `table_order_${tableNumber}`) {
        if (!e.newValue) {
            // Settle action triggered on Dashboard
            orderedItems = [];
            kotsSent = 0;
            cart = [];
            updateCart();
            showToast('Table has been settled by waitstaff! Thank you! 🍕', 'success');
        } else {
            const parsed = JSON.parse(e.newValue);
            orderedItems = parsed.orderedItems || [];
            updateCart();
        }
    }
});

// ===== CUSTOM PIZZA =====
const toppingPricing = {
    capsicum: { small: 30, medium: 55, large: 80 },
    onion: { small: 30, medium: 55, large: 80 },
    tomato: { small: 30, medium: 55, large: 80 },
    corn: { small: 30, medium: 55, large: 80 },
    mushroom: { small: 35, medium: 60, large: 90 },
    paneer: { small: 35, medium: 60, large: 90 },
    olive: { small: 35, medium: 60, large: 90 },
    jalapeno: { small: 35, medium: 60, large: 90 },
    chicken: { small: 55, medium: 85, large: 100 },
    "bbq-chicken": { small: 55, medium: 85, large: 100 },
    pepperoni: { small: 55, medium: 85, large: 100 },
    "extra-cheese": { small: 60, medium: 90, large: 120 }
};

const crustPricing = {
    "hand-tossed": { small: 0, medium: 0, large: 0 },
    "thin-crust": { small: 30, medium: 30, large: 30 },
    "cheese-burst": { small: 80, medium: 120, large: 180 },
    "stuffed": { small: 100, medium: 100, large: 100 }
};

function updateToppingsAndCrustPricing() {
    const sizeInput = document.querySelector('input[name="customSize"]:checked');
    if (!sizeInput) return;
    const size = sizeInput.value; // 'small', 'medium', or 'large'

    // Update crust pricing in DOM
    document.querySelectorAll('input[name="customCrust"]').forEach(input => {
        const crust = input.value;
        const price = crustPricing[crust] ? crustPricing[crust][size] : 0;
        input.setAttribute('data-price', price);
        
        // Find the price display span next to it
        const priceSpan = input.closest('.option-card').querySelector('.option-price');
        if (priceSpan) {
            priceSpan.textContent = price === 0 ? 'Free' : `+₹${price}`;
        }
    });

    // Update toppings pricing in DOM
    document.querySelectorAll('input[name="toppings"]').forEach(input => {
        const topping = input.value;
        const price = toppingPricing[topping] ? toppingPricing[topping][size] : 0;
        input.setAttribute('data-price', price);
        
        // Find the price display span next to it
        const priceSpan = input.closest('.topping-card').querySelector('.topping-content span:last-child');
        if (priceSpan) {
            priceSpan.textContent = `+₹${price}`;
        }
    });
}

function updateCustomPrice() {
    updateToppingsAndCrustPricing();

    let total = 0;
    const sizeInput = document.querySelector('input[name="customSize"]:checked');
    if (sizeInput) total += parseInt(sizeInput.getAttribute('data-price') || sizeInput.dataset.price);
    
    const crustInput = document.querySelector('input[name="customCrust"]:checked');
    if (crustInput) total += parseInt(crustInput.getAttribute('data-price') || crustInput.dataset.price);
    
    document.querySelectorAll('input[name="toppings"]:checked').forEach(t => {
        total += parseInt(t.getAttribute('data-price') || t.dataset.price);
    });
    
    document.getElementById('customTotal').textContent = `₹${total}`;
    return total;
}

document.querySelectorAll('input[name="customSize"], input[name="customCrust"], input[name="toppings"]').forEach(input => {
    input.addEventListener('change', updateCustomPrice);
});

// Call initially to initialize default prices
setTimeout(updateCustomPrice, 100);

document.getElementById('addCustomPizza').addEventListener('click', () => {
    const price = updateCustomPrice();
    const size = document.querySelector('input[name="customSize"]:checked').value;
    const crust = document.querySelector('input[name="customCrust"]:checked').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(t => t.value);
    
    cart.push({
        id: Date.now(),
        name: `Custom Pizza (${crust})`,
        emoji: '🎨',
        price: price,
        size: size,
        qty: 1
    });
    
    updateCart();
    openCart();
    showToast('Your custom pizza has been added! 🍕', 'success');
});

// ===== ORDER TRACKER =====
document.getElementById('trackOrderBtn').addEventListener('click', () => {
    const orderId = document.getElementById('orderIdInput').value.trim();
    const result = document.getElementById('trackerResult');
    
    if (!orderId) {
        showToast('Please enter an Order ID', 'error');
        return;
    }
    
    // Check if the order exists in localStorage
    const savedOrderStr = localStorage.getItem(`delivery_order_${orderId}`);
    
    result.style.display = 'block';
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    if (savedOrderStr) {
        const orderData = JSON.parse(savedOrderStr);
        showToast(`Order ${orderId} found!`, 'success');
        
        // Dynamically add a summary of their tracked order above the tracker steps
        let trackerItemsContainer = document.getElementById('trackerItemsContainer');
        if (!trackerItemsContainer) {
            trackerItemsContainer = document.createElement('div');
            trackerItemsContainer.id = 'trackerItemsContainer';
            trackerItemsContainer.style.background = 'rgba(255,255,255,0.03)';
            trackerItemsContainer.style.border = '1px solid var(--border-color)';
            trackerItemsContainer.style.padding = '16px';
            trackerItemsContainer.style.borderRadius = 'var(--radius-md)';
            trackerItemsContainer.style.marginBottom = '25px';
            result.insertBefore(trackerItemsContainer, result.firstChild);
        }
        
        const total = orderData.subtotal;
        const paymentLabel = orderData.paymentMethod === 'upi' ? '<i class="fas fa-mobile-alt"></i> Paid Online' : '<i class="fas fa-money-bill-wave"></i> Cash on Delivery (COD)';
        
        trackerItemsContainer.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-weight: 700; color: var(--primary);">ORDER ID: ${orderId}</span>
                <span style="font-size: 0.85rem; color: var(--text-muted);">Placed: ${new Date(orderData.timestamp).toLocaleTimeString()}</span>
            </div>
            <div style="font-size: 0.85rem; margin-bottom: 8px; padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); border-left: 3px solid #2ecc71; color: var(--text-primary); font-weight:600;">
                Payment: ${paymentLabel}
            </div>
            <div style="font-size: 0.85rem; margin-bottom: 12px; padding: 8px 12px; background: rgba(0,0,0,0.15); border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">
                <strong style="display:block; font-size:0.75rem; color: var(--text-muted); margin-bottom:2px;">DELIVERY ADDRESS (Click to view Map):</strong>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(orderData.address)}" target="_blank" style="font-style:italic; color: #3498db; text-decoration: underline; display: block; word-break: break-all;"><i class="fas fa-map-marker-alt"></i> ${orderData.address}</a>
            </div>
            <div style="font-size: 0.9rem; margin-bottom: 8px;">
                ${orderData.items.map(item => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px; color: var(--text-secondary);">
                        <span>${item.name} (${item.size.charAt(0).toUpperCase() + item.size.slice(1)}) x ${item.qty}</span>
                        <span>₹${item.price * item.qty}</span>
                    </div>
                `).join('')}
            </div>
            <hr style="border:0; border-top: 1px solid var(--border-color); margin: 8px 0;">
            <div style="display: flex; justify-content: space-between; font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">
                <span>Total Paid</span>
                <span>₹${total}</span>
            </div>
        `;
        
        // Highlight active tracking steps dynamically based on current status
        const steps = document.querySelectorAll('.tracker-steps .tracker-step');
        const statusMap = {
            'confirmed': 1,
            'preparing': 2,
            'baking': 3,
            'outfordelivery': 4,
            'delivered': 5
        };
        const currentStatusIndex = statusMap[orderData.status || 'confirmed'] || 1;
        
        steps.forEach((step, idx) => {
            step.classList.remove('completed', 'active');
            if (idx < currentStatusIndex - 1) {
                step.classList.add('completed');
            } else if (idx === currentStatusIndex - 1) {
                if (currentStatusIndex === 5) {
                    step.classList.add('completed'); // Set last step completed if delivered
                } else {
                    step.classList.add('active');
                }
            }
        });
    } else {
        // If it's a mock ID, run the default demo behavior
        showToast('Tracking demo order...', 'info');
        const trackerItemsContainer = document.getElementById('trackerItemsContainer');
        if (trackerItemsContainer) trackerItemsContainer.remove();
    }
});

// ===== REVIEWS CAROUSEL =====
function renderReviews() {
    const track = document.getElementById('reviewsTrack');
    track.innerHTML = reviewsData.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${review.initial}</div>
                <div>
                    <div class="review-name">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
            <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p class="review-text">"${review.text}"</p>
            <span class="review-order">🍕 ${review.order}</span>
        </div>
    `).join('');
}

renderReviews();

const reviewsTrack = document.getElementById('reviewsTrack');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');

reviewNext.addEventListener('click', () => {
    reviewSlide++;
    const maxSlide = reviewsData.length - 3;
    if (reviewSlide > maxSlide) reviewSlide = 0;
    updateCarousel();
});

reviewPrev.addEventListener('click', () => {
    reviewSlide--;
    if (reviewSlide < 0) reviewSlide = reviewsData.length - 3;
    updateCarousel();
});

function updateCarousel() {
    const cardWidth = 374; // card width + gap
    reviewsTrack.style.transform = `translateX(-${reviewSlide * cardWidth}px)`;
}

// Auto-slide reviews
setInterval(() => {
    reviewSlide++;
    const maxSlide = reviewsData.length - 3;
    if (reviewSlide > maxSlide) reviewSlide = 0;
    updateCarousel();
}, 5000);

// ===== STAR RATING (Feedback Form) =====
const starRating = document.getElementById('starRating');
starRating.querySelectorAll('i').forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.rating);
        starRating.querySelectorAll('i').forEach(s => {
            const r = parseInt(s.dataset.rating);
            if (r <= selectedRating) {
                s.className = 'fas fa-star active';
            } else {
                s.className = 'far fa-star';
            }
        });
    });
    
    star.addEventListener('mouseenter', () => {
        const hoverRating = parseInt(star.dataset.rating);
        starRating.querySelectorAll('i').forEach(s => {
            const r = parseInt(s.dataset.rating);
            if (r <= hoverRating) {
                s.className = 'fas fa-star active';
            } else {
                s.className = 'far fa-star';
            }
        });
    });
});

starRating.addEventListener('mouseleave', () => {
    starRating.querySelectorAll('i').forEach(s => {
        const r = parseInt(s.dataset.rating);
        if (r <= selectedRating) {
            s.className = 'fas fa-star active';
        } else {
            s.className = 'far fa-star';
        }
    });
});

// ===== FORM SUBMISSIONS =====
document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (selectedRating === 0) {
        showToast('Please select a star rating', 'error');
        return;
    }
    
    const nameVal = document.getElementById('reviewName').value.trim();
    const textVal = document.getElementById('reviewText').value.trim();
    
    // Calculate initials
    let initialVal = 'C';
    if (nameVal) {
        const parts = nameVal.split(/\s+/);
        if (parts.length === 1) {
            initialVal = parts[0].substring(0, 2).toUpperCase();
        } else {
            initialVal = (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
        }
    }
    
    // Get ordered items from checked tags
    const checkedTags = [];
    e.target.querySelectorAll('.tag input:checked').forEach(input => {
        checkedTags.push(input.value);
    });
    const orderString = checkedTags.length > 0 ? checkedTags.join(', ') : 'Pizza';
    
    const newReview = {
        name: nameVal,
        initial: initialVal,
        rating: selectedRating,
        text: textVal,
        date: 'Today',
        order: orderString
    };
    
    reviewsData.unshift(newReview);
    localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
    
    renderReviews();
    
    // Reset slide position to 0 to show the new review immediately
    if (typeof reviewSlide !== 'undefined') {
        reviewSlide = 0;
        updateCarousel();
    }
    
    showToast('Thank you for your review! ⭐', 'success');
    e.target.reset();
    
    // Reset stars
    selectedRating = 0;
    starRating.querySelectorAll('i').forEach(s => s.className = 'far fa-star');
    
    // Re-fill name and email if logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        const reviewNameInput = document.getElementById('reviewName');
        const reviewEmailInput = document.getElementById('reviewEmail');
        if (reviewNameInput) reviewNameInput.value = localStorage.getItem('userName') || '';
        if (reviewEmailInput) reviewEmailInput.value = localStorage.getItem('userEmail') || '';
    }
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();
    
    const newMessage = {
        name: name,
        phone: phone,
        email: email,
        subject: subject || 'other',
        message: message,
        timestamp: Date.now()
    };
    
    let contactMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contactMessages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
    publishSyncEvent('contactMessages', contactMessages);
    
    showToast('Message sent successfully! We\'ll get back to you soon 📧', 'success');
    e.target.reset();
});



// ===== USER PERSISTENCE & SESSION MANAGEMENT =====
// Pre-populate registeredUsers if empty, with a default test account
(function initDefaultUser() {
    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const testEmail = 'shivampoddar2004@gmail.com';
    const hasTestUser = registeredUsers.some(u => u.email.toLowerCase() === testEmail.toLowerCase());
    
    if (!hasTestUser) {
        registeredUsers.push({
            name: 'Shivam Poddar',
            email: testEmail,
            phone: '9876543210',
            password: 'password123'
        });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }
})();

function getNameFromEmail(email) {
    if (!email) return 'Customer';
    if (/^\d+$/.test(email.trim())) {
        return 'Customer';
    }
    const namePart = email.split('@')[0];
    let cleanName = namePart.replace(/[0-9._-]+/g, ' ').trim();
    if (!cleanName) return 'Customer';
    return cleanName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function updateLoginUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userName = localStorage.getItem('userName') || 'Customer';
    const userEmail = localStorage.getItem('userEmail') || '';
    
    const loginBtn = document.getElementById('loginBtn');
    const dropdown = document.getElementById('userProfileDropdown');
    const dropdownName = document.getElementById('userDropdownName');
    const dropdownEmail = document.getElementById('userDropdownEmail');
    const dropdownAvatar = document.getElementById('userDropdownAvatar');
    
    const reviewNameInput = document.getElementById('reviewName');
    const reviewEmailInput = document.getElementById('reviewEmail');
    
    if (!loginBtn) return;
    
    if (isLoggedIn) {
        loginBtn.innerHTML = `<i class="fas fa-user-circle"></i> <span id="loginBtnText">${userName}</span> <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 4px;"></i>`;
        loginBtn.style.padding = '10px 16px';
        
        if (dropdownName) dropdownName.textContent = userName;
        if (dropdownEmail) dropdownEmail.textContent = userEmail;
        if (dropdownAvatar) {
            dropdownAvatar.textContent = userName.charAt(0).toUpperCase();
        }
        
        if (reviewNameInput) reviewNameInput.value = userName;
        if (reviewEmailInput) reviewEmailInput.value = userEmail;
        
        const receiverNameInput = document.getElementById('receiverName');
        const receiverPhoneInput = document.getElementById('receiverPhone');
        if (receiverNameInput && !receiverNameInput.value) {
            receiverNameInput.value = userName;
        }
        if (receiverPhoneInput && !receiverPhoneInput.value) {
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const currentUser = registeredUsers.find(u => u.email.toLowerCase() === userEmail.toLowerCase());
            if (currentUser && currentUser.phone) {
                receiverPhoneInput.value = currentUser.phone;
            }
        }
    } else {
        loginBtn.innerHTML = `<i class="fas fa-user"></i> <span id="loginBtnText">Login</span>`;
        loginBtn.style.padding = '10px 24px';
        if (dropdown) dropdown.classList.remove('active');
        
        if (reviewNameInput) reviewNameInput.value = '';
        if (reviewEmailInput) reviewEmailInput.value = '';
        
        const receiverNameInput = document.getElementById('receiverName');
        const receiverPhoneInput = document.getElementById('receiverPhone');
        if (receiverNameInput) receiverNameInput.value = '';
        if (receiverPhoneInput) receiverPhoneInput.value = '';
    }
}

// ===== LOGIN MODAL =====
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginModalClose = document.getElementById('loginModalClose');

loginBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        const dropdown = document.getElementById('userProfileDropdown');
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    } else {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        showToast('Logged out successfully! 👋', 'info');
        updateLoginUI();
    });
}

// Close profile dropdown when clicking outside
document.addEventListener('click', (e) => {
    const container = document.getElementById('userProfileContainer');
    const dropdown = document.getElementById('userProfileDropdown');
    if (container && dropdown && !container.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Initialize Login UI state on load
updateLoginUI();

loginModalClose.addEventListener('click', () => {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
});

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Modal Tabs
document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab + 'Tab').classList.add('active');
    });
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = document.getElementById('loginEmail').value.trim();
    const passwordVal = document.getElementById('loginPassword').value;
    
    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = registeredUsers.find(u => u.email.toLowerCase() === emailVal.toLowerCase() || u.phone === emailVal);
    
    if (user) {
        if (user.password === passwordVal) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', user.name);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userPhone', user.phone || '');
            
            showToast(`Welcome back, ${user.name}! 👋`, 'success');
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
            updateLoginUI();
            e.target.reset();
        } else {
            showToast('Incorrect password! ❌', 'error');
        }
    } else {
        showToast('Account not found! Please Sign Up first. ❌', 'error');
    }
});

const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameVal = document.getElementById('adminEmail').value.trim();
        const passwordVal = document.getElementById('adminPassword').value;
        
        let adminUsers = JSON.parse(localStorage.getItem('adminUsers') || '[]');
        const matchingAdmin = adminUsers.find(u => u.email.toLowerCase() === usernameVal.toLowerCase() || u.phone === usernameVal);
        
        if ((usernameVal === 'admin' && passwordVal === 'admin') || (matchingAdmin && matchingAdmin.password === passwordVal)) {
            localStorage.setItem('isAdminLoggedIn', 'true');
            const adminName = matchingAdmin ? matchingAdmin.name : 'System Admin';
            localStorage.setItem('activeAdminName', adminName);
            showToast('Admin access granted! Redirecting to Dashboard... 🔑', 'success');
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {
            showToast('Invalid Admin credentials! ❌', 'error');
        }
    });
}

// Redirect Dashboard nav link to Admin login if not authenticated
const navDashboardLink = document.getElementById('navDashboardLink');
if (navDashboardLink) {
    navDashboardLink.addEventListener('click', (e) => {
        const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        if (!isAdminLoggedIn) {
            e.preventDefault();
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                // Switch tabs to Admin Login
                document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                const adminTabBtn = document.querySelector('[data-tab="adminLogin"]');
                if (adminTabBtn) adminTabBtn.classList.add('active');
                
                const adminTabContent = document.getElementById('adminLoginTab');
                if (adminTabContent) adminTabContent.classList.add('active');
            }
        }
    });
}

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('signupName').value.trim();
    const emailVal = document.getElementById('signupEmail').value.trim();
    const phoneVal = document.getElementById('signupPhone').value.trim();
    const passwordVal = document.getElementById('signupPassword').value;
    
    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const emailExists = registeredUsers.some(u => u.email.toLowerCase() === emailVal.toLowerCase());
    
    if (emailExists) {
        showToast('Email already registered! Please Login. ❌', 'error');
        return;
    }
    
    registeredUsers.push({
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        password: passwordVal
    });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    publishSyncEvent('registeredUsers', registeredUsers);
    
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', nameVal);
    localStorage.setItem('userEmail', emailVal);
    localStorage.setItem('userPhone', phoneVal);
    
    showToast(`Welcome, ${nameVal}! Account created successfully! 🎉`, 'success');
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
    updateLoginUI();
    e.target.reset();
});

// ===== SOCIAL LOGIN =====
// ===== SOCIAL LOGIN =====
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('google')) {
            handleGoogleLogin();
            return;
        }

        let platform = 'Google';
        let defaultName = 'Google User';
        let defaultEmail = 'google.user@gmail.com';
        
        if (btn.classList.contains('facebook')) {
            platform = 'Facebook';
            defaultName = 'Facebook User';
            defaultEmail = 'facebook.user@fb.com';
        } else if (btn.classList.contains('apple')) {
            platform = 'Apple';
            defaultName = 'Apple User';
            defaultEmail = 'apple.user@icloud.com';
        }

        showToast(`Connecting to ${platform}... 🔄`, 'info');
        
        // Disable buttons during mock authentication loading
        document.querySelectorAll('.social-btn').forEach(b => b.disabled = true);
        
        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', defaultName);
            localStorage.setItem('userEmail', defaultEmail);
            
            showToast(`Logged in successfully via ${platform}! 👋`, 'success');
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
            updateLoginUI();
            
            // Re-enable buttons
            document.querySelectorAll('.social-btn').forEach(b => b.disabled = false);
        }, 1500);
    });
});

// ===== GOOGLE IDENTITY SERVICES INTEGRATION =====
function handleGoogleLogin() {
    const googleClientId = localStorage.getItem('googleClientId');
    const isLocalFile = window.location.protocol === 'file:';

    if (!googleClientId || isLocalFile) {
        // Fallback: Run simulated Google Login popup
        runSimulatedGoogleLogin();
        return;
    }

    try {
        showToast('Connecting to Google... 🔄', 'info');
        const tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: googleClientId,
            scope: 'openid profile email',
            callback: (tokenResponse) => {
                if (tokenResponse && tokenResponse.access_token) {
                    fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`)
                        .then(res => {
                            if (!res.ok) throw new Error("Failed to fetch user details");
                            return res.json();
                        })
                        .then(userInfo => {
                            const name = userInfo.name || 'Google User';
                            const email = userInfo.email || 'google.user@gmail.com';
                            
                            localStorage.setItem('isLoggedIn', 'true');
                            localStorage.setItem('userName', name);
                            localStorage.setItem('userEmail', email);
                            
                            showToast(`Welcome ${name}! Logged in via Google! 🎉`, 'success');
                            const loginModal = document.getElementById('loginModal');
                            if (loginModal) loginModal.classList.remove('active');
                            document.body.style.overflow = '';
                            updateLoginUI();
                        })
                        .catch(err => {
                            console.error(err);
                            showToast('Error getting Google user details. Simulating login...', 'warning');
                            runSimulatedGoogleLogin();
                        });
                } else {
                    showToast('Google authentication cancelled.', 'warning');
                }
            },
            error_callback: (err) => {
                console.error(err);
                showToast('Google OAuth initialization error. Simulating login...', 'warning');
                runSimulatedGoogleLogin();
            }
        });
        
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (e) {
        console.error("Google Auth error:", e);
        runSimulatedGoogleLogin();
    }
}

function runSimulatedGoogleLogin() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '100000';
    modal.id = 'googleSimModal';

    const cleanOrigin = window.location.protocol === 'file:' ? 'Local HTML File' : window.location.origin;

    modal.innerHTML = `
        <div style="background: white; color: #3c4043; border-radius: 8px; width: 420px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); padding: 30px; font-family: 'Roboto', 'Google Sans', Arial, sans-serif; text-align: center; position: relative;">
            <button id="closeGoogleSim" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 20px; color: #aaa; cursor: pointer; line-height: 1;">&times;</button>
            
            <svg viewBox="0 0 24 24" width="24" height="24" style="margin: 0 auto 16px; display: block;">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            
            <h3 style="font-size: 22px; font-weight: 400; margin-bottom: 8px; color: #202124;">Sign in with Google</h3>
            <p style="font-size: 14px; color: #5f6368; margin-bottom: 24px;">to continue to <strong style="color: #202124;">La Papa's Pizza</strong></p>
            
            <div style="font-size: 11px; color: #5f6368; background: #f1f3f4; border-radius: 4px; padding: 10px; margin-bottom: 20px; line-height: 1.4; text-align: left; border-left: 3px solid #1a73e8;">
                ℹ️ <strong>Sandbox Mode:</strong> Since you are running from a local file (${cleanOrigin}), a simulated Google popup is shown. To use real Google Login, set your Google Client ID in the Live Dashboard settings.
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; text-align: left;">
                <div class="google-acc-opt" data-name="Shivam Gupta" data-email="shivam.gupta@gmail.com" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border: 1px solid #dadce0; border-radius: 6px; cursor: pointer; transition: background 0.2s;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">S</div>
                    <div>
                        <div style="font-size: 13px; font-weight: 500; color: #3c4043;">Shivam Gupta</div>
                        <div style="font-size: 11px; color: #5f6368;">shivam.gupta@gmail.com</div>
                    </div>
                </div>
                <div class="google-acc-opt" data-name="Priya Sharma" data-email="priya.sharma@gmail.com" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border: 1px solid #dadce0; border-radius: 6px; cursor: pointer; transition: background 0.2s;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #e91e63; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">P</div>
                    <div>
                        <div style="font-size: 13px; font-weight: 500; color: #3c4043;">Priya Sharma</div>
                        <div style="font-size: 11px; color: #5f6368;">priya.sharma@gmail.com</div>
                    </div>
                </div>
            </div>

            <div style="margin: 15px 0; color: #dadce0; font-size: 12px; display: flex; align-items: center; gap: 10px; justify-content: center;">
                <hr style="width: 35%; border: none; border-top: 1px solid #dadce0;"> or <hr style="width: 35%; border: none; border-top: 1px solid #dadce0;">
            </div>

            <div style="text-align: left; display: flex; flex-direction: column; gap: 8px;">
                <input type="text" id="gSimName" placeholder="Enter Full Name" style="padding: 10px 14px; border: 1px solid #dadce0; border-radius: 4px; font-size: 13px; width: 100%; box-sizing: border-box;">
                <input type="email" id="gSimEmail" placeholder="Enter Google Email" style="padding: 10px 14px; border: 1px solid #dadce0; border-radius: 4px; font-size: 13px; width: 100%; box-sizing: border-box;">
                <button id="gSimSubmit" style="margin-top: 10px; background: #1a73e8; color: white; border: none; padding: 12px; border-radius: 4px; font-size: 13px; font-weight: 500; cursor: pointer; transition: background 0.2s;">Use this Google Account</button>
            </div>
        </div>
    </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('closeGoogleSim').onclick = () => {
        modal.remove();
        showToast('Google Sign-In cancelled.', 'warning');
    };

    const options = modal.querySelectorAll('.google-acc-opt');
    options.forEach(opt => {
        opt.onmouseenter = () => opt.style.backgroundColor = '#f7f8f8';
        opt.onmouseleave = () => opt.style.backgroundColor = 'transparent';
        opt.onclick = () => {
            const name = opt.getAttribute('data-name');
            const email = opt.getAttribute('data-email');
            completeGoogleLogin(name, email);
        };
    });

    const submitBtn = document.getElementById('gSimSubmit');
    submitBtn.onmouseenter = () => submitBtn.style.backgroundColor = '#1557b0';
    submitBtn.onmouseleave = () => submitBtn.style.backgroundColor = '#1a73e8';
    submitBtn.onclick = () => {
        const nameVal = document.getElementById('gSimName').value.trim();
        const emailVal = document.getElementById('gSimEmail').value.trim();
        
        if (!nameVal || !emailVal) {
            alert("Please fill in both Name and Email to simulate Google account creation.");
            return;
        }
        completeGoogleLogin(nameVal, emailVal);
    };

    function completeGoogleLogin(name, email) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Signing in...`;
        
        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            
            modal.remove();
            showToast(`Logged in successfully with Google account: ${email}! 👋`, 'success');
            
            const loginModal = document.getElementById('loginModal');
            if (loginModal) loginModal.classList.remove('active');
            document.body.style.overflow = '';
            updateLoginUI();
        }, 1000);
    }
}

// ===== PASSWORD VISIBILITY TOGGLE =====
document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = btn.closest('.password-input-wrapper').querySelector('input');
        const icon = btn.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'far fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'far fa-eye';
        }
    });
});

// ===== FORGOT PASSWORD =====
document.querySelectorAll('.forgot-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const emailOrPhone = prompt('Enter your registered Email or Phone number to retrieve your password:');
        if (emailOrPhone === null) return; // user cancelled
        
        const trimmed = emailOrPhone.trim();
        if (!trimmed) {
            showToast('Please enter a valid email or phone number! ❌', 'error');
            return;
        }
        
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const user = registeredUsers.find(u => u.email.toLowerCase() === trimmed.toLowerCase() || u.phone === trimmed);
        
        if (user) {
            showToast(`Password found! Check your screen. 🔑`, 'success');
            alert(`Forgot Password (Mock):\nWe found your account!\n\nName: ${user.name}\nPassword: ${user.password}\n\n(In production, a recovery email would be sent)`);
        } else {
            showToast('Account not found with this email/phone! ❌', 'error');
        }
    });
});

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', info: 'fas fa-info-circle' };
    toast.innerHTML = `<i class="${icons[type]}"></i> ${message}`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== DEAL TIMER =====
function updateDealTimers() {
    const timerElements = document.querySelectorAll('.deal-timer');
    timerElements.forEach(timer => {
        const hours = parseInt(timer.dataset.hours) || 5;
        const now = new Date();
        const end = new Date(now);
        end.setHours(end.getHours() + hours);
        
        const diff = end - now;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        
        const timerText = timer.querySelector('.timer-text');
        if (timerText) {
            timerText.textContent = `Ends in ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
    });
}

setInterval(updateDealTimers, 1000);

// ===== SMOOTH SCROLL FOR ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.deal-card, .about-feature, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// ===== RATING BARS ANIMATION =====
const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = width; }, 200);
            });
            barsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const overallRating = document.querySelector('.overall-rating');
if (overallRating) barsObserver.observe(overallRating);

console.log('🍕 La Papa\'s Pizza - Ready to serve!');

// ===== DYNAMIC CAMPAIGN & DEALS TEXT LOAD =====
function loadCampaignText() {
    const badgeEl = document.getElementById('dealBadge');
    const titleEl = document.getElementById('dealTitle');
    const subtitleEl = document.getElementById('dealSubtitle');

    if (badgeEl) {
        badgeEl.innerHTML = localStorage.getItem('dealBadge') || '🔥 Hot Deals';
    }
    if (titleEl) {
        const prefix = localStorage.getItem('dealTitlePrefix') || "Today's";
        const highlight = localStorage.getItem('dealTitleHighlight') || "Special Offers";
        titleEl.innerHTML = `${prefix} <span class="gradient-text">${highlight}</span>`;
    }
    if (subtitleEl) {
        subtitleEl.textContent = localStorage.getItem('dealSubtitle') || "Grab these amazing deals before they're gone!";
    }
}

// Call on startup
loadCampaignText();

// Listen to localStorage changes (if open in multiple tabs)
window.addEventListener('storage', (e) => {
    if (e.key === 'dealUpdated' || e.key === 'dealBadge' || e.key === 'dealTitlePrefix' || e.key === 'dealTitleHighlight' || e.key === 'dealSubtitle') {
        loadCampaignText();
    }
});

// ===== GOOGLE ONE TAP AND SIMULATED FALLBACK =====
function initGoogleOneTap() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) return; // Already logged in

    const googleClientId = localStorage.getItem('googleClientId');
    const isLocalFile = window.location.protocol === 'file:';

    if (!googleClientId || isLocalFile) {
        // Show simulated One Tap prompt after 2 seconds
        setTimeout(() => {
            showSimulatedOneTap();
        }, 2000);
        return;
    }

    // Real Google One Tap
    try {
        google.accounts.id.initialize({
            client_id: googleClientId,
            callback: (response) => {
                if (response.credential) {
                    // Parse JWT token manually to extract user info (client-side decode)
                    const base64Url = response.credential.split('.')[1];
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));

                    const userInfo = JSON.parse(jsonPayload);
                    const name = userInfo.name || 'Google User';
                    const email = userInfo.email || 'google.user@gmail.com';

                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);

                    showToast(`Logged in automatically as ${name}! 🚀`, 'success');
                    updateLoginUI();
                }
            },
            auto_select: true
        });
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                console.log("One Tap not displayed or skipped:", notification.getMomentType());
                // Fallback to simulation
                showSimulatedOneTap();
            }
        });
    } catch (e) {
        console.error("Google One Tap error:", e);
        showSimulatedOneTap();
    }
}

function showSimulatedOneTap() {
    if (sessionStorage.getItem('oneTapDismissed') === 'true' || localStorage.getItem('isLoggedIn') === 'true') return;

    const prompt = document.createElement('div');
    prompt.id = 'googleOneTapPrompt';
    prompt.style.position = 'fixed';
    prompt.style.top = '90px';
    prompt.style.right = '20px';
    prompt.style.width = '350px';
    prompt.style.backgroundColor = 'white';
    prompt.style.color = '#3c4043';
    prompt.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)';
    prompt.style.borderRadius = '8px';
    prompt.style.padding = '16px';
    prompt.style.fontFamily = 'Roboto, "Google Sans", Arial, sans-serif';
    prompt.style.zIndex = '9999';
    prompt.style.border = '1px solid #dadce0';
    prompt.style.animation = 'slideInOneTap 0.3s ease-out';
    prompt.style.textAlign = 'left';

    if (!document.getElementById('oneTapStyles')) {
        const style = document.createElement('style');
        style.id = 'oneTapStyles';
        style.innerHTML = `
            @keyframes slideInOneTap {
                from { transform: translateX(110%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .onetap-btn:hover { background-color: #1557b0 !important; }
            .onetap-close:hover { background-color: #f1f3f4 !important; }
        `;
        document.head.appendChild(style);
    }

    const mockGoogleName = "Shivam Gupta";
    const mockGoogleEmail = "shivam.gupta@gmail.com";

    prompt.innerHTML = `
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <svg viewBox="0 0 24 24" width="18" height="18" style="display: block;">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span style="font-size: 13px; font-weight: 500; color: #202124;">Sign in to La Papa's Pizza</span>
            </div>
            <button class="onetap-close" id="closeOneTap" style="border: none; background: none; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #5f6368; cursor: pointer; transition: background 0.2s;">&times;</button>
        </div>
        
        <p style="font-size: 11px; color: #5f6368; margin-bottom: 16px; line-height: 1.4;">Use your Google Account (Gmail) logged in this browser to sign in instantly.</p>
        
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px;">S</div>
            <div style="flex: 1; overflow: hidden; text-overflow: ellipsis;">
                <div style="font-size: 13px; font-weight: 500; color: #3c4043;">${mockGoogleName}</div>
                <div style="font-size: 11px; color: #5f6368; overflow: hidden; text-overflow: ellipsis;">${mockGoogleEmail}</div>
            </div>
        </div>

        <button class="onetap-btn" id="oneTapConfirmBtn" style="width: 100%; border: none; background-color: #1a73e8; color: white; padding: 10px; border-radius: 4px; font-size: 13px; font-weight: 500; cursor: pointer; transition: background 0.2s;">
            Continue as Shivam
        </button>
        
        <p style="font-size: 9px; color: #5f6368; margin-top: 10px; line-height: 1.3; text-align: center;">
            To check out fast, Google will share your profile name and email address with this app.
        </p>
    `;

    document.body.appendChild(prompt);

    document.getElementById('closeOneTap').onclick = () => {
        prompt.remove();
        sessionStorage.setItem('oneTapDismissed', 'true');
    };

    document.getElementById('oneTapConfirmBtn').onclick = () => {
        document.getElementById('oneTapConfirmBtn').disabled = true;
        document.getElementById('oneTapConfirmBtn').textContent = 'Signing in...';

        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', mockGoogleName);
            localStorage.setItem('userEmail', mockGoogleEmail);

            prompt.remove();
            showToast(`Logged in automatically with Google account: ${mockGoogleEmail}! 🚀`, 'success');
            updateLoginUI();
        }, 1200);
    };
}

// ===== DYNAMIC DEALS RENDERING =====
function renderDeals() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid) return;
    
    // Get deals from storage or fallback to defaults
    let deals = JSON.parse(localStorage.getItem('customDeals'));
    if (!deals || !Array.isArray(deals) || deals.length === 0) {
        deals = [
            {
                id: 1,
                title: "Mega Deal",
                description: "2 Large Pizzas + Garlic Bread",
                badge: "50% OFF",
                oldPrice: 1299,
                newPrice: 649,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
                timerHours: 5
            },
            {
                id: 2,
                title: "Buy 1 Get 1 Free",
                description: "Any Medium Pizza - Get second absolutely free!",
                badge: "BOGO",
                oldPrice: 798,
                newPrice: 399,
                image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=300&q=80",
                timerHours: null
            },
            {
                id: 3,
                title: "Combo Feast",
                description: "1 Large Pizza + Garlic Bread",
                badge: "20% OFF",
                oldPrice: 600,
                newPrice: 449,
                image: "https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=300&q=80",
                timerHours: null
            },
            {
                id: 4,
                title: "Party Pack",
                description: "4 Pizzas + 2 Garlic Breads - Perfect for parties!",
                badge: "NEW",
                oldPrice: 1600,
                newPrice: 1199,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
                timerHours: null
            }
        ];
        localStorage.setItem('customDeals', JSON.stringify(deals));
    }
    
    dealsGrid.innerHTML = '';
    
    deals.forEach((deal, idx) => {
        const card = document.createElement('div');
        card.className = `deal-card${idx === 0 ? ' deal-featured' : ''}`;
        card.setAttribute('data-aos', 'fade-up');
        if (idx > 0) card.setAttribute('data-aos-delay', idx * 100);
        
        let badgeHtml = deal.badge ? `<div class="deal-badge">${deal.badge}</div>` : '';
        let oldPriceHtml = deal.oldPrice ? `<span class="old-price">₹${deal.oldPrice}</span>` : '';
        let timerHtml = deal.timerHours ? `
            <div class="deal-timer" data-hours="${deal.timerHours}">
                <i class="fas fa-clock"></i> <span class="timer-text">Ends in ${String(deal.timerHours).padStart(2, '0')}:00:00</span>
            </div>
        ` : '';
        
        card.innerHTML = `
            ${badgeHtml}
            <div class="deal-img"><img src="${deal.image}" alt="${deal.title}"></div>
            <div class="deal-content">
                <h3>${deal.title}</h3>
                <p>${deal.description}</p>
                <div class="deal-price">
                    ${oldPriceHtml}
                    <span class="new-price">₹${deal.newPrice}</span>
                </div>
                <button class="btn-primary" onclick="addDealToCart('${deal.title.replace(/'/g, "\\'")}', ${deal.newPrice})">
                    <i class="fas fa-cart-plus"></i> Grab Deal
                </button>
            </div>
            ${timerHtml}
        `;
        
        dealsGrid.appendChild(card);
    });
    
    // Trigger timer updates immediately
    if (typeof updateDealTimers === 'function') {
        updateDealTimers();
    }
}

// Call renderDeals on load
renderDeals();

// Listen for updates from other tabs (e.g. from the dashboard.html save operation)
window.addEventListener('storage', (e) => {
    if (e.key === 'dealUpdated' || e.key === 'customDeals') {
        renderDeals();
    }
});

window.setAddressLabel = function(label) {
    document.querySelectorAll('.addr-label-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(label.toLowerCase()));
    });
};

window.triggerSocialLogin = function(provider) {
    if (provider === 'Apple') {
        // Show simulated Apple ID native prompt first
        const appleOverlay = document.createElement('div');
        appleOverlay.className = 'user-modal-overlay';
        appleOverlay.id = 'appleIdPromptOverlay';
        appleOverlay.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center; backdrop-filter: blur(5px);';
        
        appleOverlay.innerHTML = `
            <div class="modal-content" style="width: 90%; max-width: 360px; background: #111113; border: 1px solid rgba(255, 77, 0, 0.35); border-radius: 14px; padding: 24px; text-align: center; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; box-shadow: 0 15px 40px rgba(255, 77, 0, 0.18), 0 0 20px rgba(255, 77, 0, 0.05);">
                <div style="font-size: 2.8rem; color: var(--primary); margin-bottom: 15px; text-shadow: 0 0 15px rgba(255, 77, 0, 0.35);">
                    <i class="fab fa-apple"></i>
                </div>
                <h3 style="font-weight: 700; margin-bottom: 5px; font-size: 1.25rem; color: #ffffff; letter-spacing: 0.2px;">Sign in with Apple ID</h3>
                <p style="color: #a0a0a5; font-size: 0.85rem; margin-bottom: 25px; line-height: 1.4;">Do you want to sign in to Papa's Pizza with your Apple ID <strong>apple.user@icloud.com</strong>?</p>
                
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button id="appleContinueBtn" class="btn" style="background: var(--gradient-primary); color: #ffffff; border: none; padding: 12px; border-radius: 8px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 100%; box-shadow: 0 4px 12px rgba(255, 77, 0, 0.3); transition: transform 0.2s, opacity 0.2s;">
                        Continue
                    </button>
                    <button id="appleCancelBtn" class="btn" style="background: transparent; color: #ff8a00; border: none; padding: 10px; font-weight: 600; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 100%; transition: color 0.2s;">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(appleOverlay);
        document.body.style.overflow = 'hidden';
        
        document.getElementById('appleContinueBtn').onclick = () => {
            appleOverlay.remove();
            proceedSocialLogin('Apple');
        };
        
        document.getElementById('appleCancelBtn').onclick = () => {
            appleOverlay.remove();
            document.body.style.overflow = '';
            showToast('Sign in with Apple was cancelled. ❌', 'info');
        };
        
        return;
    }
    
    // For Google & Facebook, proceed directly to spinner
    proceedSocialLogin(provider);
};

window.proceedSocialLogin = function(provider) {
    // 1. Show a loading state modal overlay with active cancel action button
    const overlay = document.createElement('div');
    overlay.className = 'user-modal-overlay';
    overlay.id = 'socialLoginLoadingOverlay';
    overlay.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center; backdrop-filter: blur(5px);';
    
    let iconClass = 'fab fa-google';
    let providerColor = '#ea4335';
    if (provider === 'Facebook') { iconClass = 'fab fa-facebook-f'; providerColor = '#1877f2'; }
    if (provider === 'Apple') { iconClass = 'fab fa-apple'; providerColor = '#ffffff'; }
    
    overlay.innerHTML = `
        <div style="text-align: center; color: var(--text-primary); position: relative;">
            <div style="font-size: 3rem; margin-bottom: 20px; color: ${providerColor}; display: inline-block; animation: fa-spin 2s infinite linear;">
                <i class="${iconClass}"></i>
            </div>
            <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1.2rem; font-family: inherit;">Connecting to ${provider}...</h3>
            <p style="color: var(--text-secondary); font-size: 0.85rem; font-family: inherit; margin-bottom: 20px;">Please authorize the login request in the popup window.</p>
            <button id="cancelSocialSpinnerBtn" class="btn-outline btn-sm" style="border-color: rgba(255,255,255,0.2); color: var(--text-secondary); padding: 6px 16px; font-size: 0.75rem; border-radius: 20px; background: transparent; cursor: pointer; transition: all 0.2s;">Cancel</button>
        </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    const loginTimeout = setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = '';
        
        const mockName = `${provider} User`;
        const mockEmail = `${provider.toLowerCase()}.user@example.com`;
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', mockName);
        localStorage.setItem('userEmail', mockEmail);
        
        // Hide login modal
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.remove('active');
        }
        
        if (typeof updateLoginUI === 'function') {
            updateLoginUI();
        }
        
        showToast(`Successfully logged in via ${provider}! 🔑`, 'success');
    }, 1800);
    
    document.getElementById('cancelSocialSpinnerBtn').onclick = () => {
        clearTimeout(loginTimeout);
        overlay.remove();
        document.body.style.overflow = '';
        showToast(`Sign in with ${provider} was cancelled. ❌`, 'info');
    };
}

// ===== REAL-TIME MULTI-DEVICE SYNC =====
function initRemoteSync() {
    const eventSource = new EventSource('https://ntfy.sh/lapapas_pizza_shivam713_sync/sse');
    eventSource.onmessage = (event) => {
        try {
            const ntfyData = JSON.parse(event.data);
            if (ntfyData.event === 'message') {
                const payload = JSON.parse(ntfyData.message);
                if (payload.key) {
                    if (payload.value === null) {
                        localStorage.removeItem(payload.key);
                    } else {
                        localStorage.setItem(payload.key, JSON.stringify(payload.value));
                    }
                    
                    if (payload.key === 'requestActiveState') {
                        // Rebroadcast table state if customer has active items on their table
                        if (typeof orderedItems !== 'undefined' && orderedItems.length > 0) {
                            saveDineInState(localStorage.getItem(`table_order_${tableNumber}`) ? JSON.parse(localStorage.getItem(`table_order_${tableNumber}`)).status : 'active');
                        }
                    }
                    
                    // Sync active table data if it's the customer's table
                    if (payload.key === `table_order_${tableNumber}`) {
                        if (payload.value === null) {
                            orderedItems = [];
                            kotsSent = 0;
                            cart = [];
                            updateCart();
                            showToast('Table has been settled by waitstaff! Thank you! 🍕', 'success');
                        } else {
                            orderedItems = payload.value.orderedItems || [];
                            updateCart();
                        }
                    }
                    
                    // Sync tracker if user is currently tracking this delivery order
                    const orderIdInput = document.getElementById('orderIdInput');
                    if (orderIdInput && payload.key === `delivery_order_${orderIdInput.value.trim()}`) {
                        const trackBtn = document.getElementById('trackOrderBtn');
                        if (trackBtn) trackBtn.click();
                    }
                    
                    // Sync campaign headings if changed
                    if (payload.key === 'menuData') {
                        menuData = payload.value || [];
                        renderMenuCards(menuData);
                    }
                    if (payload.key === 'dealUpdated') {
                        loadCampaignText();
                    }
                }
            }
        } catch (e) {
            console.error("Error parsing sync event:", e);
        }
    };
    eventSource.onerror = (e) => {
        console.warn("Sync stream disconnected, reconnecting...", e);
    };
}
initRemoteSync();

// ===== CUSTOMER ORDER HISTORY CONTROLLERS =====
function saveCustomerOrderToHistory(orderData) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');
    if (!isLoggedIn || !userEmail) return;

    const historyKey = `customer_order_history_${userEmail.toLowerCase()}`;
    const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
    
    // Avoid duplicating orders by ID
    if (history.some(h => h.orderId === orderData.orderId)) return;

    history.push({
        orderId: orderData.orderId,
        type: orderData.type, // 'dinein' or 'delivery'
        items: orderData.items, // array of {name, size, qty, price}
        total: orderData.total,
        timestamp: orderData.timestamp || Date.now()
    });

    localStorage.setItem(historyKey, JSON.stringify(history));
}

function openOrderHistoryModal(event) {
    if (event) event.preventDefault();

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        showToast('Please Login to view your order history! 🔒', 'error');
        const loginModal = document.getElementById('loginModal');
        if (loginModal) loginModal.classList.add('active');
        return;
    }

    const userEmail = localStorage.getItem('userEmail');
    const historyKey = `customer_order_history_${userEmail.toLowerCase()}`;
    const history = JSON.parse(localStorage.getItem(historyKey) || '[]');

    const contentContainer = document.getElementById('customerOrderHistoryContent');
    if (!contentContainer) return;
    contentContainer.innerHTML = '';

    // Sort by newest first
    history.sort((a, b) => b.timestamp - a.timestamp);

    if (history.length === 0) {
        contentContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-secondary); padding: 40px 10px; font-family: var(--font-main);">
                <i class="fas fa-history" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px; display: block;"></i>
                <p style="font-weight: 500;">You haven't placed any orders yet.</p>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Pizzas you order will appear here! 🍕</p>
            </div>
        `;
    } else {
        history.forEach(order => {
            const dateStr = new Date(order.timestamp).toLocaleString('en-IN', {
                day: '2-digit', month: 'short', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });
            
            let itemsDetailsHtml = '';
            order.items.forEach(item => {
                itemsDetailsHtml += `
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 2px;">
                        <span>${item.name} (${item.size.charAt(0).toUpperCase() + item.size.slice(1)}) x ${item.qty}</span>
                        <span>₹${item.price * item.qty}</span>
                    </div>
                `;
            });

            const orderTypeLabel = order.type === 'dinein' ? 
                `<span style="background: rgba(46, 204, 113, 0.15); color: #2ecc71; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">Dine-In</span>` :
                `<span style="background: rgba(52, 152, 219, 0.15); color: #3498db; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">Home Delivery</span>`;

            const orderCard = document.createElement('div');
            orderCard.style.cssText = "background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 15px; display: flex; flex-direction: column; gap: 8px; font-family: var(--font-main); text-align: left;";
            orderCard.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 4px;">
                    <div>
                        <span style="font-weight: 700; color: var(--text-primary); font-size: 0.9rem; margin-right: 8px;">Order #${order.orderId}</span>
                        ${orderTypeLabel}
                    </div>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${dateStr}</span>
                </div>
                <div style="padding: 4px 0;">
                    ${itemsDetailsHtml}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 8px; margin-top: 4px; font-weight: 700; color: var(--secondary); font-size: 0.95rem;">
                    <span>Total Paid</span>
                    <span>₹${order.total}</span>
                </div>
            `;
            contentContainer.appendChild(orderCard);
        });
    }

    // Hide mobile menu if open
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }

    document.getElementById('orderHistoryModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeOrderHistoryModal() {
    document.getElementById('orderHistoryModal').style.display = 'none';
    document.body.style.overflow = '';
}

window.switchDeliveryOrderToCOD = function(orderId, btn) {
    const key = `delivery_order_${orderId}`;
    const stored = localStorage.getItem(key);
    if (!stored) return;
    
    const orderData = JSON.parse(stored);
    orderData.paymentMethod = 'cod';
    
    // Save and Sync
    localStorage.setItem(key, JSON.stringify(orderData));
    publishSyncEvent(key, orderData);
    
    // Switch the UI in the modal
    const paymentContainer = document.getElementById('deliveryPaymentContainer');
    if (paymentContainer) {
        paymentContainer.style.background = 'rgba(255,184,0,0.05)';
        paymentContainer.style.borderColor = 'rgba(255,184,0,0.2)';
        paymentContainer.style.padding = '12px';
        paymentContainer.innerHTML = `
            <div style="text-align: left; display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 1.8rem; color: #f1c40f;"><i class="fas fa-money-bill-wave"></i></div>
                <div>
                    <div style="font-weight: 700; color: var(--text-primary); font-size: 0.85rem;">Cash on Delivery (COD)</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Payment method switched! Please pay <strong>₹${orderData.subtotal}</strong> to the delivery rider.</div>
                </div>
            </div>
        `;
    }
    
    showToast('Payment method switched to Cash on Delivery! 💵', 'success');
}
