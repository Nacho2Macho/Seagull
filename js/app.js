function activeCards(activeCard = 0) {
    const cards = document.querySelectorAll(".assortment__filters-item");
    cards[activeCard].classList.add("active");
    for (const card of cards) {
        card.addEventListener("click", () => {
            clearActiveCards();
            card.classList.add("active");
        })
    }

    function clearActiveCards() {
        cards.forEach((card) => {
            card.classList.remove("active")
        })
    }

}
activeCards(0)

const showMore = document.querySelector(".assortment__more");
const productsLenght = document.querySelectorAll(".card-list").length
let items = 3;

showMore.addEventListener("click", () => {
    items += 3;
    const array = Array.from(document.querySelector(".assortment__list").children);
    const visItems = array.slice(0, items);
    visItems.forEach(el => el.classList.add("is-visible"))

    if (visItems.length === productsLenght) {
        showMore.style.display = "none"
    }
})

const ratingItemsList = document.querySelectorAll(".card-list__item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener("click", () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    }))



function activeNumbers(activeNumber = 0) {
    const numbers = document.querySelectorAll(".assortment__pagination-numb");
    numbers[activeNumber].classList.add("active");
    for (const number of numbers) {
        number.addEventListener("click", () => {
            clearActiveCards();
            number.classList.add("active");
        })
    }

    function clearActiveCards() {
        numbers.forEach((number) => {
            number.classList.remove("active")
        })
    }

}
activeNumbers(0)