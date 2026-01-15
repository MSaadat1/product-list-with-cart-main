import { useState } from "react";
import "./App.css";
import { MenuItems } from "./components/MenuItems";
import { YourCard } from "./components/YourCard";
import menuData from "./data.json";
import type { MenuItemsType, CartItemType } from "./types";
import { OnConfirmOrder } from "./components/OnConfirmOrder";

const menu: MenuItemsType[] = menuData;
function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isOrderConfirmed, setIsOrderConfirmOrder] = useState(false);

  function onAdds(item: MenuItemsType) {
    setCartItems((prevCart) => {
      const exists = prevCart.find((cardItem) => cardItem.name === item.name);
      if (exists) {
        return prevCart.map((cardItem) =>
          cardItem.name === item.name
            ? { ...cardItem, quantity: cardItem.quantity + 1 }
            : cardItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }
  function onIncrease(itemName: string) {
    setCartItems((prevCart) =>
      prevCart.map((cardItem) =>
        cardItem.name === itemName
          ? { ...cardItem, quantity: cardItem.quantity + 1 }
          : cardItem
      )
    );
  }
  function onDecrease(itemName: string) {
    setCartItems((prevCart) =>
      prevCart
        .map((cardItem) =>
          cardItem.name === itemName
            ? { ...cardItem, quantity: cardItem.quantity - 1 }
            : cardItem
        )
        .filter((cardItem) => cardItem.quantity > 0)
    );
  }
  function getQuantity(itemName: string) {
    const fountItem = cartItems.find((cardItem) => cardItem.name === itemName);
    if (fountItem) {
      return fountItem.quantity;
    }
    return 0;
  }
  function onRemoveItem(name: string) {
    setCartItems((prev) => prev.filter((ci) => ci.name !== name));
  }
  function onConfirmItem() {
    setIsOrderConfirmOrder(true);
  }
  function setOnNewStartOrder() {
    setCartItems([]);
    setIsOrderConfirmOrder(false);
  }
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <main className="main-layout">
      <div className="menu-wrapper">
        <h2>Dessert</h2>
        <section className="menu-section">
          {menu.map((item) => (
            <MenuItems
              key={item.name}
              item={item}
              onAdds={onAdds}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              quantity={getQuantity(item.name)}
            />
          ))}
        </section>
      </div>

      <aside className="card-section">
        <YourCard
          cartItems={cartItems}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onRemoveItem={onRemoveItem}
          onConfirmOrder={onConfirmItem}
        />
      </aside>
      {isOrderConfirmed && (
        <OnConfirmOrder
          cartItems={cartItems}
          totalPrice={totalPrice}
          setNewOrder={setOnNewStartOrder}
        />
      )}
    </main>
  );
}

export default App;
