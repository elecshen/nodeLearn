export const input =
  "https://raw.githubusercontent.com/jakiichu/data/main/data.json";

export async function FetchData(url) {
  let result = [];
  const data = await (await fetch(url)).json();
  const { address, person, productsOrder } = data;

  result.push(
    "Город: " +
      address.city +
      " Улица: " +
      address.street +
      " Дом: " +
      address.house,
  );
  result.push(
    person.lastName +
      " " +
      person.firstName +
      " купил " +
      productsOrder.count +
      " штук товаров " +
      productsOrder.product.name,
  );

  return result.join("\n");
}
