import Icon from "../components/Icon";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [images, setImages] = useState([
    "/image.jpg",
    "/image.jpg",
    "/image.jpg",
    "/image.jpg",
  ]);

  const ImagesRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const measureWidth = () => {
      if (ImagesRef.current?.children.length > 0) {
        const firstChild = ImagesRef.current.children[0];
        const rect = firstChild.getBoundingClientRect();
        const computedGap = parseFloat(
          window.getComputedStyle(ImagesRef.current).gap || 0
        );
        setImageWidth(rect.width + computedGap);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, [images]);

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 3) setCurrentIndex((prev) => prev + 1);
  };

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      setImages((prev) => [...prev, imageUrl]);
      setCurrentIndex(images.length - 2);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="w-full flex h-full bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] rounded-3xl p-3 ">
        <Icon />
        <div className="h-full w-full flex flex-col justify-between ">
          <div className="flex w-full justify-between items-center px-3">
            <div className="w-full">
              <div
                className="bg-[#171717] w-fit px-10 py-4 rounded-2xl"
                style={{ boxShadow: "0px 4px 10px 2px #00000040 inset" }}
              >
                Gallery
              </div>
            </div>

            <div className="flex w-full justify-between items-center">
              <div
                className="cursor-pointer flex text-xs justify-center items-center gap-1 
                    bg-[#FFFFFF09] backdrop-blur-[105px] py-3 px-4 rounded-full"
                style={{
                  boxShadow: `
                        0px 3.26px 3.26px 0px #FFFFFF26 inset,
                        0px 0px 48.91px 0px #FFFFFF0D inset,
                        9px 10px 7.1px 0px #00000066,
                        -0.5px -0.5px 6.9px 0px #FFFFFF40
                      `,
                }}
                onClick={handleAddImageClick}
              >
                <Plus size={14} /> ADD IMAGE
              </div>

              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />

              <div className="flex justify-center items-center gap-2">
                <motion.div
                  whileHover={
                    currentIndex > 0
                      ? {
                          background:
                            "linear-gradient(139.14deg, #1a1a1a 12.4%, #161718 94.96%)",
                        }
                      : {}
                  }
                  className={`size-10 rounded-full flex justify-center items-center transition-all cursor-pointer ${
                    currentIndex === 0 && "opacity-40"
                  }`}
                  style={{
                    boxShadow:
                      "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                    background:
                      "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                  }}
                  onClick={currentIndex > 0 ? prevImage : undefined}
                >
                  <ArrowLeft className="text-[#6F787C]" />
                </motion.div>

                <motion.div
                  whileHover={
                    currentIndex < images.length - 1
                      ? {
                          background:
                            "linear-gradient(139.14deg, #1a1a1a 12.4%, #161718 94.96%)",
                        }
                      : {}
                  }
                  className={`size-10 rounded-full flex justify-center items-center transition-all cursor-pointer ${
                    currentIndex === images.length - 3 && "opacity-40"
                  }`}
                  style={{
                    boxShadow:
                      "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                    background:
                      "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                  }}
                  onClick={
                    currentIndex < images.length - 1 ? nextImage : undefined
                  }
                >
                  <ArrowRight className="text-[#6F787C]" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative flex items-center overflow-hidden mt-4 px-3">
            <motion.div
              ref={ImagesRef}
              className="flex flex-nowrap gap-7"
              animate={{
                x: -currentIndex * imageWidth,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
            >
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    y: -7,
                    x: 5,
                  }}
                  transition={{
                    type: "tween",
                    ease: [0.77, 0, 0.175, 1],
                    duration: 0.3,
                  }}
                  className="shrink-0"
                >
                  <img
                    src={src}
                    alt={`Image ${i + 1}`}
                    className=" rounded-3xl size-44 shrink-0 grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="w-3/4 rounded-2xl h-2 mt-4"
        style={{
          background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                           linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
          backdropFilter: "blur(9.837px)",
          boxShadow: "0px 4px 4px 0px #00000054",
        }}
      />
    </>
  );
};

export default Slider;
