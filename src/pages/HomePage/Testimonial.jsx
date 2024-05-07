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
  import star from '../../assets/images/iconImage/Star.png'
  import Autoplay from 'embla-carousel-autoplay'
  
  const servicesItem = [
      {
          image: service1,
          name: "Sofia Potter",
          star:5,
          testimoni:"These guys are incredible to work with. Like seriously! They did everything so good, that I did not even imagine it would come up this awesome! Really looking forward to working with them again."
      },
      {
          image: service2,
          name: "Sofia Potter",
          star:5,
          testimoni:"These guys are incredible to work with. Like seriously! They did everything so good, that I did not even imagine it would come up this awesome! Really looking forward to working with them again."
      },
      {
          image: service3,
          name: "Ganes Arwana",
          star:4,
          testimoni:"These guys are incredible to work with. Like seriously! They did everything so good, that I did not even imagine it would come up this awesome! Really looking forward to working with them again."
      },
      {
          image: service4,
          name: "Putri Lestari",
          star:4,
          testimoni:"These guys are incredible to work with. Like seriously! They did everything so good, that I did not even imagine it would come up this awesome! Really looking forward to working with them again."
      },
  ]

  
  
  export function TestimonialSection() {

    return (
      <section className="pb-[140px] pt-[73px] bg-[white]">
          <Carousel
            plugins={[
                Autoplay({
                delay: 5000,
                }),
            ]}
            className="w-full container"
          >
              <div className="mb-[84px]">
                  <h2 className="text-[#062126] font-bold text-[48px]">Testimonials</h2>
              </div>
              <div>
                  <CarouselContent className="-ml-1">
                      {servicesItem.map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
                          <div className="w-[574px] h-[277px] bg-[#CF7D4E] bg-opacity-5 rounded-[20px] p-[32px] flex gap-x-[24px]">
                              <img className="h-[100px] w-[100px] mb-[32px] rounded-full" src={`${item.image}`} alt={index} />
                              <div>
                                <h5 className="text-[#062126] font-semibold text-[24px] mb-[12px]">{item.name}</h5>
                                <div className="flex gap-x-[4px]">
                                    {Array.from({ length: `${item.star}` }).map((_, index) => (
                                        <img key={index} className="mb-[20px]" src={star} alt="star" />
                                    ))}
                                </div>
                                <p className="text-[#062126] opacity-70 font-regular text-[18px]">{item.testimoni}</p>
                              </div>
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
  