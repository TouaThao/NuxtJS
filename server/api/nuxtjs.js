export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=tVcQKY2caizoHPpKkJZwBzB9sUoKPoxWrAY1PFy8"
  );

  return data;
});

// tVcQKY2caizoHPpKkJZwBzB9sUoKPoxWrAY1PFy8

// https://api.currencyapi.com/v3/latest?apikey=tVcQKY2caizoHPpKkJZwBzB9sUoKPoxWrAY1PFy8
