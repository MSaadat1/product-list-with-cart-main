import type { MenuItemsType } from "../types";
import "../App.css";

export function MenuItems({
  item,
  quantity,
  onAdds,
  onIncrease,
  onDecrease,
}: {
  item: MenuItemsType;
  quantity: number;
  onAdds: (item: MenuItemsType) => void;
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
}) {
  return (
    <div className="menu-box">
      <div className="menu-img">
        <img src={item.image.desktop} alt="image" />
      </div>

      <div className="cart-btn">
        {quantity === 0 ? (
          <button className="btn-not-active" onClick={() => onAdds(item)}>
            <img
              className="cart-img"
              src="./images/icon-add-to-cart.svg"
              alt="cart-image"
            />
            <p className="btn-not-active-text">Add to Cart</p>
          </button>
        ) : (
          <div className="quantity-btn">
            <button className="decrease-btn" onClick={()=> onDecrease(item.name)}>-</button>
            <span className="quantity-number">{quantity}</span>
            <button className="increase-btn" onClick={()=> onIncrease(item.name)}>+</button>
          </div>
        )}
      </div>
      <br />
      <div className="menu-description">
        <p className="item-category">{item.category}</p>
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
