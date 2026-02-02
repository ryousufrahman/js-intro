function products(n1,n2,n3) {
    const shirtPrice =600;
    const pantPrice = 800;
    const shoesPrice = 1500;

    const totalShirtPrice = shirtPrice*n1;
    const totalPantPrice = pantPrice*n2;
     const totalShoesPrice =shoesPrice*n3;

   const totalPrice = totalShirtPrice+totalPantPrice+totalShoesPrice;

   return totalPrice
    
}

const myCart =products(2,2,1);
console.log(myCart);