import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import icon1 from '../../assets/images/iconImage/dna.png';
import icon2 from '../../assets/images/iconImage/shield.png';
import icon3 from '../../assets/images/iconImage/medicine.png';
import icon4 from '../../assets/images/iconImage/microscop.png';
import icon5 from '../../assets/images/iconImage/shoap.png';
import icon6 from '../../assets/images/iconImage/bike.png';


const whyUsItem = [
    {
        icon: icon1,
        title: "Anamnesis",
        description: "Kami bangga mengumumkan bahwa kami menyediakan anamnesis berkualitas tinggi untuk masalah Anda"
    },
    {
        icon: icon2,
        title: "Asuransi",
        description: "Anda bisa mendapatkan asuransi kami untuk tidak menanggung kesulitan keuangan apa pun di masa mendatang"
    },
    {
        icon: icon3,
        title: "Dukungan Terapis Berkualitas",
        description: "Kami memiliki sejumlah besar dukungan terapis berkualitas tinggi"
    },
    {
        icon: icon4,
        title: "Terverifikasi",
        description: "Klinik telah melalui proses verifikasi atau peninjauan oleh badan sertifikasi kesehatan"
    },
    {
        icon: icon5,
        title: "24/7 Bersih",
        description: "Kami peduli untuk memiliki kamar yang bersih dan aman bagi pasien kami"
    },
    {
        icon: icon6,
        title: "Latihan Terapi",
        description: "Terapis kami akan membantu Anda mendapatkan rutinitas pelatihan pribadi untuk mendapatkan hasil terbaik"
    },
]

const WhyUsSection = () => {
    return ( 
        <section className="container mb-[157px]">
            <div className="mb-[84px]">
                <h2 className="text-[#062126] font-bold text-[48px]">Mengapa Memilih Kami?</h2>
            </div>
            <div className="grid grid-cols-3 gap-[64px]">
                {whyUsItem.map((item, i) => (
                <Card key={i} className='w-[372px] h-[304px] border-0 bg-transparent hover:bg-card hover:shadow-[#0F97B5] hover:shadow-2xl'>
                    <CardHeader className='p-[32px]'>
                        <div className="w-[100px] h-[100px] rounded-full bg-[#24BEE0] bg-opacity-10 flex justify-center items-center">
                            <img className="w-[50px] h-[50px]" src={item.icon} alt={i} />
                        </div>
                        <CardTitle className='font-bold text-[24px]'>{item.title}</CardTitle>
                        <CardDescription className='text-[#062126] opacity-40 font-regular text-[16px]'>{item.description}</CardDescription>
                    </CardHeader>
                </Card>
                ))}
            </div>
        </section>
     );
}
 
export default WhyUsSection;