import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { ImTv } from "react-icons/im";
import { IoBookmark } from "react-icons/io5";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/zZvHzRq/image.png"
            alt="movie-1"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold ">
              Avatar: The Way of Water
            </h2>
            <p className="mt-4 text-xs sm:text-sm lg:text-sm max-w-md">
              Avatar: The Way of WaterSeveral years after the Na'vi repelled the
              RDA invasion Jake Sully and his family are living on Pandora.
              Things seem peaceful but the RDA has other plans, invading and
              capturing Pandora. Sully forms a guerrilla group to try to expel
              the invaders.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-3 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <ImTv className="text-white" />
                  <p>Watch now</p>
                </div>{" "}
              </button>
              <button className="mt-6 px-3 py-3 border-2 border-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <IoBookmark className="text-white" />
                  <p>Add Bookmark</p>
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/Rv6dpzs/image.png"
            alt="movie-2"
            className="w-full h-64 sm:h-80 md:h-96 object-center lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold ">
              A Quiet Place Part II
            </h2>
            <p className="mt-4 text-xs sm:text-sm lg:text-sm max-w-md">
              In a devastated Earth overrun by myriads of invincible
              extraterrestrial predators, the Abbotts struggle to survive in the
              desolate death trap of New York City. In this muffled dystopia,
              utter silence may offer a chance to stay alive, as even the
              slightest noise can attract the deadly invaders.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-3 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <ImTv className="text-white" />
                  <p>Watch now</p>
                </div>{" "}
              </button>
              <button className="mt-6 px-3 py-3 border-2 border-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <IoBookmark className="text-white" />
                  <p>Add Bookmark</p>
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/MV9D0tq/image.png"
            alt="movie-3"
            className="w-full h-64 sm:h-80 md:h-96 object-top lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold ">
              Captain America
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-md">
              Sam Wilson, who's officially taken up the mantle of Captain
              America, finds himself in the middle of an international incident.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-3 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <ImTv className="text-white" />
                  <p>Watch now</p>
                </div>{" "}
              </button>
              <button className="mt-6 px-3 py-3 border-2 border-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <IoBookmark className="text-white" />
                  <p>Add Bookmark</p>
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/c1vS8my/image.png"
            alt="movie-4"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold ">
              Game of Thrones 2011
            </h2>
            <p className="mt-4 text-xs sm:text-sm lg:text-sm max-w-md">
              In the mythical continent of Westeros, several powerful families
              fight for control of the Seven Kingdoms. As conflict erupts in the
              kingdoms of men, an ancient enemy rises once again to threaten
              them all. Meanwhile, the last heirs of a recently usurped dynasty
              plot to take back their homeland from across the Narrow Sea.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-3 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <ImTv className="text-white" />
                  <p>Watch now</p>
                </div>{" "}
              </button>
              <button className="mt-6 px-3 py-3 border-2 border-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg ">
                <div className="flex gap-2 items-center">
                  <IoBookmark className="text-white" />
                  <p>Add Bookmark</p>
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
