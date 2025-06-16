// JS + React

// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cartContext/CartContext";
// import "./Cart.scss";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <button className="product-details__back" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       {cart.length === 0 ? (
//         <p className="cart__empty">The basket is empty.</p>
//       ) : (
//         <>
//           <h2 className="cart__title">Shopping cart</h2>
//           <ul className="cart__list">
//             {cart.map((item) => (
//               <li className="cart__item" key={item.id}>
//                 <div className="cart__item-info">
//                   <strong className="cart__item-title">{item.title}</strong>
//                   <span className="cart__item-quantity">
//                     {item.price}$ x {item.quantity}
//                   </span>
//                 </div>
//                 <button
//                   className="cart__item-remove"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <h3 className="cart__total">Total: {total.toFixed(2)} $</h3>
//           <button className="cart__clear" onClick={clearCart}>
//             Empty the basket
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


// TypeScript + React

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext/CartContext";
import "./Cart.scss";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart }: CartContextType = useCart();
  const total: number = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <button className="product-details__back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {cart.length === 0 ? (
        <p className="cart__empty">The basket is empty.</p>
      ) : (
        <>
          <h2 className="cart__title">Shopping cart</h2>
          <ul className="cart__list">
            {cart.map((item) => (
              <li className="cart__item" key={item.id}>
                <div className="cart__item-info">
                  <strong className="cart__item-title">{item.title}</strong>
                  <span className="cart__item-quantity">
                    {item.price}$ x {item.quantity}
                  </span>
                </div>
                <button
                  className="cart__item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3 className="cart__total">Total: {total.toFixed(2)} $</h3>
          <button className="cart__clear" onClick={clearCart}>
            Empty the basket
          </button>
        </>
      )}
    </div>
  );
};

export default Cart; 