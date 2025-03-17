//useMemo() 

import React, { useMemo } from "react";

type Product = {
  price: number;
  quantity: number;
};

function calcTotal(products: Product[]) {
  return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function Cart({ products }: { products: Product[] }) {
  const total = useMemo(() => calcTotal(products), [products]);

  return (
    <><p>cart total price: R${total.toFixed(2)}</p></>
  );
}
