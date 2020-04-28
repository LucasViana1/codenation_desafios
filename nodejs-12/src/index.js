const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];
const data = require("./data/products.json");
const { products } = data;

function getShoppingCart(ids, productsList) {
  let productsFound = [];
  productsList.forEach((item) => {
    if (ids.indexOf(item.id) !== -1) {
      productsFound.push(item);
    }
  });

  const promotionFound = verifyPromotions(productsFound);
  //   console.log(promotionFound);
  //   console.log(productsFound);
  // function ini
  let totalPrice = 0;
  let discountValue = 0;
  let discount = "0%";
  if (promotionFound === "SINGLE LOOK") {
    for (let i in productsFound) {
      let normalPrice = productsFound[i].regularPrice;
      let promotionPrice = false;
      //   console.log(productsFound[i]);
      productsFound[i].promotions.forEach((item) => {
        if (item.looks.indexOf("SINGLE LOOK") !== -1) {
          promotionPrice = true;
          totalPrice += item.price;
          // descontos
          discountValue += normalPrice - item.price;
          // CALCULAR DESCONTO EM PORCENTAGEM
        }
      });
      if (!promotionPrice) {
        totalPrice += normalPrice;
      }
    }
  }
  console.log("totalPrice");
  console.log(totalPrice);
  console.log("discountValue");
  console.log(discountValue);
  // function fim

  return {};
}

const verifyPromotions = (productsFound) => {
  // T-SHIRTS, PANTS, SHOES, BAGS
  let allCategories = [];
  let promotion = "";

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
    promotion = "FULL LOOK";
  } else if (categories.length === 3) {
    promotion = "TRIPLE LOOK";
  } else if (categories.length === 2) {
    promotion = "DOUBLE LOOK";
  } else if (categories.length === 1) {
    promotion = "SINGLE LOOK";
  }

  //   console.log(allCategories);
  //   console.log(categories);
  return promotion;
};

getShoppingCart([110, 120, 130, 140], products);

module.exports = { getShoppingCart };
