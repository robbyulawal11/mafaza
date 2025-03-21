/* eslint-disable no-unused-vars */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import service1 from '../../assets/images/carouselImages/Rectangle5.png'
import service2 from '../../assets/images/carouselImages/Rectangle6.png'
import service3 from '../../assets/images/carouselImages/Rectangle7.png'
import service4 from '../../assets/images/carouselImages/Rectangle9.png'
import Autoplay from 'embla-carousel-autoplay'

const servicesItem = [
    {
        image: service1,
        label: "Terapi Massage Cedera Olahraga"
    },
    {
        image: service2,
        label: "Sport Massage"
    },
    {
        image: service3,
        label: "Bekam"
    },
    {
        image: service4,
        label: "Latihan Pasca Cedera"
    },
]

export function CarouselServices() {

  return (
    <section className="container mb-[140px]">
        <Carousel
            plugins={[
                Autoplay({
                delay: 5000,
                }),
            ]}
        opts={{
            align: "start",
        }}
        className="w-full"
        >
            <div className="mb-[84px]">
                <h2 className="text-[#062126] font-bold text-[48px]">Layanan Kami</h2>
            </div>
            <div>
                <CarouselContent>
                    {servicesItem.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <img className="h-[282px] mb-[32px]" src={`${item.image}`} alt={index} />
                            <h5 className="text-[#062126] opacity-80 font-medium text-[24px]">{item.label}</h5>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </div>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </section>
  )
}
