import React, { useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi"; // Arrow icon for submission
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"; // Modal for confirmation

function FinBank() {
  const [amount, setAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientAccount, setRecipientAccount] = useState("");
  const [reference, setReference] = useState("");
  const [pin, setPin] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successAmount, setSuccessAmount] = useState(""); // New state for success modal
  const [successRecipientName, setSuccessRecipientName] = useState(""); // New state for success modal

  const handleReviewSubmit = () => {
    if (!recipientName || !recipientAccount || !amount) {
      alert("Please fill all required fields.");
      return;
    }
    setIsReviewModalOpen(true);
  };

  const handleConfirmReview = () => {
    setIsReviewModalOpen(false);
    setIsPinModalOpen(true);
  };

  const handlePinSubmit = () => {
    if (!/^\d{4}$/.test(pin)) {
      alert("PIN must be a 4-digit number.");
      return;
    }
    setIsSubmitting(true);
    setIsPinModalOpen(false);
    
    // Store the values before resetting
    setSuccessAmount(amount);
    setSuccessRecipientName(recipientName);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
      // Reset form after storing values
      setAmount("");
      setRecipientName("");
      setRecipientAccount("");
      setReference("");
      setPin("");
    }, 2000);
  };

  return (
    <div >
      <div >
      <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-400">
            Transfer to Fin Bank
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Send money securely to Fin Bank
          </p>
        </div>
        {/* Recipient Details */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Recipient Details
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label
                htmlFor="recipientName"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Recipient Name
              </label>
              <input
                id="recipientName"
                type="text"
                placeholder="e.g., John Doe"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="mt-1 block w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="recipientAccount"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Account Number
              </label>
              <input
                id="recipientAccount"
                type="text"
                placeholder="e.g., 1234567890"
                value={recipientAccount}
                onChange={(e) => setRecipientAccount(e.target.value)}
                className="mt-1 block w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Transfer Amount */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Transfer Amount
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Amount to Transfer (₦)
              </label>
              <div className="mt-1  rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-xs sm:text-sm">₦</span>
                </div>
                <input
                  id="amount"
                  type="number"
                  placeholder="₦ 0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-8 sm:pl-10 py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
                />
              </div>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <p>
                Transfer Fee: <span className="font-medium">free</span>
              </p>
              <p className="mt-1">
                Total Amount: <span className="font-medium">₦{Number(amount || 0)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Purpose of Transfer
          </h2>
          <input
            id="reference"
            type="text"
            placeholder="e.g., Gift, Invoice Payment"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="mt-1 block w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
          />
        </div>

        {/* Sender Details */}
        <div className="space-y-4 sm:space-y-6 ">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-400">
            Sender Details
          </h2>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <p>
              <span className="font-medium">Full Name:</span> Jane Doe
            </p>
            <p className="mt-1">
              <span className="font-medium">Account Number:</span> XXXX-5678
            </p>
            <p className="mt-1">
              <span className="font-medium">Bank Name:</span> Fin Bank
            </p>
          </div>
        </div>

        {/* Review & Confirm */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-400">
            Review Transfer
          </h2>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <p>
              <span className="font-medium">Recipient:</span> {recipientName || "N/A"},{" "}
              {recipientAccount || "N/A"}, {"Fin Bank"}
            </p>
            <p className="mt-1">
              <span className="font-medium">Amount:</span> ₦{amount || "0.00"}
            </p>
            <p className="mt-1">
              <span className="font-medium">Total:</span> ₦{Number(amount || 0)}
            </p>
            <p className="mt-1">
              <span className="font-medium">Purpose:</span> {reference || "N/A"}
            </p>
          </div>
          <button
            onClick={handleReviewSubmit}
            disabled={isSubmitting}
            className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium flex items-center justify-center space-x-2 transition duration-150 ${
              isSubmitting
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#1a677b] text-white hover:bg-[#1a687b65]"
            }`}
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                <TfiArrowCircleRight className="text-lg sm:text-xl" />
                <span>Confirm Transfer</span>
              </>
            )}
          </button>
        </div>

        {/* Review Modal */}
        <Dialog open={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)}>
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <DialogPanel className="bg-white rounded-xl p-6 w-full max-w-xs sm:max-w-md mx-4 sm:mx-0 shadow-lg dark:bg-gray-900 dark:text-gray-200">
              <DialogTitle className="text-lg sm:text-2xl font-semibold text-gray-900 text-center dark:text-gray-200">
                Confirm Transfer Details
              </DialogTitle>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 space-y-2 dark:text-gray-400">
                <p>
                  <span className="font-medium">Recipient:</span> {recipientName},{" "}
                  {recipientAccount}, {"Fin Bank"}
                </p>
                <p>
                  <span className="font-medium">Amount:</span> ₦{amount}
                </p>
                <p>
                  <span className="font-medium">Total:</span> ₦{Number(amount || 0)}
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> {reference || "N/A"}
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="py-2 px-4 sm:px-6 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base transition duration-150"
                >
                  Edit
                </button>
                <button
                  onClick={handleConfirmReview}
                  className="py-2 px-4 sm:px-6 bg-[#1a677b] text-white rounded-lg hover:bg-[#1a687b65] text-sm sm:text-base transition duration-150"
                >
                  Proceed
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* PIN Modal */}
        <Dialog open={isPinModalOpen} onClose={() => setIsPinModalOpen(false)}>
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <DialogPanel className="bg-white rounded-xl p-6 w-full max-w-xs sm:max-w-md mx-4 sm:mx-0 shadow-lg dark:bg-gray-900">
              <DialogTitle className="text-lg sm:text-2xl font-semibold text-gray-900 text-center dark:text-gray-200 ">
                Enter Transaction PIN
              </DialogTitle>
              <div className="mt-3 sm:mt-4 dark:text-gray-400">
                <input
                  id="pin"
                  type="password"
                  placeholder="••••"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base placeholder-gray-400 text-center"
                  maxLength={4}
                />
              </div>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => setIsPinModalOpen(false)}
                  className="py-2 px-4 sm:px-6 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base transition duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePinSubmit}
                  className="py-2 px-4 sm:px-6 bg-[#1a677b] text-white rounded-lg hover:bg-[#1a687b65] text-sm sm:text-base transition duration-150"
                >
                  Authorize
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Success Modal */}
        <Dialog open={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <DialogPanel className="bg-white rounded-xl p-6 w-full max-w-xs sm:max-w-md mx-4 sm:mx-0 shadow-lg dark:bg-gray-900 dark:text-gray-200">
              <DialogTitle className="text-lg sm:text-2xl font-semibold text-gray-900 text-center dark:text-gray-200">
                Transfer Successful
              </DialogTitle>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 text-center dark:text-gray-400">
                Your transfer of ₦{Number(successAmount || 0)} to {successRecipientName} has been
                successfully processed.
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 text-center">
                Transaction ID: XYZ123
              </p>
              <div className="mt-4 sm:mt-6">
                <button
                  onClick={() => setIsSuccessModalOpen(false)}
                  className="w-full py-2 sm:py-2 px-4 sm:px-6 bg-[#1a677b] text-white rounded-lg hover:bg-[#1a687b65] text-sm sm:text-base transition duration-150"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default FinBank;