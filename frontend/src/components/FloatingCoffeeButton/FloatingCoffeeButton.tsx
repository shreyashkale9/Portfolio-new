import React, { useState } from 'react';
import './FloatingCoffeeButton.css';

const FloatingCoffeeButton: React.FC = () => {
  // 1. State for custom amount and modal visibility
  const [customAmount, setCustomAmount] = useState<number>(100);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Utility function to load Razorpay
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
    if (customAmount < 1) {
      alert("Please enter an amount of at least ₹1");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Please check your connection.');
      return;
    }

    try {
      // Ask your Node.js backend to create an order
      const data = await fetch('https://portfolio-new-1-eg19.onrender.com/create-order', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: customAmount }) 
      }).then((t) => t.json());

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Live Key ID
        amount: data.amount,
        currency: data.currency,
        name: "Shreyash Kale",
        description: "Tech Consultation & Code Review", 
        order_id: data.id, 
        handler: function (response: any) {
          alert(`Thank you! Payment successful.\nPayment ID: ${response.razorpay_payment_id}`);
          console.log("Success Response:", response);
          setIsModalOpen(false); // Close modal on success
        },
        prefill: {
          name: "", 
          email: "",
          contact: ""
        },
        theme: {
          color: "#5B42F3" // Changed to a nice purple/blue to match standard tech buttons, adjust as needed
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

      // Close the custom modal once Razorpay's modal takes over
      setIsModalOpen(false);

    } catch (error) {
      console.error("Payment failed to initialize:", error);
      alert("Something went wrong while setting up the payment.");
    }
  };

  return (
    <>
      {/* The main floating button that sits in the corner */}
      <button 
        onClick={() => setIsModalOpen(true)} 
        className="floating-main-trigger"
        aria-label="Book a Code Review"
      >
        <span className="coffee-icon">💻</span>
        <span className="coffee-text">Pay Now</span>
      </button>

      {/* The Modal Overlay - Only renders if isModalOpen is true */}
      {isModalOpen && (
        <div className="payment-modal-overlay">
          <div className="payment-modal-content">
            <h3>Set Payment Amount</h3>
            <p>Enter the amount for your tech consultation or code review.</p>

            <div className="modal-input-wrapper">
              <span className="modal-currency">₹</span>
              <input 
                type="number" 
                min="1"
                value={customAmount} 
                onChange={(e) => setCustomAmount(Number(e.target.value))}
                className="modal-amount-input"
                autoFocus
              />
            </div>

            <div className="modal-actions">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="modal-cancel-btn"
              >
                Cancel
              </button>
              <button 
                onClick={handlePayment} 
                className="modal-confirm-btn"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCoffeeButton;