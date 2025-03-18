import { Button } from "../ui/button";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/096-twitter.png";
import linkedin from "../../assets/images/052-linkedin.png";
import fb from "../../assets/images/023-facebook.png";
import { Link } from "react-router-dom";

const exploreItem = [
  {
    label: "Layanan",
    link: "/our-services",
  },
  {
    label: "Tentang Kami",
    link: "/about-us",
  },
  {
    label: "FAQs",
    link: "/contact-us",
  },
  {
    label: "Kontak",
    link: "/contact-us",
  },
];

const legalItem = [
  {
    label: "Privacy Policy",
    link: "/",
  },
  {
    label: "Terms of Services",
    link: "/",
  },
  {
    label: "Dokumentasi",
    link: "/",
  },
  {
    label: "Pusat Bantuan",
    link: "/contact-us",
  },
];

const Footer = () => {
  return (
    <div className="container bottom-0 mb-[64px] pt-[53px]">
      <section className="mb-[13px]">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <Link className="mb-[29.65px]" to="/">
              <div className="flex gap-2 justify-center items-center">
                <img className="w-[42.35px] h-[42.35px]" src={logo} alt="logo" />
                <h1 className="text-[20px] font-medium">
                  Mafaza<span className="text-[#24BEE0]">.</span>
                </h1>
              </div>
            </Link>
            <div className="max-w-[296px] mb-[5px]">
              <p className="text-[18px] text-[#062126] opacity-60 font-medium">Masjid Al-Jami, Selatan, Gg. Hidayah, RT.34/RW.08, Warungboto, Kec. Umbulharjo, Kota Yogyakarta, DIY 55164</p>
            </div>
            <div className="mb-[5px]">
              <p className="text-[18px] text-[#062126] font-medium">Call: +62 878-4358-2677</p>
            </div>
            <div className="flex justify-start items-center gap-x-[19px]">
              <div className="bg-[#062126] rounded-full bg-opacity-10 w-[50px] h-[50px] cursor-pointer flex items-center justify-center">
                <img className="w-[20px]" src={twitter} alt="twitter" />
              </div>
              <div className="bg-[#062126] rounded-full bg-opacity-10 w-[50px] h-[50px] cursor-pointer flex items-center justify-center">
                <img className="w-[20px]" src={fb} alt="twitter" />
              </div>
              <div className="bg-[#062126] rounded-full bg-opacity-10 w-[50px] h-[50px] cursor-pointer flex items-center justify-center">
                <img className="w-[20px]" src={linkedin} alt="twitter" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-semibold mb-[36px]">Explore</h2>
            {exploreItem.map((item, i) => (
              <div className="gap-y-[20px] mb-[5px]" key={i}>
                <Link to={item.link}>
                  <p className="text-[#062126] opacity-60 font-medium text-[18px]">{item.label}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-semibold mb-[36px]">Legal</h2>
            {legalItem.map((item, i) => (
              <Link key={i} to={item.link} className="mb-[5px]">
                <p className="text-[#062126] opacity-60 font-medium text-[18px]">{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-col justify-start h-full">
              <h2 className="text-[24px] font-semibold mb-[36px]">Subscribe</h2>
              <p className="text-[#062126] opacity-60 font-medium text-[18px] mb-[20px]">Subscribe untuk mendapatkan berita terbaru dari kami</p>
              <Link to="/">
                <Button className="w-[103px] h-[43px] hover:bg-[#0F97B5]">Subscribe</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="font-medium text-[16px] text-[#062126] opacity-40 flex justify-between mt-[32px]">
        <p> &copy; 2024 Mafaza. All Right Reserved</p>
        <div className="flex gap-x-[32px]">
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>Accesibility</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
