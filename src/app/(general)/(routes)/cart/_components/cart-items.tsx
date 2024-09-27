"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItems() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ productId, quantity }));
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your Cart Items</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.items.length > 0 ? (
          <ul className="space-y-4">
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(
                        item.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                    className="w-16 text-center"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No items in the cart.</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <p className="font-semibold">Total Quantity: {cart.totalQuantity}</p>
          <p className="font-semibold">
            Total Price: ${cart.totalPrice.toFixed(2)}
          </p>
        </div>
        <Button variant="default" size="lg" disabled={cart.items.length === 0}>
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}
