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
        description: "We are proud to announce that we provide high quality anamnesis for your issue."
    },
    {
        icon: icon2,
        title: "Insurance",
        description: "You can get our insurance to not care of any financial difficulties in future."
    },
    {
        icon: icon3,
        title: "Massage Support",
        description: "We have a huge amount of high quality massage support."
    },
    {
        icon: icon4,
        title: "Verified",
        description: "The clinic has gone through a verification or review process by a health certification body"
    },
    {
        icon: icon5,
        title: "24/7 Clean",
        description: "We care about having a clean and safe rooms for our patients"
    },
    {
        icon: icon6,
        title: "Exercise Therapy",
        description: "Our therapist will help you get personal training routine to get the best results"
    },
]

const WhyUsSection = () => {
    return ( 
        <section className="container mb-[157px]">
            <div className="mb-[84px]">
                <h2 className="text-[#062126] font-bold text-[48px]">Why us?</h2>
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