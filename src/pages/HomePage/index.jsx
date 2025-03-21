import { Button } from "@/components/ui/button"
import hero from '../../assets/images/hero.png'
import arrow from '../../assets/images/iconImage/ArrowRight3.png'
import calendar from '../../assets/images/iconImage/Calendar.png'
import user from '../../assets/images/iconImage/DuaUser.png'
import location from '../../assets/images/iconImage/Location.png'
import message from '../../assets/images/iconImage/Message.png'
import { CarouselServices } from "./CarouselServices"
import WhyUsSection from "./WhyUs"
import OurQualifiedTherapistSection from "./OurQualifiedTherapist"
import StatisticMafazaSection from "./StatistikMafaza"
import { TestimonialSection } from "./Testimonial"
import MakeAppointmentSectionForm from "@/components/MakeAppointmentSectionForm"
import { Link } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { authset } from "../../lib/store/slice/auth.slice";


const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(authset(true));
            } else {
                dispatch(authset(false));
            }
        });
    }, [dispatch]);

    return ( 
        <div className="flex-grow">
            <section className="container flex justify-between mb-[135px] mt-[84px]">
                <div className="">
                    <h1 className="h-[168px] text-5xl font-extrabold mb-[16px]">Bengkel Therapy Massage<br/>Cedera Olahraga &quot;Mafaza&quot;</h1>
                    <p className="text-[#062126] text-[24px] font-medium mb-[52px] opacity-70">Salam sehat! <br/>Tim profesional kami akan menangani Anda</p>
                    <div className="mb-[52px]">
                        <div className="grid grid-cols-2 bg-[#F4F5F4] h-[233px] p-[52px] rounded-[30px] w-[624px] gap-[32px]">
                            <div className="flex">
                                <img className="h-[30px] w-[30px] mr-[12px]" src={calendar} alt="calendar" />
                                <div>
                                    <h5 className="text-[#062126] text-[16px] font-semibold opacity-80">Buat Reservasi</h5>
                                    <p className="text-[#062126] text-[14px] font-medium opacity-70">Pilih waktu terbaik untuk Anda</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="h-[30px] w-[30px] mr-[12px]" src={user} alt="user" />
                                <div>
                                    <h5 className="text-[#062126] text-[16px] font-semibold opacity-80">Temukan Terapi Terbaik</h5>
                                    <p className="text-[#062126] text-[14px] font-medium opacity-70">Temukan terapi dengan cepat</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="h-[30px] w-[30px] mr-[12px]" src={location} alt="location" />
                                <div>
                                    <h5 className="text-[#062126] text-[16px] font-semibold opacity-80">Kunjungi Klinik</h5>
                                    <p className="text-[#062126] text-[14px] font-medium opacity-70">Tangani masalah cidera Anda</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="h-[30px] w-[30px] mr-[12px]" src={message} alt="message" />
                                <div>
                                    <h5 className="text-[#062126] text-[16px] font-semibold opacity-80">Ajukan Pertanyaan</h5>
                                    <p className="text-[#062126] text-[14px] font-medium opacity-70">Ajukan pertanyaan kapan saja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-[52px]">
                        <Link to={'/contact-us'}>
                            <Button className='h-[67px] text-[20px] w-[297px] font-medium hover:bg-[#0F97B5]'>Buat Reservasi <img className="ml-2" src={arrow} alt="arrowIcon" /></Button>
                        </Link>
                        <div className="flex flex-col justify-around">
                            <p className="text-[#CF7D4E] text-[16px] font-medium mb-[12px]">Senin - Sabtu 09.00 - 21.00</p>
                            <p className="text-[#CF7D4E] text-[16px] font-medium">Minggu 09.00 - 16.30</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={hero} alt="hero" />
                </div>
            </section>
            <CarouselServices/>
            <WhyUsSection/>
            <OurQualifiedTherapistSection/>
            <StatisticMafazaSection/>
            <TestimonialSection/>
            <MakeAppointmentSectionForm/>
        </div>
     );
}
 
export default HomePage;