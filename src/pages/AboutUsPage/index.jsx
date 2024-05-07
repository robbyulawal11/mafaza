import heroService from '../../assets/images/heroImage/aboutUsHero.png';
import coma from '../../assets/images/iconImage/format_quote.png';
import certificate1 from '../../assets/images/certificateImage/certificate1.png';
import certificate2 from '../../assets/images/certificateImage/certificate2.png';
import certificate3 from '../../assets/images/certificateImage/certificate3.png';
import OurQualifiedTherapistSection from '../HomePage/OurQualifiedTherapist';
import StatisticMafazaSection from '../HomePage/StatistikMafaza';
import { TestimonialSection } from '../HomePage/Testimonial';
import MakeAppointmentSectionForm from '@/components/MakeAppointmentSectionForm';


const AboutUsPage = () => {
    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center mb-[87px]' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>About Us</h2>
                </div>
            </section>
            <section className='container mb-[123px]'>
                <div className='flex justify-center items-center relative'>
                    <img className='absolute -top-14 left-48' src={coma} alt="quote" />
                    <p className='text-[#062126] opacity-70 font-regular text-[20px] max-w-[776px] text-justify'>Our Injury Massage Therapy Clinic is located in the heart of the city, offering an oasis of calm and recovery for those suffering from injuries or needing post-operative recovery. Since its inception, the clinic has been a premier destination for individuals seeking an effective and caring therapeutic approach to address physical injuries and restore mobility. <br /> <br />
                        At our clinic, every patient is treated with a holistic and personalized approach. We understand that each injury is unique and requires an in-depth understanding of the individuals condition and their needs. Therefore, we spend time really getting to know our patients, listening to their stories, and understanding their goals, so we can design the most appropriate therapy plan. <br /> <br />
                        Our experience in massage therapy includes a variety of techniques that have been proven effective in reducing pain, increasing range of motion, and speeding the healing process. These techniques focus not only on the injured area but also on the body as a whole, to support balance and general health. recovery and relaxation.</p>
                </div>
            </section>
            <section className='bg-white pb-[140px]'>
                <div className='container'>
                    <h2 className='text-[#062126] font-bold text-[48px] mb-[84px]'>Our Achievement</h2>
                    <div className='flex gap-[101px] mb-[84px]'>
                        <img className='w-[473px] h-[362px]' src={certificate3} alt="certificate1" />
                        <div>
                            <h5 className='text-[#062126] font-semibold text-[36px] mb-[9px]'>Best Therapist Clinic of 2020</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[20px]'>Best Therapist Clinic of 2020 is an award given to therapy clinics that demonstrate the best service and innovation in the field of therapy during that year. These clinics are usually assessed based on several criteria such as the effectiveness of the therapeutic methods used, quality of service to patients, patient satisfaction, innovation in therapeutic practice, and contribution to the development of the therapeutic profession.</p>
                        </div>
                    </div>
                    <div className='flex gap-[101px] mb-[84px]'>
                        <div>
                            <h5 className='text-[#062126] font-semibold text-[36px] mb-[9px]'>COVID-19 Cure Participants</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[20px]'>COVID-19 Cure Participants refer to individuals involved in clinical trials aimed at finding effective treatments against the COVID-19 virus. These participants make important contributions to medical research by enabling researchers to test the safety and efficacy of new drugs or therapies against the virus.</p>
                        </div>
                        <img className='w-[473px] h-[362px]' src={certificate2} alt="certificate1" />
                    </div>
                    <div className='flex gap-[101px]'>
                        <img className='w-[473px] h-[362px]' src={certificate1} alt="certificate1" />
                        <div>
                            <h5 className='text-[#062126] font-semibold text-[36px] mb-[9px]'>Best Injury Treatment Product 
Delivery 2021</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[20px]'>Best Injury Treatment Product Delivery 2021 is an award given to companies that are leading in providing injury treatment products with the best delivery service, offering efficient and quality solutions to meet patient recovery needs. This award recognizes the companys commitment to providing fast, reliable and responsive service in providing necessary care products to those in need.</p>
                        </div>
                    </div>
                </div>
            </section>
            <OurQualifiedTherapistSection/>
            <StatisticMafazaSection/>
            <TestimonialSection/>
            <MakeAppointmentSectionForm/>
        </div>
     );
}
 
export default AboutUsPage;