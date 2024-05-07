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
            <section className="container flex justify-between mt-[84px] mb-[135px]">
                <div className="">
                    <h1 className="font-extrabold text-7xl mb-[32px] h-[168px]">Feel Comfort <br /> Be Healthly</h1>
                    <p className="text-[#062126] opacity-70 font-medium text-[16px] mb-[52px]">Our professional team will take care of you, <br />we value your time and health.</p>
                    <div className="mb-[52px]">
                        <div className="bg-[#F4F5F4] w-[624px] h-[233px] rounded-[30px] p-[52px] gap-[32px] grid grid-cols-2">
                            <div className="flex">
                                <img className="w-[30px] h-[30px] mr-[12px]" src={calendar} alt="calendar" />
                                <div>
                                    <h5 className="text-[#062126] opacity-80 font-semibold text-[16px]">Make Appointment</h5>
                                    <p className="text-[#062126] opacity-70 font-medium text-[14px]">Select best time for you.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-[30px] h-[30px] mr-[12px]" src={user} alt="user" />
                                <div>
                                    <h5 className="text-[#062126] opacity-80 font-semibold text-[16px]">Find the Best Therapist</h5>
                                    <p className="text-[#062126] opacity-70 font-medium text-[14px]">Find therapist in a minute.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-[30px] h-[30px] mr-[12px]" src={location} alt="location" />
                                <div>
                                    <h5 className="text-[#062126] opacity-80 font-semibold text-[16px]">Visit the clinic</h5>
                                    <p className="text-[#062126] opacity-70 font-medium text-[14px]">Take care of your issues.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-[30px] h-[30px] mr-[12px]" src={message} alt="message" />
                                <div>
                                    <h5 className="text-[#062126] opacity-80 font-semibold text-[16px]">Ask Questions</h5>
                                    <p className="text-[#062126] opacity-70 font-medium text-[14px]">Ask question any time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-[52px]">
                        <Link to={'/contact-us'}>
                            <Button className='h-[67px] w-[297px] text-[20px] font-medium hover:bg-[#0F97B5]'>Make Appointment <img className="ml-2" src={arrow} alt="arrowIcon" /></Button>
                        </Link>
                        <div className="flex flex-col justify-around">
                            <p className="text-[#CF7D4E] font-medium text-[16px] mb-[12px]">Mon-Fri    10AM-9PM</p>
                            <p className="text-[#CF7D4E]  font-medium text-[16px]">Sat    10AM-2PM</p>
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