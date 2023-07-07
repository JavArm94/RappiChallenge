export const maxRangeValue = (array, key) => {
  let maxValue = 0;

  const roundToNextMultiple = (number, steps) => {
    const multiple = Math.ceil(number / steps);
    const roundedNumber = multiple * steps;
    return { roundedNumber, steps };
  };

  if (key === "price") {
    array.map((item) => {
      let tempValue = parseInt(item[key].substring(1).replace(",", ""));
      if (tempValue > maxValue) {
        maxValue = tempValue;
      }
    });
    roundToNextMultiple(maxValue, 10);
  }
  array.map((item) => {
    if (item[key] > maxValue) {
      maxValue = item[key];
    }
  });

  return roundToNextMultiple(maxValue, 10);
};

export const calculateTotalAmount = (cart) => {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};

export const calculateTotalItems = (cart) => {
  return cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
};

export const formatSearchInput = (input) => {
  return input.trim().split(" ").join(" ");
};

export const todayDate = () => {
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();

  var formattedDate =
    year +
    "-" +
    month.toString().padStart(2, "0") +
    "-" +
    day.toString().padStart(2, "0");

  return formattedDate;
};
