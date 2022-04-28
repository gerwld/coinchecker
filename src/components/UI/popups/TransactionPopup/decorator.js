import createDecorator from "final-form-calculate";

export const calc = createDecorator(
  {
    field: "price",
    updates: {
      usdAmount: (curr, all) => {
        if (curr && all.amount) {
          return curr * (isNaN(parseInt(all.amount)) ? 0 : all.amount);
        }
      },
    },
  },
  {
    field: "amount",
    updates: {
      usdAmount: (curr, all) => {
        if (curr && all.amount) {
          return curr * (isNaN(parseInt(all.price)) ? 0 : all.price);
        }
      },
    },
  }
);
