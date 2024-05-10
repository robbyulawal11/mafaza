import { Button } from "../ui/button";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import userIcon from "../../assets/images/iconImage/userDropDown.png";
import { Link, NavLink } from "react-router-dom";

const navbarItem = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Our Services",
    link: "/our-services",
  },
  {
    label: "Appointments",
    link: "/your-appointments",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header>
      <nav className="container my-[22.82px] flex justify-between">
        <div className="flex items-start">
          <Link to="/">
            <div className="flex gap-2 justify-center items-center">
              <img className="w-[42.35px] h-[42.35px]" src={logo} alt="logo" />
              <h1 className="text-[20px] font-medium">
                Mafaza<span className="text-[#24BEE0]">.</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex gap-[20px] items-center justify-center">
          {navbarItem.map((item, i) => (
            <div key={i} className="hover:bg-[#24BEE0] hover:bg-opacity-5 rounded-[40px] p-3">
              <NavLink to={item?.link} className={({ isActive }) => (isActive ? "text-[#CF7D4E] font-medium text-[16px]" : "text-[#062126] opacity-60 font-medium text-[16px]")}>
                {item.label}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          {!isAuth ? (
            <Link to="/login">
              <Button className="w-[80px] h-[43px] hover:bg-[#0F97B5]">Login</Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline w-8 h-8" onClick={handleSignOut}>
                  <img className="" src={userIcon} alt="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-[10px] p-5">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/your-appointments">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
