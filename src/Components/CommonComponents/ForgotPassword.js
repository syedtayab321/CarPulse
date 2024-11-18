import React, { useState } from "react";
import "./css/forgotpassword.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendLink = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(`Password reset link sent to ${email}`);
      setError("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Forgot Password</h2>
        <p>Enter your email to receive a password reset link.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />

        <button className="send-link-btn" onClick={handleSendLink}>
          Send Link
        </button>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
