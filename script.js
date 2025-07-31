function orderCoffee(type, pricePerCup) {
  const name = prompt("Enter your name:");
  const age = parseInt(prompt("Enter your age:"));
  const quantity = parseInt(prompt(`How many cups of ${type}?`));
  const tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));
  const people = parseInt(prompt("How many people are splitting the bill? (1-3):"));

  if (isNaN(age) || isNaN(quantity) || isNaN(tipPercent) || isNaN(people)) {
    alert("Invalid input. Please try again.");
    return;
  }

  let originalTotal = pricePerCup * quantity;
  let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;

  const totalAfterDiscount = originalTotal - discount;
  const tipAmount = (totalAfterDiscount * tipPercent) / 100;
  const finalTotal = totalAfterDiscount + tipAmount;
  const perPerson = finalTotal / people;

  alert(
    `Hello ${name}!\n` +
    `You ordered ${quantity} ${type}(s).\n` +
    `Original total: $${originalTotal.toFixed(2)}\n` +
    `Discount: $${discount.toFixed(2)}\n` +
    `Tip: $${tipAmount.toFixed(2)}\n` +
    `Total with Tip: $${finalTotal.toFixed(2)}\n` +
    `Split between ${people} people: $${perPerson.toFixed(2)} each`
  );
}

function handleContact(event) {
  event.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon ☕");
}
