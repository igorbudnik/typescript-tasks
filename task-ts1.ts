interface TotalPriceArgs {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: TotalPriceArgs): number => {
  const priceWithDiscount = price * (1 - discount / 100);

  if (isInstallment) {
    return priceWithDiscount / months;
  }

  return priceWithDiscount;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);
