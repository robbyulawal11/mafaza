import MakeAppointmentSectionForm from '@/components/MakeAppointmentSectionForm';
import heroService from '../../assets/images/heroImage/therapistHero.png';
import therapist1 from '../../assets/images/therapistImage/therapist10.png';
import therapist2 from '../../assets/images/therapistImage/therapist11.png';
import therapist3 from '../../assets/images/therapistImage/therapist12.png';
import therapist4 from '../../assets/images/therapistImage/therapist13.png';
import therapist5 from '../../assets/images/therapistImage/therapist14.png';
import therapist6 from '../../assets/images/therapistImage/therapist15.png';

const therapistItem = [
    {
        image: therapist6,
        name: "Eko Budianto, S.Or.",
        profession: "Konsultan dan Praktisi Masseur",
        description: "",
        totalPatients: 2545,
        totalCertficate: 21
    },
    {
        image: therapist1,
        name: "Hariza Dwi A.P., S.Or.",
        profession: "Praktisi Masseur",
        description: "",
        totalPatients: 940,
        totalCertficate: 5
    },
    {
        image: therapist2,
        name: "M. Farhan Haqiqi, S.Or.",
        profession: "Praktisi Masseur",
        description: "",
        totalPatients: 900,
        totalCertficate: 5
    },
    {
        image: therapist5,
        name: "Alam Cahaya P., S.Or.",
        profession: "Konsultan dan Praktisi Masseur",
        description: "",
        totalPatients: 920,
        totalCertficate: 7
    },
    {
        image: therapist4,
        name: "Evi Noor Khasanah, M.Or.",
        profession: "Konsultan dan Praktisi Masseus",
        description: "",
        totalPatients: 1050,
        totalCertficate: 11
    },
    {
        image: therapist3,
        name: "Rizqi Kartika R., S.Or.",
        profession: "Praktisi Masseus",
        description: "",
        totalPatients: 500,
        totalCertficate: 4
    },
]

const TherapistsPage = () => {
    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center mb-[70px]' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>Terapis</h2>
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
                                <p className='text-[#062126] opacity-70 font-medium text-[16px]'>Sertifikat</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[#CF7D4E] font-semibold text-[24px]'>{item.totalPatients}</p>
                                <p className='text-[#062126] opacity-70 font-medium text-[16px]'>Pasien Bahagia</p>
                            </div>
                        </div>
                        <div className='w-[372px] pt-[34px]'>
                            <h2 className='text-[#062126] font-semibold text-[24px] mb-[12px]'>{item.name}</h2>
                            <h5 className='text-[#CF7D4E] font-medium text-[16px] mb-[20px]'>{item.profession}</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[16px] mb-[32px]'>{item.description}</p>
                            <p className='text-[#062126] opacity-50 font-semibold text-[16px] mb-[14px]'>Waktu yang Tersedia</p>
                            <p className='text-[#24BEE0] font-medium text-[16px] mb-[12px]'>Senin - Sabtu 09.00 - 21.00</p>
                            <p className='text-[#24BEE0] font-medium text-[16px]'>Minggu    09.00 - 16.30</p>
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