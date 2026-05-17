import React, { useState } from 'react';
import './FloatingCoffeeButton.css';

const FloatingCoffeeButton: React.FC = () => {
  // 1. Added State to track the dynamic amount (defaults to 100)
  const [customAmount, setCustomAmount] = useState<number>(100);

  // Utility function to dynamically load the Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // 2. Added Validation to prevent zero or negative payments
    if (customAmount < 1) {
      alert("Please enter an amount of at least ₹1");
      return;
    }

    // Load the script
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Please check your connection.');
      return;
    }

    try {
      // 3. Added the dynamic amount to the backend fetch request
      const data = await fetch('https://portfolio-new-1-eg19.onrender.com/create-order', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: customAmount }) // <-- Sends the typed amount to backend
      }).then((t) => t.json());

      // Set up the Razorpay Checkout Options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Ensure this points to your Live Key ID in Netlify!
        amount: data.amount,
        currency: data.currency,
        name: "Shreyash Kale",
        description: "Tech Consultation & Code Review", // <-- Updated for Razorpay Compliance!
        order_id: data.id, 
        handler: function (response: any) {
          // This function triggers when the user successfully pays
          alert(`Thank you! Payment successful.\nPayment ID: ${response.razorpay_payment_id}`);
          console.log("Success Response:", response);
        },
        prefill: {
          name: "", 
          email: "",
          contact: ""
        },
        theme: {
          color: "#FFDD00" // Matches our button color
        },
        config: {
          display: {
            blocks: {
              upi: {
                name: "Pay via UPI",
                instruments: [
                  {
                    method: "upi"
                  }
                ]
              }
            },
            sequence: ["block.upi"],
            preferences: {
              show_default_blocks: true // This still allows cards/wallets as a fallback
            }
          }
        }
      };

      // Open the checkout window
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment failed to initialize:", error);
      alert("Something went wrong while setting up the payment.");
    }
  };

  return (
    // 4. Wrapped the button in a container and added the input field
    <div className="floating-payment-container">
      <div className="amount-input-wrapper">
        <span className="currency-symbol">₹</span>
        <input 
          type="number" 
          min="1"
          value={customAmount} 
          onChange={(e) => setCustomAmount(Number(e.target.value))}
          className="amount-input"
          aria-label="Enter custom amount"
        />
      </div>

      <button 
        onClick={handlePayment} 
        className="floating-coffee-btn"
        aria-label="Book a Code Review"
      >
        <span className="coffee-icon">💻</span>
        <span className="coffee-text">Pay Now</span>
      </button>
    </div>
  );
};

export default FloatingCoffeeButton;