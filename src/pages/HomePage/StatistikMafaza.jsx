const StatisticMafazaSection = () => {
  return (
    <section className="bg-[#062126] h-[338px] flex items-center">
      <div className="container flex justify-center items-center gap-[64px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-extrabold text-[64px]">99%</p>
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
