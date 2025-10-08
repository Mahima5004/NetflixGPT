import {LOGO_URL} from "../utils/constant"

function Navbar() {
  return (
    <div className="w-44 relative z-10 bg-gradient-to-b from-black">
      <img src= {LOGO_URL} alt="logo-img" />
    </div>
  )
}

export default Navbar
