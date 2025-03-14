/* eslint-disable no-unused-vars */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import person from "../../assets/images/iconImage/user.png";
import star from "../../assets/images/iconImage/Star.png";
import Autoplay from "embla-carousel-autoplay";
import arrow from "../../assets/images/iconImage/ArrowRight3.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

export function TestimonialSection() {
  const [allTestimony, allTestimonySet] = useState([]);

  async function getPosts() {
    try {
      const testimonials = await getDocs(collection(db, "testimony"));

      let sample = [];

      for (let x of testimonials.docs) {
        if (!x.exists()) return;
        sample.push(x.data());
      }

      allTestimonySet(sample);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="pb-[50px] pt-[73px] bg-[white]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full container mb-[100px]"
      >
        <div className="mb-[84px]">
          <h2 className="text-[#062126] font-bold text-[48px]">Testimoni</h2>
        </div>
        <div>
          <CarouselContent className="-ml-1">
            {allTestimony?.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
                <div className="w-[574px] h-auto bg-[#CF7D4E] bg-opacity-5 rounded-[20px] p-[32px] flex gap-x-[24px]">
                  <img className="h-[100px] w-[100px] mb-[32px] rounded-full" src={`${person}`} alt={index} />
                  <div>
                    <h5 className="text-[#062126] font-semibold text-[24px] mb-[12px]">{item.name}</h5>
                    <div className="flex gap-x-[4px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img key={index} className="mb-[20px]" src={star} alt="star" />
                      ))}
                    </div>
                    <p className="text-[#062126] opacity-70 font-regular text-[18px]">{item.testimony}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link className="flex gap-x-[32px] mb-[30px] justify-center items-center" to="/testimony">
        <Button className="h-[67px] w-[297px] text-[20px] font-medium hover:bg-[#0F97B5]">
          Berikan Testimoni <img className="ml-2" src={arrow} alt="arrowIcon" />
        </Button>
      </Link>
    </section>
  );
}
