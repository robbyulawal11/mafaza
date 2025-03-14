import { Card } from "@/components/ui/card";
import { auth } from "../../../firebase";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import heroService from "../../assets/images/heroImage/appointmentHero.png";
import user1 from "../../assets/images/iconImage/user.png";
import userIcon from "../../assets/images/iconImage/userIcon.png";
import pinIcon from "../../assets/images/iconImage/pinIcon.png";
import { Link } from "react-router-dom";

const ProfilPage = () => {
    const user = auth.currentUser;
    const [newProfil, newProfilSet] = useState({
        displayName:"",
        email:""
    })
    console.log(user)
    console.log(newProfil)

    useEffect(()=>{
        if(user){
            newProfilSet((prev) => ({ ...prev, displayName: user.displayName }))
            newProfilSet((prev) => ({ ...prev, email: user.email }))
        }
    },[user])


    const onHandleSave = () => {
        updateProfile(user, {
            displayName: newProfil.displayName
          }).then(() => {

          }).catch((error) => {
            console.log(error)
          });
        updateEmail(user, newProfil.email).then(() => {
        // Email updated!
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <section className="h-[400px] w-auto flex justify-center items-center bg-center" style={{ backgroundImage: `url(${heroService})` }}>
                <div className="w-[480px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center">
                <h2 className="text-white font-bold text-[48px]">Profil</h2>
                </div>
            </section>
            <section className="bg-white">
                <div className="flex">
                <div className="bg-[#E5661E] bg-opacity-5 w-[380px] h-auto flex flex-col justify-start items-center py-[70px] px-[20px]">
                    <img className="w-[150px] h-[150px] mb-[12px]" src={user1} alt="user 1" />
                    <h5 className="text-[#062126] font-semibold text-[26px] mb-[28px]">{user?.displayName}</h5>
                    <hr className="border border-[#062126] border-opacity-30 border-1 w-[300px] mb-[28px]" />
                    <div className="flex flex-col items-start gap-[10px]">
                    <Link to="/profil" className=" flex items-center gap-3 bg-white w-[300px] px-5 py-2  rounded-[10px] cursor-pointer">
                        <img className="w-[20px] h-[20px]" src={userIcon} alt="user icon" />
                        <p className="text-[#062126] opacity-60 font-medium text-[20px]">Profil</p>
                    </Link>
                    <Link to="/your-appointments" className=" flex items-center gap-3 hover:bg-white w-[300px] px-5 py-2 rounded-[10px] cursor-pointer">
                        <img className="w-[20px] h-[20px]" src={pinIcon} alt="pin icon" />
                        <p className="text-[#062126] opacity-60 font-medium text-[20px]">Reservasi</p>
                    </Link>
                    </div>
                </div>
                <div className="m-[48px]">
                    <Card className='lg:w-[900px] h-[500px] shadow-sm p-14'>
                        <h1 className="text-[#062126] font-semibold text-[20px] mb-[30px]">Detail Profil</h1>
                        {user && 
                        <form onSubmit={onHandleSave}>
                        <div className="grid w-full items-center justify-start gap-4 mb-[100px]">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="name">
                            Nama
                            </Label>
                            <Input className="w-[800px] bg-white text-[#062126] opacity-80 font-medium text-[16px]" type="text" id="name" placeholder="" value={newProfil?.displayName} onChange={(e) => newProfilSet((prev) => ({ ...prev, displayName: e.target.value }))}/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="email">
                            Email
                            </Label>
                            <Input className="w-[800px] bg-white text-[#062126] opacity-80 font-medium text-[16px]" type="email" id="email" placeholder="" value={newProfil?.email} onChange={(e) => newProfilSet((prev) => ({ ...prev, email: e.target.value }))}/>
                        </div>
                        </div>
                        <div className="flex justify-end items-center">
                        <Button className="w-[100px] text-[16px] font-medium mb-[20px] hover:bg-[#0F97B5]" type="submit">
                            Simpan
                        </Button>
                        </div>
                    </form>
                    }
                    </Card>
                </div>
                </div>
            </section>
        </div>
     );
}
 
export default ProfilPage;