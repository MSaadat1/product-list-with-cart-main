import "../App.css";
import type { CartItemType } from "../types";

type YourCardProps = {
  cartItems: CartItemType[];
  totalItems: number;
  totalPrice: number;
  onRemoveItem: (name: string) => void;
  onConfirmOrder: () => void;
};

export function YourCard({
  cartItems,
  totalItems,
  totalPrice,
  onRemoveItem,
  onConfirmOrder,
}: YourCardProps) {
  return (
    <>
      <aside className="card">
        <p className="card-title">Your Card ({totalItems})</p>
        {cartItems.length === 0 ? (
          <div className="empty-card">
            <img src="/images/illustration-empty-cart.svg" alt="" />
            <p>Your added items will appear here!</p>
          </div>
        ) : (
          <div>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.name} className="cart-item">
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-info">
                      {item.quantity}x &nbsp;
                      <span className="unit-price">
                        @${item.price.toFixed(2)}
                      </span>
                      &nbsp;
                      <span className="unit-totalPrice">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.name)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <p className="total-text">Total Order</p>
              <h4>${totalPrice.toFixed(2)}</h4>
            </div>
            <div className="carbon-free-container">
              <img src="/images/icon-carbon-neutral.svg" alt="" />
              <p className="carbon-free">
                This is a{" "}
                <span className="carbon-free-inside-text">carbon-neutral </span>
                delivery
              </p>
            </div>
            <button className="confirm-btn" onClick={() => onConfirmOrder()}>
              Confirm Order
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
