import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UniversityList from "./components/UniversityList";
import Features from "./components/Features";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    type: "signup",
  });

  const handleOpenAuth = (type) => {
    setAuthModal({
      isOpen: true,
      type: type,
    });
  };

  const handleCloseAuth = () => {
    setAuthModal({
      isOpen: false,
      type: "signup",
    });
  };

  return (
    <div className="min-h-screen color-black bg-blue-300">
      <Navbar onOpenAuth={handleOpenAuth} />

      <Hero onOpenAuth={handleOpenAuth} />

      <UniversityList />

      <Features />

      <Footer onOpenAuth={handleOpenAuth} />

      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={handleCloseAuth}
      />
    </div>
  );
}

export default App;
