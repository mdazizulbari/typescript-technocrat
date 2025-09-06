// functions => normal, arrow

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(2, 2);

// function inside object => method
const poorUser = {
  name: "Mezba",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};
