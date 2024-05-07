import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu"
import { Button } from "../ui/button"
import logo from "../../assets/images/logo.png"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../../../firebase"
import {
  LogOut,
  User
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import userIcon from '../../assets/images/iconImage/userDropDown.png'
  
const navbarItem = [
  {
    label: "Home",
    link:"/",
  },
  {
    label: "Our Services",
    link:"/our-services",
  },
  {
    label: "Your Appointments",
    link:"/your-appointments",
  },
  {
    label: "About Us",
    link:"/about-us",
  },
  {
    label: "Contact Us",
    link:"/contact-us",
  }
]
  
const Navbar = () => {

    const {isAuth} = useSelector((state)=> state.auth);

    async function handleSignOut() {
      try {
        await signOut(auth);
      } catch (error) {
        console.log(error);
      }
    }

    return ( 
      <NavigationMenu className='container mb-[22.82px]'>
        <div className="flex items-start">
          <Link href="/" >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex gap-2 justify-center items-center">
                  <img className="w-[42.35px] h-[42.35px]" src={logo} alt="logo" />
                  <h1 className="text-[20px] font-medium">Mafaza<span className="text-[#24BEE0]">.</span></h1>
                </div>
              </NavigationMenuLink>
          </Link>
        </div>
        <NavigationMenuList>
            {navbarItem.map( (item, i) => (
            <NavigationMenuItem key={i}>
                <Link href={item.link}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className="text-[#062126] opacity-60 font-medium text-[16px]">{item.label}</p>
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>)
          )}
        </NavigationMenuList>
        <div>
          {!isAuth?
          <Link href="/login">
                <Button className='w-[80px] h-[43px] hover:bg-[#0F97B5]'>Login</Button>
          </Link>:
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline w-8 h-8" onClick={handleSignOut}><img className="" src={userIcon} alt="" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-[10px] p-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/your-appointments">
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
          }
        </div>
      </NavigationMenu>
     );
}
 
export default Navbar;