const images = [
    {
        id: "Lobster Mac N Cheese",
        priceAmount: 23.99,
        src: "./assets/menu-item1.webp",
        alt: "picture of lobster and mac n cheese",
        description: "A luxurious bowl of golden, creamy mac and cheese, folded with tender pasta and generously topped with buttery chunks of fresh lobster."
    },
    {
        id: "Grass-Fed Wagyu Steak Burger",
        priceAmount: 32.99,
        src: "./assets/menu-item2.webp",
        alt: "picture of a steak burger",
        description: "A perfectly seared, Wagyu beef patty stacked with melted aged cheddar, caramelized onions, fresh greens, and vine-ripened tomatoes, all embraced by a glossy, toasted brioche bun."
    },
    {
        id: "Eyeball Shrimp Pasta",
        priceAmount: 26.99,
        src: "./assets/menu-item3.webp",
        alt: "picture of shrimp and pasta",
        description: "Al dente linguine swirled in a luscious garlic butter cream sauce, crowned with plump, golden-seared shrimp."
    },
    {
        id: "Texas Hot Chicken",
        priceAmount: 17.99,
        src: "./assets/menu-item4.webp",
        alt: "picture of spicy chicken",
        description: "Crispy, golden fried chicken coated in a fiery, sticky hot glaze that clings to every crevice."
    },
    {
        id: "Count of Monte Cristo",
        priceAmount: 29.99,
        src: "./assets/menu-item5.webp",
        alt: "picture of a sandwhich",
        description: "Thick-cut layers of ham, turkey, and Swiss cheese encased in crispy, golden-fried bread, lightly dusted with powdered sugar."
    }
];

let index = 0;

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const imageElement = document.getElementById("carouselImage");
const titleElement = document.getElementById("carouselTitle");
const descElement = document.getElementById("carouselDescription");
const priceElement = document.getElementById("carouselPrice");

function updateCarousel() {
    const item = images[index];
    imageElement.src = item.src;
    imageElement.alt = item.alt;
    titleElement.textContent = `${item.id}`
    priceElement.textContent = currencyFormatter.format(item.priceAmount);
    descElement.textContent = item.description;
}

updateCarousel();

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

