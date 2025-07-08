import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cart/cartSlice';
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateSubtotal = (item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);
  };

  const navigate = useNavigate(); // Add this hook

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-sm text-violet-600 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-semibold mb-6">Cart Page</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 my-10">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border rounded-md p-4 shadow-sm"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image} alt={item.title} className="w-16 h-16 rounded" />
                  <div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.price}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-700">Subtotal: ${calculateSubtotal(item).toFixed(2)}</div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Flat Rate – Shipping to UA</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-black">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md text-sm hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

       {/* Final CTA */}
      <section className="bg-[#5427d0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Affordable Your Online Courses & Learning Opportunities
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Explore best online classes and boost your career with expert-led content.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
            Start Learning Today
          </button>
        </div>
      </section>
    </main>
  );
}

export default Cart;
