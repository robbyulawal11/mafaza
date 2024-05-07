import heroService from '../../assets/images/heroImage/heroService.png';
import calendarWhite from '../../assets/images/iconImage/calendarWhite.png';
import locationBlue from '../../assets/images/iconImage/locationBlue.png';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import service1 from '../../assets/images/carouselImages/Rectangle5.png';
import service2 from '../../assets/images/carouselImages/Rectangle6.png';
import service3 from '../../assets/images/carouselImages/Rectangle7.png';
import service4 from '../../assets/images/carouselImages/Rectangle9.png';
import WhyUsSection from '../HomePage/WhyUs';
import StatisticMafazaSection from '../HomePage/StatistikMafaza';
import MakeAppointmentSectionForm from '@/components/MakeAppointmentSectionForm';

const serviceItem =[
    {
        image: service1,
        title: "Sport Massage",
        description: "Sports massage is a type of massage specifically designed to help athletes improve their performance, speed muscle recovery after training or competition, and prevent injury. These massage techniques were developed to target muscles frequently used in sporting activities.",
    },
    {
        image: service2,
        title: "Sport Injury",
        description: "Sports injury therapy is a rehabilitation approach that aims to accelerate an athlete's recovery and restore physical function through various therapeutic techniques. Specialized therapists in this area focus on evaluating injuries, planning individualized rehabilitation programs, and preventing future injuries.",
    },
    {
        image: service3,
        title: "Bekam",
        description: "Cupping is a traditional healing technique that involves placing a special cup on the skin to create a vacuum, which aims to increase blood circulation in the area. This method is often used to relieve pain, reduce inflammation, and as a form of relaxation and overall health restoration.",
    },
    {
        image: service4,
        title: "Excercise Therapy",
        description: "Exercise therapy is an exercise program specifically designed to help patients recover from injury or to manage chronic conditions. Exercises can include stretching, strength, and cardiovascular activities that are monitored by a therapist to ensure safety and effectiveness in the healing process.",
    },
]

const OurServicesPage = () => {
    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>Our Services</h2>
                </div>
            </section>
            <section className='container pt-[70px] mb-[68px]'>
                <div className='grid grid-cols-2 gap-x-auto gap-y-[80px] justify-items-center'>
                    {serviceItem.map((item, i) => (
                        <div className='w-[574px]' key={i}>
                            <div>
                                <img className='w-[574px] h-[332px] mb-[32px]' src={item.image} alt={`service${i}`} />
                                <h5 className='text-[#062126] font-medium text-[24px] mb-[20px]'>{item.title}</h5>
                                <p className='text-[#062126] opacity-70 font-regular text-[16px] mb-[55px]'>{item.description}</p>
                            </div>
                            <div>
                                <Card className='w-[574px] h-[240px] bg-[#12CCF4] bg-opacity-5 border-0'>
                                    <CardHeader className='bg-[#24BEE0] rounded-t-[30px] flex flex-row gap-x-[12px] h-[70px] py-[20px] px-[32px]'>
                                        <div>
                                            <img className='w-[30px] h-[30px]' src={calendarWhite} alt="calendarwhiteIcon" />
                                        </div>
                                        <CardTitle className='text-white'>Available Times</CardTitle>
                                    </CardHeader>
                                <CardContent className='p-[32px] flex justify-between'>
                                    <div className='flex gap-[12px]'>
                                        <img className='w-[30px] h-[30px]' src={locationBlue} alt="locationBlue" />
                                        <div className='flex flex-col w-[192px]'>
                                            <h5 className='text-[#062126] opacity-80 font-semibold text-[16px]'>Masjid Al-Jami, Warungboto, DIY</h5>
                                            <div className='grid grid-cols-2'>
                                                <div className='text-[#062126] opacity-60 font-medium text-[14px]'>
                                                    <p>Mon-Fri</p>
                                                    <p>Weekends</p>
                                                </div>
                                                <div className='text-[#062126] opacity-80 font-medium text-[14px]'>
                                                    <p>11.00 - 20.00</p>
                                                    <p>12.00 - 14.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[12px]'>
                                        <img className='w-[30px] h-[30px]' src={locationBlue} alt="locationBlue" />
                                        <div className='flex flex-col w-[192px]'>
                                            <h5 className='text-[#062126] opacity-80 font-semibold text-[16px]'>Jl. Veteran No. 93, Warungboto, DIY</h5>
                                            <div className='grid grid-cols-2'>
                                                <div className='text-[#062126] opacity-60 font-medium text-[14px]'>
                                                    <p>Mon-Fri</p>
                                                    <p>Weekends</p>
                                                </div>
                                                <div className='text-[#062126] opacity-80 font-medium text-[14px]'>
                                                    <p>11.00 - 20.00</p>
                                                    <p>12.00 - 14.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                </Card>
                            </div>
                         </div>
                    ))}
                </div>
            </section>
            <WhyUsSection/>
            <StatisticMafazaSection/>
            <MakeAppointmentSectionForm/>
        </div>
     );
}
 
export default OurServicesPage;