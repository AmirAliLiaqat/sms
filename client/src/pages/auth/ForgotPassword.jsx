import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder API call
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-surface rounded-2xl shadow-lg border border-border">
        {!submitted ? (
          <>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Forgot Password?</h1>
              <p className="text-text-muted">
                Enter your email and we'll send you a reset link
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="name@school.edu"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 animate-in fade-in zoom-in">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <Mail size={32} />
            </div>
            <h2 className="text-xl font-bold">Check your email</h2>
            <p className="text-text-muted">
              We have sent a password reset link to{" "}
              <span className="font-semibold">{email}</span>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-primary hover:underline text-sm"
            >
              Try entering a different email
            </button>
          </div>
        )}

        <div className="text-center pt-2">
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
