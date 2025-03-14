import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

const StatisticMafazaSection = () => {
  const [allTestimony, allTestimonySet] = useState([]);

  async function getPosts() {
    try {
      const testimonials = await getDocs(collection(db, "testimony"));

      let sample = [];

      for (let x of testimonials.docs) {
        if (!x.exists()) return;
        sample.push(x.data());
      }
      sample.map(async (item) => {
        allTestimonySet((prevItems) => [...prevItems, item.sentiment]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const positiveCount = allTestimony.filter(item =>
    ["positive\n", "positif\n"].includes(item.toLowerCase())
  ).length;
  const presentaseFeedbackTag = 100 * positiveCount / allTestimony.length;

  return (
    <section className="bg-[#062126] h-[338px] flex items-center">
      <div className="container flex justify-center items-center gap-[64px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">{Math.trunc(presentaseFeedbackTag)}%</p>
          <p className="text-[#12CCF4] font-medium text-[24px]">Ulasan Positif</p>
          <p className="text-red-400 font-light text-[16px] text-center">Persentase ini dihitung oleh AI berdasarkan analisis sentimen ulasan</p>
        </div>
        <hr className="border-[#FFFFFF] border-1 w-[198px] rotate-90" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">300+</p>
          <p className="text-[#12CCF4] font-medium text-[24px] text-center">Pasien  Bahagia Setiap Minggu</p>
        </div>
        <hr className="border-[#FFFFFF] border-1 w-[198px] rotate-90" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">43</p>
          <p className="text-[#12CCF4] font-medium text-[24px] text-center">Terapi Profesional</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticMafazaSection;
