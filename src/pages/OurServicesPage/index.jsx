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
        image: service2,
        title: "Sport Massage",
        description: "Pijat olahraga adalah jenis pijat yang dirancang khusus untuk membantu atlet meningkatkan performa mereka, mempercepat pemulihan otot setelah latihan atau kompetisi, dan mencegah cedera. Teknik pijat ini dikembangkan untuk menargetkan otot-otot yang sering digunakan dalam kegiatan olahraga.",
    },
    {
        image: service1,
        title: "Terapi Massage Cedera Olahraga",
        description: "Terapi cedera olahraga adalah pendekatan rehabilitasi yang bertujuan untuk mempercepat pemulihan dan memulihkan fungsi fisik melalui berbagai teknik terapi. Terapis spesialis di bidang ini berfokus pada evaluasi cedera, perencanaan program rehabilitasi, dan pencegahan cedera di masa mendatang.",
    },
    {
        image: service3,
        title: "Bekam",
        description: "Bekam adalah teknik penyembuhan tradisional yang melibatkan penempatan cangkir khusus pada kulit untuk menciptakan ruang hampa, yang bertujuan untuk meningkatkan sirkulasi darah di area tersebut. Metode ini sering digunakan untuk menghilangkan rasa sakit, mengurangi peradangan, dan sebagai bentuk relaksasi serta pemulihan kesehatan secara keseluruhan.",
    },
    {
        image: service4,
        title: "Latihan Pasca Cedera",
        description: "Latihan Pasca Sedera adalah program latihan yang dirancang khusus untuk membantu pasien pulih dari cedera atau mengelola kondisi kronis. Latihan dapat mencakup peregangan, kekuatan, dan aktivitas kardiovaskular yang dipantau oleh terapis untuk memastikan keamanan dan efektivitas dalam proses penyembuhan.",
    },
]

const OurServicesPage = () => {
    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>Layanan Kami</h2>
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
                                <Card className='w-[574px] h-[370px] bg-[#12CCF4] bg-opacity-5 border-0'>
                                    <CardHeader className='bg-[#24BEE0] rounded-t-[30px] flex flex-row gap-x-[12px] h-[70px] py-[20px] px-[32px]'>
                                        <div>
                                            <img className='w-[30px] h-[30px]' src={calendarWhite} alt="calendarwhiteIcon" />
                                        </div>
                                        <CardTitle className='text-white'>Waktu yang Tersedia</CardTitle>
                                    </CardHeader>
                                <CardContent className='p-[16px]'>
                                    <div className='flex gap-[12px] mb-[10px]'>
                                        <img className='w-[30px] h-[30px]' src={locationBlue} alt="locationBlue" />
                                        <div className='flex flex-col w-full'>
                                            <h5 className='text-[#062126] opacity-80 font-semibold text-[16px]'>Unit 1 - Jl. Veteran 93 Warungboto, Umbulharjo</h5>
                                            <div className='grid grid-cols-2'>
                                                <div className='text-[#062126] opacity-60 font-medium text-[14px]'>
                                                    <p>Senin - Sabtu</p>
                                                    <p>Minggu</p>
                                                </div>
                                                <div className='text-[#062126] opacity-80 font-medium text-[14px]'>
                                                    <p>09.00 - 21.00</p>
                                                    <p>09.00 - 16.30</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[12px] mb-[10px]'>
                                        <img className='w-[30px] h-[30px]' src={locationBlue} alt="locationBlue" />
                                        <div className='flex flex-col w-full'>
                                            <h5 className='text-[#062126] opacity-80 font-semibold text-[16px]'>Unit 2 - Selatan Masjid Al Jami RT 34 RW 08 Warungboto, Umbulharjo</h5>
                                            <div className='grid grid-cols-2'>
                                                <div className='text-[#062126] opacity-60 font-medium text-[14px]'>
                                                    <p>Senin - Sabtu</p>
                                                    <p>Minggu</p>
                                                </div>
                                                <div className='text-[#062126] opacity-80 font-medium text-[14px]'>
                                                    <p>09.00 - 21.00</p>
                                                    <p>09.00 - 16.30</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[12px]'>
                                        <img className='w-[30px] h-[30px]' src={locationBlue} alt="locationBlue" />
                                        <div className='flex flex-col w-full'>
                                            <h5 className='text-[#062126] opacity-80 font-semibold text-[16px]'>Unit 3 - Utara MAsjid Al Jami RT 34 RW 08 Warungboto, Umbulharjo</h5>
                                            <div className='grid grid-cols-2'>
                                                <div className='text-[#062126] opacity-60 font-medium text-[14px]'>
                                                    <p>Senin - Sabtu</p>
                                                    <p>Minggu</p>
                                                </div>
                                                <div className='text-[#062126] opacity-80 font-medium text-[14px]'>
                                                    <p>09.00 - 21.00</p>
                                                    <p>09.00 - 16.30</p>
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