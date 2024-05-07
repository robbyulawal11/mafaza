import MakeAppointmentSectionForm from '@/components/MakeAppointmentSectionForm';
import heroService from '../../assets/images/heroImage/therapistHero.png';
import therapist1 from '../../assets/images/therapistImage/therapist10.png';
import therapist2 from '../../assets/images/therapistImage/therapist11.png';
import therapist3 from '../../assets/images/therapistImage/therapist12.png';
import therapist4 from '../../assets/images/therapistImage/therapist13.png';

const therapistItem = [
    {
        image: therapist1,
        name: "Jane Nicholson, S.Or",
        profession: "Leading Masseus",
        description: "Meg is a leading dentist in our central hospital. She has made the name in california Silicon Valley when presenting the new technology, today called “anti-cancer”.",

        totalPatients: 500,
        totalCertficate: 34
    },
    {
        image: therapist2,
        name: "Dr. Alison Pretty, S.Or",
        profession: "Consultant Sport Injury",
        description: "Meg is a leading dentist in our central hospital. She has made the name in california Silicon Valley when presenting the new technology, today called “anti-cancer”.",
        totalPatients: 320,
        totalCertficate: 34
    },
    {
        image: therapist3,
        name: "Rebecca Flows, S.Or",
        profession: "Leading Masseus",
        description: "Meg is a leading dentist in our central hospital. She has made the name in california Silicon Valley when presenting the new technology, today called “anti-cancer”.",
        totalPatients: 900,
        totalCertficate: 34
    },
    {
        image: therapist4,
        name: "Maria Anderson, S.Or",
        profession: "Leading Masseus",
        description: "Meg is a leading dentist in our central hospital. She has made the name in california Silicon Valley when presenting the new technology, today called “anti-cancer”.",
        totalPatients: 500,
        totalCertficate: 34
    },
]

const TherapistsPage = () => {
    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center mb-[70px]' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>Therapists</h2>
                </div>
            </section>
            <section className='mb-[140px]'>
                <div className='container flex flex-col justify-center items-center gap-[52px]'>
                    {therapistItem.map((item, i) => (
                        <div key={i} className='flex gap-[32px]'>
                        <img className='w-[372px] h-[372px] rounded-[30px]' src={item.image} alt="" />
                        <div className='bg-[#E5661E] bg-opacity-5 w-[170px] h-[372px] rounded-[30px] flex flex-col justify-center items-center'>
                            <div className='flex flex-col justify-center items-center mb-[52px]'>
                                <p className='text-[#CF7D4E] font-semibold text-[24px]'>{item.totalCertficate}</p>
                                <p className='text-[#062126] opacity-70 font-medium text-[16px]'>Certificates</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[#CF7D4E] font-semibold text-[24px]'>{item.totalPatients}</p>
                                <p className='text-[#062126] opacity-70 font-medium text-[16px]'>Happy Clients</p>
                            </div>
                        </div>
                        <div className='w-[372px] pt-[34px]'>
                            <h2 className='text-[#062126] font-semibold text-[24px] mb-[12px]'>{item.name}</h2>
                            <h5 className='text-[#CF7D4E] font-medium text-[16px] mb-[20px]'>{item.profession}</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[16px] mb-[32px]'>{item.description}</p>
                            <p className='text-[#062126] opacity-50 font-semibold text-[16px] mb-[14px]'>Availability</p>
                            <p className='text-[#24BEE0] font-medium text-[16px] mb-[12px]'>Mon-Fri    10AM-9PM</p>
                            <p className='text-[#24BEE0] font-medium text-[16px]'>Sat    10AM-2PM</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            <MakeAppointmentSectionForm/>
        </div>
     );
}
 
export default TherapistsPage;