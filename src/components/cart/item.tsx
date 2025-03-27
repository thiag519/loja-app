import { Cart } from "@/types/cart"
import { CartItemQuatity } from "./ItemQuantity";

type Propt = {
  item: Cart;
}
export const CartItem = ({item}: Propt) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden ">
        <img src={item.product.image} alt={item.product.name} />
      </div>
      <div className="flex-1">
        <p className="text-md">{item.product.name}</p>
        <p className="text-xs opacity-50">R$ {item.product.price.toFixed(2)}</p>
      </div>
      <div>
        <CartItemQuatity
          cartItem={item}
        />
      </div>
    </div>
  )
}