import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { IoFastFood, IoCafe } from "react-icons/io5";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true} // Added loop property for infinite scrolling
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/syqNgqk/image.png"
            alt="Pasta Dish"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div>
          <div className="absolute lg:w-11/12 mx-auto top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Delicious Pasta
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Indulge in our freshly prepared pasta dishes, crafted with
              authentic flavors and top-quality ingredients.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-[#FF4500] hover:bg-[#D73C00] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <IoFastFood className="text-white" />
                  <p>Order Now</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-[#FF4500] hover:bg-[#F5E2D7] hover:text-[#FF4500] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p>View Menu</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/Tr89LK5/image.png"
            alt="Burger Dish"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div>
          <div className="absolute lg:w-11/12 mx-auto top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Juicy Burgers
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Savor our premium burgers, stacked with fresh ingredients and
              unmatched flavors.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-[#FF4500] hover:bg-[#D73C00] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <IoFastFood className="text-white" />
                  <p>Order Now</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-[#FF4500] hover:bg-[#F5E2D7] hover:text-[#FF4500] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p>View Menu</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/QdRGQVk/cheesecake-4353495-640.jpg"
            alt="Cheesecake"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div>
          <div className="absolute lg:w-11/12 mx-auto top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Delightful Cheesecake
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Experience the perfect dessert with our creamy and delicious
              cheesecake, topped with fresh fruits.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-[#FF4500] hover:bg-[#D73C00] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <IoCafe className="text-white" />
                  <p>Order Now</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-[#FF4500] hover:bg-[#F5E2D7] hover:text-[#FF4500] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p>View Menu</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/ScfmPzW/drink-1703659-640.jpg"
            alt="Smoothie"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div>
          <div className="absolute lg:w-11/12 mx-auto top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Tropical Smoothie
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Refresh yourself with our signature tropical smoothies, made with
              fresh fruits and natural ingredients.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-[#FF4500] hover:bg-[#D73C00] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <IoCafe className="text-white" />
                  <p>Order Now</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-[#FF4500] hover:bg-[#F5E2D7] hover:text-[#FF4500] text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p>View Menu</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
