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
    <div className="min-h-screen color-black  relative">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/50"></div>
      <div className="relative z-10">
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
    </div>
  );
}

export default App;
