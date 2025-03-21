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
            <section className='flex bg-center h-[400px] justify-center w-auto items-center' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='flex bg-[#062126] bg-opacity-70 h-[118px] justify-center rounded-[30px] w-[375px] items-center'>
                    <h2 className='text-[48px] text-white font-bold'>Layanan Kami</h2>
                </div>
            </section>
            <section className='container mb-[68px] pt-[70px]'>
                <div className='grid grid-cols-2 justify-items-center gap-x-auto gap-y-[80px]'>
                    {serviceItem.map((item, i) => (
                        <div className='w-[574px]' key={i}>
                            <div>
                                <img className='h-[332px] w-[574px] mb-[32px]' src={item.image} alt={`service${i}`} />
                                <h5 className='text-[#062126] text-[24px] font-medium mb-[20px]'>{item.title}</h5>
                                <p className='text-[#062126] text-[16px] font-regular mb-[55px] opacity-70'>{item.description}</p>
                            </div>
                         </div>
                    ))}
                </div>
                <div className='flex justify-center w-full'>
                    <Card className='bg-[#12CCF4] bg-opacity-5 border-0 h-[200px] max-w-[1240px]'>
                        <CardHeader className='flex flex-row bg-[#24BEE0] h-[70px] rounded-t-[30px] gap-x-[12px] px-[32px] py-[20px]'>
                            <div>
                                <img className='h-[30px] w-[30px]' src={calendarWhite} alt="calendarwhiteIcon" />
                            </div>
                            <CardTitle className='text-white'>Waktu yang Tersedia</CardTitle>
                        </CardHeader>
                    <CardContent className='grid grid-cols-3 p-[32px]'>
                        <div className='flex gap-[12px]'>
                            <img className='h-[30px] w-[30px]' src={locationBlue} alt="locationBlue" />
                            <div className='flex flex-col w-full'>
                                <h5 className='text-[#062126] text-[16px] font-semibold opacity-80'>Unit 1 - Jl. Veteran 93 Warungboto, Umbulharjo</h5>
                                <div className='grid grid-cols-2'>
                                    <div className='text-[#062126] text-[14px] font-medium opacity-60'>
                                        <p>Senin - Sabtu</p>
                                    </div>
                                    <div className='text-[#062126] text-[14px] font-medium opacity-80'>
                                        <p>09.00 - 21.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[12px]'>
                            <img className='h-[30px] w-[30px]' src={locationBlue} alt="locationBlue" />
                            <div className='flex flex-col w-full'>
                                <h5 className='text-[#062126] text-[16px] font-semibold opacity-80'>Unit 2 - Selatan Masjid Al Jami RT 34 RW 08 Warungboto, Umbulharjo</h5>
                                <div className='grid grid-cols-2'>
                                    <div className='text-[#062126] text-[14px] font-medium opacity-60'>
                                        <p>Senin - Minggu</p>
                                    </div>
                                    <div className='text-[#062126] text-[14px] font-medium opacity-80'>
                                        <p>09.00 - 16.30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[12px]'>
                            <img className='h-[30px] w-[30px]' src={locationBlue} alt="locationBlue" />
                            <div className='flex flex-col w-full'>
                                <h5 className='text-[#062126] text-[16px] font-semibold opacity-80'>Unit 3 - Utara MAsjid Al Jami RT 34 RW 08 Warungboto, Umbulharjo</h5>
                                <div className='grid grid-cols-2'>
                                    <div className='text-[#062126] text-[14px] font-medium opacity-60'>
                                        <p>Senin - Minggu</p>
                                    </div>
                                    <div className='text-[#062126] text-[14px] font-medium opacity-80'>
                                        <p>09.00 - 16.30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                </div>
            </section>
            <WhyUsSection/>
            <StatisticMafazaSection/>
            <MakeAppointmentSectionForm/>
        </div>
     );
}
 
export default OurServicesPage;