import { useCartStore } from "@/store/cartStore";
import { Cart } from "@/types/cart"
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
}

export const CartItemQuatity = ({cartItem}:Props) => {
  const {upsertCartItem} = useCartStore(state => state)

  const handlePlusButton = () => {
    upsertCartItem(cartItem.product, 1);
  }
  const handleMinusButton = () => {
    upsertCartItem(cartItem.product, -1);
  }
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handlePlusButton}
        variant="outline"
        size="icon"
        className="size-6"
      >
        <PlusIcon className="size-3"/>
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        onClick={handleMinusButton}
        variant="outline"
        size="icon"
        className="size-6"
      >
        <MinusIcon className="size-3"/>
      </Button>
      
    </div>
  )
}