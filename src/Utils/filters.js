// filters.js
export const applyFilters = (products, filters) => {
    return products
        .filter(product => {
            // Логіка фільтрації за типом (ігноруючи регістр)
            if (filters.type !== "all" && product.type.toLowerCase() !== filters.type.toLowerCase()) {
                return false;
            }

            // Логіка фільтрації за іншими параметрами (зберігаємо всі елементи, поки що)
            return true;
        })
        .sort((a, b) => {
            // Спочатку сортуємо за типом (в алфавітному порядку)
            const typeComparison = a.type.localeCompare(b.type);

            if (typeComparison !== 0) {
                return typeComparison;
            }

            // Потім сортуємо за ціною
            if (filters.price === "from-expensive") {
                return b.price - a.price; // Від дорогих до дешевих
            } else if (filters.price === "from-cheap") {
                return a.price - b.price; // Від дешевих до дорогих
            }

            return 0;
        });
};
