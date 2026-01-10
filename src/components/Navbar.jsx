import { LOGO_URL } from "../utils/constant";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  function handleSignOut() {
    signOut(auth)
      .then(() =>{})
      .catch(() => navigate("/error"));
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center p-4 px-20 bg-gradient-to-b from-black">
      {/* LOGO */}
      <img
        src={LOGO_URL}
        alt="logo"
        className="w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* SIGN OUT ONLY WHEN NOT ON LOGIN PAGE */}
      {!isLoginPage && (
        <button
          onClick={handleSignOut}
          className="cursor-pointer bg-red-600 hover:bg-red-700 h-12 w-24 text-white font-semibold rounded-md"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Navbar;
