import "../App.css";
import type { CartItemType } from "../types";

type Props = {
  cartItems: CartItemType[];
  totalPrice: number;
  setNewOrder: () => void;
};
export function OnConfirmOrder({ cartItems, totalPrice, setNewOrder }: Props) {
  return (
    <>
      <div className="overlay">
        <div className="confirm-container">
          <img src="/images/icon-order-confirmed.svg" alt="" />
          <h2 className="confirm-order-header">Order confirmed</h2>
          <p className="confirm-order-subheader">
            We hope you enjoy your food!
          </p>
          <div className="confirm-order-box">
            <ul className="confirm-ul">
              {cartItems.map((item) => (
                <li key={item.name} className="confirm-li">
                  <div className="confirm-img-info">
                    <img
                      className="confirm-img"
                      src={item.image.thumbnail}
                      alt="item-img"
                    />
                    <div>
                      <p className="confirm-item-name">{item.name}</p>
                      <p className="confirm-item-quantity">
                        {item.quantity}x &nbsp;
                        <span className="unit-price">
                          @${item.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="confirm-item-total">
                    <p>${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                </li>
              ))}
              <li className="total-order">
                <span className="total-order-text">Order Total</span>
                <strong>${totalPrice.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
          <button className="btn-reorder" onClick={setNewOrder}>
            Submit a new order
          </button>
        </div>
      </div>
    </>
  );
}
