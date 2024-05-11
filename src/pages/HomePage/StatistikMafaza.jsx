import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";

const StatisticMafazaSection = () => {
  const [allTestimony, allTestimonySet] = useState([]);
  const genAI = new GoogleGenerativeAI("AIzaSyBwkdh57r4ZFaMwWBVttv9j_horqDy2h_A");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  async function getPosts() {
    try {
      const testimonials = await getDocs(collection(db, "testimony"));

      let sample = [];
      let testi = [];

      for (let x of testimonials.docs) {
        if (!x.exists()) return;
        sample.push(x.data());
      }
      sample.map(async (item) => {
        testi.push(item.testimony);
      });
      for (let y of testi) {
        const result = await model.generateContent(
          `You'll be given a tweet, and your job is to classify its sentiment as positive, neutral, or negative and respond with just one word.
          ${y}`
        );
        const response = await result.response;
        const text = response.text();
        allTestimonySet((prevItems) => [...prevItems, text]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const presentaseFeedbackTag = 100 * (allTestimony.filter((item) => (item === "Positive") | "Positif").length / allTestimony.length);

  return (
    <section className="bg-[#062126] h-[338px] flex items-center">
      <div className="container flex justify-center items-center gap-[64px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">{Math.trunc(presentaseFeedbackTag)}%</p>
          <p className="text-[#12CCF4] font-medium text-[24px]">Positif Feedback</p>
        </div>
        <hr className="border-[#FFFFFF] border-1 w-[198px] rotate-90" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">2,300+</p>
          <p className="text-[#12CCF4] font-medium text-[24px]">Happy Patients a week</p>
        </div>
        <hr className="border-[#FFFFFF] border-1 w-[198px] rotate-90" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">43</p>
          <p className="text-[#12CCF4] font-medium text-[24px]">Professional Therapist</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticMafazaSection;
