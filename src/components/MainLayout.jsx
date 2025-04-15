// src/components/MainLayout.js
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function MainLayout() {
  const [userData, setUserData] = useState(null); // Initialize as null to handle loading state
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        console.log("Auth user:", user); // Debug auth state
        if (user) {
          const docRef = doc(db, "user", user.uid);
          const docSnap = await getDoc(docRef);
          console.log("Firestore doc exists:", docSnap.exists()); // Debug Firestore
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("Fetched userData:", data); // Debug data
            setUserData(data);
          } else {
            toast.error("No user data found");
            setUserData(null); // Set null if no data found
          }
        } else {
          toast.error("Not authenticated");
          navigate("/login");
        }
      } catch (err) {
        toast.error("Failed to load data");
        console.error("Error:", err);
        setUserData(null); // Set null in case of error
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(to bottom, #1a677b, #1a687b65)" }}
      >
        <svg
          className="animate-spin h-8 w-8 text-white"
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
      </div>
    );
  }

  if (!userData) {
    // If user data is null or empty, render an error message
    return <div className="text-center p-8 text-red-500">User data not found.</div>;
  }

  // Fallback if userData is successfully fetched
  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-gray-800">
      {/* Sidebar - Fixed on Large Screens, Hidden on Mobile */}
      <Sidebar userData={userData} />

      {/* Main Content Section */}
      <div className="flex flex-col p-4 flex-1 w-full md:ml-[19rem] bg-gray-100 dark:bg-gray-950 dark:text-white">
        {/* Header (Always Visible) */}
        <Header userData={userData} />

        {/* Page Content */}
        <div className="pt-[1rem] min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white">
          <Outlet context={{ userData }} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
