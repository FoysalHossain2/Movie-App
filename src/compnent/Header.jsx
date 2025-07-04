import { useState } from "react";
import moon from "../assets/icons/moon.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CardDetails from "../cine/CardDetails";
// import { MovieContext } from "../context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  // const { cardData } = useContext(MovieContext);

  const handleCartShow = () => {
    setShowCart(true);
  };

  // console.log(cardData);

  return (
    <>
      {showCart && <CardDetails onClose={() => setShowCart(false)} />}

      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} alt="moon" width="24" height="24" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCartShow}
              >
                <img
                  src={shoppingCart}
                  width="24"
                  height="24"
                  alt="shopping cart"
                />
                {/* {cardData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cardData.length}{" "}
                  </span>
                )} */}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
