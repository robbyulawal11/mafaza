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
                    <h2 className='text-white font-bold text-[48px]'>Tentang Kami</h2>
                </div>
            </section>
            <section className='container mb-[123px]'>
                <div className='flex justify-center items-center relative'>
                    <img className='absolute -top-14 left-48' src={coma} alt="quote" />
                    <p className='text-[#062126] opacity-70 font-regular text-[20px] max-w-[776px] text-justify'>Klinik Terapi Pijat Cedera kami terletak di jantung kota, menawarkan ketenangan dan pemulihan bagi mereka yang menderita cedera atau membutuhkan pemulihan pascaoperasi. Sejak didirikan, klinik ini telah menjadi tujuan utama bagi individu yang mencari pendekatan terapi yang efektif dan penuh perhatian untuk mengatasi cedera fisik dan memulihkan mobilitas. <br /> <br />
                        Di klinik kami, setiap pasien dirawat dengan pendekatan holistik dan personal. Kami memahami bahwa setiap cedera bersifat unik dan memerlukan pemahaman mendalam tentang kondisi dan kebutuhan individu. Oleh karena itu, kami meluangkan waktu untuk benar-benar mengenal pasien kami, mendengarkan cerita mereka, dan memahami tujuan mereka, sehingga kami dapat merancang rencana terapi yang paling tepat. <br /> <br />
                        Pengalaman kami dalam terapi pijat mencakup berbagai teknik yang telah terbukti efektif dalam mengurangi rasa sakit, meningkatkan rentang gerak, dan mempercepat proses penyembuhan. Teknik-teknik ini tidak hanya berfokus pada area yang cedera tetapi juga pada tubuh secara keseluruhan, untuk mendukung keseimbangan dan kesehatan umum, pemulihan, dan relaksasi.</p>
                </div>
            </section>
            <section className='bg-white pb-[140px]'>
                <div className='container'>
                    <h2 className='text-[#062126] font-bold text-[48px] mb-[84px]'>Pencapaian Kami</h2>
                    <div className='flex gap-[101px] mb-[84px]'>
                        <img className='w-[473px] h-[362px]' src={certificate3} alt="certificate1" />
                        <div>
                            <h5 className='text-[#062126] font-semibold text-[36px] mb-[9px]'>Klinik Terapi Terbaik 2020</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[20px]'>Klinik Terapis Terbaik Tahun 2020 merupakan penghargaan yang diberikan kepada klinik terapi yang menunjukkan layanan dan inovasi terbaik di bidang terapi selama tahun tersebut. Klinik-klinik ini biasanya dinilai berdasarkan beberapa kriteria seperti efektivitas metode terapi yang digunakan, kualitas layanan kepada pasien, kepuasan pasien, inovasi dalam praktik terapi, dan kontribusi terhadap pengembangan profesi terapi.</p>
                        </div>
                    </div>
                    <div className='flex gap-[101px] mb-[84px]'>
                        <div>
                            <h5 className='text-[#062126] font-semibold text-[36px] mb-[9px]'>COVID-19 Cure Participants</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[20px]'>COVID-19 Cure Participants merujuk pada individu yang terlibat dalam uji klinis yang bertujuan menemukan pengobatan yang efektif terhadap virus COVID-19. Partisipan ini memberikan kontribusi penting bagi penelitian medis dengan memungkinkan peneliti menguji keamanan dan kemanjuran obat atau terapi baru terhadap virus.</p>
                        </div>
                        <img className='w-[473px] h-[362px]' src={certificate2} alt="certificate1" />
                    </div>
                    <div className='flex gap-[101px]'>
                        <img className='w-[473px] h-[362px]' src={certificate1} alt="certificate1" />
                        <div>
                            <h5 className='text-[#062126] font-semibold text-[36px] mb-[9px]'>Best Injury Treatment Product Delivery 2021</h5>
                            <p className='text-[#062126] opacity-70 font-regular text-[20px]'>Best Injury Treatment Product Delivery 2021 merupakan penghargaan yang diberikan kepada perusahaan yang menjadi pelopor dalam penyediaan produk perawatan cedera dengan layanan pengiriman terbaik, serta menawarkan solusi yang efisien dan berkualitas untuk memenuhi kebutuhan pemulihan pasien. Penghargaan ini mengakui komitmen perusahaan untuk menyediakan layanan yang cepat, andal, dan tanggap dalam menyediakan produk perawatan yang dibutuhkan bagi mereka yang membutuhkan.</p>
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