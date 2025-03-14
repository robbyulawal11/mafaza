import { Button } from "../ui/button";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import userIcon from "../../assets/images/iconImage/userDropDown.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navbarItem = [
  {
    label: "Beranda",
    link: "/",
  },
  {
    label: "Layanan",
    link: "/our-services",
  },
  {
    label: "Reservasi",
    link: "/your-appointments",
  },
  {
    label: "Tentang Kami",
    link: "/about-us",
  },
  {
    label: "Hubungi Kami",
    link: "/contact-us",
  },
];

const Navbar = () => {
  const user = auth.currentUser;
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signOut(auth);
      navigate("/")
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
              <Button className="w-[80px] h-[43px] hover:bg-[#0F97B5]">Masuk</Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline w-8 h-8" onClick={handleSignOut}>
                  <img className="" src={userIcon} alt="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-[10px] p-5">
                <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/profile">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
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
