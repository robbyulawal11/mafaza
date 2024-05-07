// import MakeAppointmentSectionForm from '@/components/MakeAppointmentSectionForm';
import heroService from '../../assets/images/heroImage/contactUsHero.png';
import { InputForm } from '@/components/MakeAppointmentSectionForm/FormPercobaan';

const ContactUsPage = () => {
    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>Contact Us</h2>
                </div>
            </section>
            <InputForm/>
        </div>
     );
}
 
export default ContactUsPage;