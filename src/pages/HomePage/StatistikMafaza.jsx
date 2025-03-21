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
    <section className="flex bg-[#062126] h-[338px] items-center">
      <div className="container flex justify-center gap-[64px] items-stretch">
        <div className="flex flex-1 flex-col justify-center items-center">
          <p className="text-[64px] text-white font-extrabold">{Math.trunc(presentaseFeedbackTag)}%</p>
          <p className="text-[#12CCF4] text-[24px] font-medium">Ulasan Positif</p>
          <p className="text-[16px] text-center text-red-400 font-light">Persentase ini dihitung oleh AI berdasarkan analisis sentimen ulasan</p>
        </div>
        <div className="flex items-center">
          <hr className="bg-white h-[80%] w-[1px]" />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <p className="text-[64px] text-white font-extrabold">210+</p>
          <p className="text-[#12CCF4] text-[24px] text-center font-medium">Pasien  Bahagia Setiap Bulan</p>
        </div>
        <div className="flex items-center">
          <hr className="bg-white h-[80%] w-[1px]" />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <p className="text-[64px] text-white font-extrabold">32</p>
          <p className="text-[#12CCF4] text-[24px] text-center font-medium">Terapis Profesional</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticMafazaSection;
