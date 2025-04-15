// src/components/Signup.js
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  // Form data
  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [transactionPin, setTransactionPin] = useState("");
  const [step, setStep] = useState(1); // Track form step
  const [error, setError] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false); // Loading state


  // Go to next step
  const handleNext = (e) => {
    e.preventDefault();
    if (!firstName|| !lastName || !phoneNumber || !email || !password || !gender) {
      setError("please fill all fields");
      toast.error("Please fill all required fields");
      return;
    }
    setError("");
    setStep(2);
  };

  // Go to previous step
  const handleBack = () => {
    setStep(1);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dob || !address || !transactionPin) {
      setError("Please fill all fields");
      toast.error("Please fill all required fields");
      return;
    }
    if (!/^\d{4}$/.test(transactionPin)) {
      setError("Transaction Pin must be 4 digits");
      toast.error("Transaction Pin must be 4 digits");
      return;
    }
    setError("");
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "user", user.uid), {
        nickname: nickname || " ",
        firstName,
        lastName,
        phoneNumber,
        email,
        gender,
        dob,
        address,
        vip: "vip1",
        accountNumber: Math.floor(
          1000000000 + Math.random() * 9000000000
        ),
        transactionPin,
        amount,
      });

      toast.success("Signed up successfully!");
      navigate("/login");
    } catch (err) {
      const errorMsg = err.message.includes("email-already-in-use")
        ? "Email already in use"
        : "Failed to sign up";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }


  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #1a677b, #1a687b65)",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Step {step} of 2
        </p>

        <form
          onSubmit={step === 1 ? handleNext : handleSubmit}
          className="space-y-4"
        >
          {step === 1 && (
            <>
              {/* Full Name */}
              <div className="flex space-x-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g., John "
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Second Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g.,  Doe"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* Nickname */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nickname (Optional)
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="e.g., SunnyBanker"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g., +1234567890"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., johndoe@example.com"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="font-light text-red-400">{error}</p>
            </>
          )}

          {step === 2 && (
            <>
              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g., 123 Main St, City"
                  required
                  rows="4"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* VIP */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  VIP Level
                </label>
                <input
                  type="text"
                  value="VIP 1"
                  disabled
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
                />
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <input
                  type="text"
                  value="Generated on Signup"
                  disabled
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
                />
              </div>

              {/* Transaction Pin */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Transaction Pin (4 digits)
                </label>
                <input
                  type="password"
                  value={transactionPin}
                  onChange={(e) => setTransactionPin(e.target.value)}
                  placeholder="e.g., 1234"
                  required
                  maxLength="4"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/*  */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Starting Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g., 1234"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="font-light text-red-400">{error}</p>
            </>
          )}

          {/* Buttons */}
          <div className="flex space-x-4">
            {step === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="w-1/2 bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400"
              >
                Back
              </button>
            )}
<button
              type="submit"
              className={`${
                step === 1 ? "w-full" : "w-1/2"
              } bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                  ></path>
                </svg>
              ) : null}
              {step === 1 ? "Next" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
