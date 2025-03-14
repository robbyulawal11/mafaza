import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import arrow from '../../assets/images/iconImage/arrowOrangee.svg';
import icon1 from '../../assets/images/therapistImage/therapist1.png';
import icon2 from '../../assets/images/therapistImage/therapist2.png';
import icon3 from '../../assets/images/therapistImage/therapist3.png';
import icon4 from '../../assets/images/therapistImage/therapist4.png';
import icon5 from '../../assets/images/therapistImage/therapist5.png';
import icon6 from '../../assets/images/therapistImage/therapist6.png';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const whyUsItem = [
    {
        icon: icon1,
        name: "Jane Nicholson, S.Or",
        description: "Praktisi Masseus",
        totalPatients: 500
    },
    {
        icon: icon2,
        name: "Dr. Alison Pretty, S.Or",
        description: "Konsultan Cedera Olahraga",
        totalPatients: 320
    },
    {
        icon: icon3,
        name: "Rebecca Flows, S.Or",
        description: "Praktisi Masseus",
        totalPatients: 900
    },
    {
        icon: icon4,
        name: "Maria Anderson, S.Or",
        description: "Praktisi Masseus",
        totalPatients: 500
    },
    {
        icon: icon5,
        name: "Dr. Derek Mendes, S.Or",
        description: "Konsultan Cedera Olahraga",
        totalPatients: 320
    },
    {
        icon: icon6,
        name: "Bob Singer, S.Or",
        description: "Praktisi Masseur",
        totalPatients: 500
    },
]


const OurQualifiedTherapistSection = () => {
    return ( 
        <section className="bg-[#CF7D4E] bg-opacity-5">
            <div className="container pt-[59px] pb-[140px]">
                <div className="mb-[84px] flex justify-between">
                    <h2 className="text-[#062126] font-bold text-[48px]">Terapis Kami yang Berkualitas</h2>
                    <Link to={'/therapists'}>
                        <Button className='h-[67px] w-[297px] text-[20px] font-medium bg-transparent border border-[#CF7D4E] text-[#CF7D4E] hover:bg-[#CF7D4E] hover:text-white' variant='outline'>Lihat Semua Terapis<img className="ml-2" src={arrow} alt="arrowIcon" /></Button>
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-[64px]">
                    {whyUsItem.map((item, i) => (
                    <Card key={i} className='w-[372px] h-[327px] border-0 bg-card hover:shadow-[#CF7D4E] hover:shadow-2xl'>
                        <CardHeader className='p-[32px]'>
                            <div className="w-[100px] h-[100px] rounded-full bg-[#24BEE0] bg-opacity-10 flex justify-center items-center">
                                <img className="w-[100px] h-[100px]" src={item.icon} alt={i} />
                            </div>
                            <CardTitle className='font-semibold text-[24px]'>{item.name}</CardTitle>
                            <CardDescription className='text-[#062126] opacity-60 font-medium text-[16px]'>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-[18px] text-[#0F97B5] mb-[12px]">+{item.totalPatients} pasien tertangani</p>
                            <p className='text-[#062126] opacity-60 font-medium text-[16px]'>Bengkel Terapi Mafaza, DIY</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default OurQualifiedTherapistSection;