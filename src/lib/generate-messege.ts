import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";

export const generateMessege = () => {
  const {name, address} = useCheckoutStore(state => state);
  const {cart} = useCartStore(state => state);

  let orderProducts = [];
  for(let item of cart) {
    orderProducts.push(`${item.quantity}x ${item.product.name}`);
  }

  return (  
`${'🛒'}
**Dados do Cliente**
Nome: ${name}
Endereço: ${address.street}, ${address.number} - (${address.complement})
Bairro: ${address.district}, ${address.city}/${address.state}
-----------------
**Pedido:**
${orderProducts.join("\n")}
-----------------
**Total: R$${cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}**`
  )
};
