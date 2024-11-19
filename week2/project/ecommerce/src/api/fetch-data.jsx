const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching categories:", error);
    return "error";
  }
};

const fetchProducts = async (category) => {
  try {
    if (category) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error fetching products:", error);
    return "error";
  }
};

const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching product by id:", error);
    return "error";
  }
};

export { fetchCategories, fetchProducts, fetchProductById };
