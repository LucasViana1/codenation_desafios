const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];
const data = require("./data/products.json");
// const { products } = data;

function getShoppingCart(ids, productsList) {
  let productsFound = [];
  let products = [];
  productsList.forEach((item) => {
    if (ids.indexOf(item.id) !== -1) {
      productsFound.push(item);
    }
  });

  const promotion = verifyPromotions(productsFound, promotions);
  const priceAndDiscount = getPriceAndDiscount(promotion, productsFound);
  const { totalPrice, discountValue, discount } = priceAndDiscount;

  productsFound.forEach((item) => {
    products.push({
      name: item.name,
      category: item.category,
    });
  });

  return {
    products,
    promotion,
    totalPrice,
    discountValue,
    discount,
  };
}

const verifyPromotions = (productsFound, promotions) => {
  // T-SHIRTS, PANTS, SHOES, BAGS
  let allCategories = [];
  let promotionSearch = "";

  for (let i = 0; i < productsFound.length; i++) {
    switch (productsFound[i].category) {
      case "T-SHIRTS":
        allCategories.push("T-SHIRTS");
        break;
      case "PANTS":
        allCategories.push("PANTS");
        break;
      case "SHOES":
        allCategories.push("SHOES");
        break;
      case "BAGS":
        allCategories.push("BAGS");
        break;
    }
  }

  let categories = allCategories.filter(function (that, i) {
    return allCategories.indexOf(that) === i;
  });

  if (categories.length === 4) {
    promotionSearch = promotions[3];
  } else if (categories.length === 3) {
    promotionSearch = promotions[2];
  } else if (categories.length === 2) {
    promotionSearch = promotions[1];
  } else if (categories.length === 1) {
    promotionSearch = promotions[0];
  }

  return promotionSearch;
};

const getPriceAndDiscount = (promotionFound, productsFound) => {
  let totalPrice = 0;
  let discountValue = 0;
  let discount = null;
  for (let i in productsFound) {
    let normalPrice = productsFound[i].regularPrice;
    let promotionPrice = false;
    productsFound[i].promotions.forEach((item) => {
      if (item.looks.indexOf(promotionFound) !== -1) {
        promotionPrice = true;
        totalPrice += item.price;
        discountValue += normalPrice - item.price;
      }
    });
    if (!promotionPrice) {
      totalPrice += normalPrice;
    }
  }
  discount = (discountValue * 100) / (totalPrice + discountValue);
  discount = discount.toFixed(2) + "%";
  discountValue = discountValue.toFixed(2);
  totalPrice = totalPrice.toFixed(2);

  return {
    totalPrice,
    discountValue,
    discount,
  };
};

// getShoppingCart([110, 130, 140, 230, 310, 330], products);

module.exports = { getShoppingCart };
