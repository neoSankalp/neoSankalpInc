import confetti from "canvas-confetti";
import { assets } from "../../assets/assets";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";

export default function Hero() {
  const [openModal, setOpenModal] = useState(true);

  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.9 },
    });
  };

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.9 },
    });
  }, []);

  const marqueeKeyframes = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
  `;

  const marquee2Keyframes = `
    @keyframes marquee2 {
      0% { transform: translateX(100%); }
      100% { transform: translateX(0%); }
    }
  `;

  const marqueeStyle = {
    animation: "marquee 50s linear infinite",
  };

  const marquee2Style = {
    animation: "marquee2 50s linear infinite",
  };

  return (
    <>
      <div className="w-full h-full">
        {openModal && (
          <div className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center bg-black/80 backdrop-blur-sm">
            <div className="w-full bg-emerald-400 fixed top-0 left-0 z-50 py-2 overflow-hidden">
              <style>{marqueeKeyframes}</style>
              <style>{marquee2Keyframes}</style>

              <div className="relative flex whitespace-nowrap">
                <div className="flex" style={marqueeStyle}>
                  <span className="font-medium">Special Dhamaka Offer</span>
                  <span className="ml-2">
                    Get a fast, dynamic, and modern website at an unbeatable
                    price!
                  </span>

                  <span className="mx-6 text-red-500">🎉</span>

                  <span className="font-bold">Custom Design |</span>
                  <span className="ml-2 font-bold">Mobile Responsive |</span>
                  <span className="ml-2 font-bold">
                    Admin Panel for Easy Management |
                  </span>
                  <span className="ml-2 font-bold">SEO Friendly</span>

                  <span className="mx-6">🎁</span>

                  <span className="font-medium">Special Dhamaka Offer</span>
                  <span className="ml-2">
                    Get a fast, dynamic, and modern website at an unbeatable
                    price!
                  </span>

                  <span className="mx-6 text-red-500">🎉</span>

                  <span className="font-bold">Custom Design |</span>
                  <span className="ml-2 font-bold">Mobile Responsive |</span>
                  <span className="ml-2 font-bold">
                    Admin Panel for Easy Management |
                  </span>
                  <span className="ml-2 font-bold">SEO Friendly</span>

                  <span className="mx-6">🎁</span>
                </div>

                <div className="flex" style={marquee2Style}>
                  <span className="font-medium">Special Dhamaka Offer</span>
                  <span className="ml-2">
                    Get a fast, dynamic, and modern website at an unbeatable
                    price!
                  </span>

                  <span className="mx-6 text-red-500">🎉</span>

                  <span className="font-bold">Custom Design |</span>
                  <span className="ml-2 font-bold">Mobile Responsive |</span>
                  <span className="ml-2 font-bold">
                    Admin Panel for Easy Management |
                  </span>
                  <span className="ml-2 font-bold">SEO Friendly</span>

                  <span className="mx-6">🎁</span>

                  <span className="font-medium">Special Dhamaka Offer</span>
                  <span className="ml-2">
                    Get a fast, dynamic, and modern website at an unbeatable
                    price!
                  </span>

                  <span className="mx-6 text-red-500">🎉</span>

                  <span className="font-bold">Custom Design |</span>
                  <span className="ml-2 font-bold">Mobile Responsive |</span>
                  <span className="ml-2 font-bold">
                    Admin Panel for Easy Management |
                  </span>
                  <span className="ml-2 font-bold">SEO Friendly</span>

                  <span className="mx-6">🎁</span>
                </div>
              </div>
            </div>
            <Card className="relative w-96 bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Close button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  className="bg-slate-700 p-1 rounded-full"
                  onClick={() => setOpenModal(false)}
                >
                  <PlusCircle className="text-white rotate-45 w-6 h-6" />
                </button>
              </div>

              {/* Confetti */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-10 w-1 h-16 bg-blue-500 rotate-45"></div>
                <div className="absolute top-0 right-20 w-1 h-12 bg-pink-500 -rotate-45"></div>
                <div className="absolute top-10 left-20 w-1 h-1 bg-yellow-500"></div>
                <div className="absolute top-8 right-10 w-1 h-1 bg-red-500"></div>
                <div className="absolute top-12 left-40 w-1 h-1 bg-green-500"></div>
                <div className="absolute top-5 right-30 w-1 h-1 bg-red-500"></div>
                <div className="absolute top-20 left-5 w-1 h-1 bg-blue-500"></div>
                <div className="absolute top-15 right-5 w-1 h-1 bg-yellow-500"></div>
              </div>

              <CardContent className="pt-14 pb-8 px-6 flex flex-col items-center">
                {/* Gift icon */}
                <div className="h-16 w-16 mb-4 bg-pink-500 p-2 rounded-md">
                  <img src={assets.giftbox} alt="" />
                </div>

                {/* Title */}
                <div className="text-center mb-1">
                  <h2 className="text-2xl font-bold flex items-center justify-center">
                    <span className="text-red-500 mr-2">💥</span>
                    Special Dhamaka Offer
                    <span className="text-red-500 ml-2">💥</span>
                  </h2>
                </div>

                {/* Subtitle */}
                <p className="text-gray-500 text-center mb-4">
                  Get a fast, dynamic, and modern website at an unbeatable
                  price!
                </p>

                {/* Offer details */}
                <p className="text-black text mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 px-3 py-1 rounded-full shadow-2xl">
                  Custom and mobile responsive design
                </p>

                {/* Coupon code */}
                <div className="border border-gray-300 border-dashed rounded-md p-4 mb-6 w-full">
                  <p className="text-gray-500 text-center mb-1">
                    Website for Just
                  </p>
                  <p className="text-center text-4xl font-bold tracking-wider bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    ₹5999
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-md w-full text-center"
                  onClick={() => {
                    handleClick(), setOpenModal(false);
                  }}
                >
                  Redeem Now
                </button>
              </CardContent>
            </Card>
          </div>
        )}
        <div className="flex pt-[5vh] px-32 max-xl:px-12 max-lg:px-5 max-sm:flex-col">
          <div className="w-3/5 h-full max-sm:w-full">
            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl mt-10 leading-tight font-normal">
              Your One-Stop{" "}
              <span className="text-primary">Solution—Bringing</span> All Your
              Tech, Media, and <span className="text-primary">Digital </span>
              Needs Under One Roof. Simplifying Tech,{" "}
              <span className="text-primary">Amplifying</span> Impact. Crafting
            </h1>
            <div className="max-xl:flex max-sm:hidden">
              <img
                src={assets.img1}
                alt=""
                className="image w-[80%] max-xl:h-86 max-md:h-80 pr-10"
              />
            </div>
          </div>
          <div className="w-2/5 h-full max-sm:w-full">
            <div className="flex justify-end">
              <img src={assets.img2} alt="" className="w-9/12 mt-2 image" />
            </div>
            <h3 className="w-4/5 max-sm:w-4/5 text-justify text-lg mb-5 max-lg:text-base max-sm:text-justify">
              Unleash your brand's potential with Neo Sankalp’s all-in-one
              solutions. Get unlimited tech, media, and digital marketing
              services—all under one roof, for seamless growth. Simplifying
              Tech, Amplifying Impact.
            </h3>
            <a href="#consult">
              <button className="bg-transparent border-2 border-primary text-xl text-text hover:bg-secondary hover:text-white transition-all  px-5 duration-500 py-2 rounded-full font-normal max-lg:text-base">
                Book a free Trial
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
