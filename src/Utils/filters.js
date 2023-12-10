// filters.js
export const applyFilters = (products, filters) => {
    return products
        .filter(product => {
            if (filters.type !== "all" && product.type.toLowerCase() !== filters.type.toLowerCase()) {
                return false;
            }

            return true;
        })
        .sort((a, b) => {

            const typeComparison = a.type.localeCompare(b.type);

            if (typeComparison !== 0) {
                return typeComparison;
            }

            if (filters.price === "from-expensive") {
                return b.price - a.price; 
            } else if (filters.price === "from-cheap") {
                return a.price - b.price; 
            }

            return 0;
        });
};
