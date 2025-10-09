import { LOGO_URL } from "../utils/constant";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-10 p-4 ml-20">
      <img src={LOGO_URL} alt="logo" className="w-45" />
    </div>
  );
}

export default Navbar;
