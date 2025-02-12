export default function TestimonialSection() {
  return (
    <section className=" py-8 px-6 md:px-12">
      <h2 className="text-[#FF5200] text-center text-2xl lg:text-3xl  font-bold mb-6">
        What Our User Say
      </h2>
      <div className=" bg-[#FEF1EE] max-w-4xl mx-auto text-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col items-center">
          <img
            src="https://i.ibb.co/FJgrGVk/wor.jpg"
            alt="Happy User"
            className="w-20 h-20 md:w-24 md:h-24 bg-cover rounded-full border-4 border-[#EB1700] mb-4"
          />
          <p className="text-gray-700 italic text-lg">
            "ShareBites has completely changed the way we think about food
            waste. The platform is easy to use, and we love knowing that our
            excess food is going to those in need."
          </p>
          <h4 className="text-[#EB1700] font-semibold mt-4">John Doe</h4>
          <span className="text-gray-500 text-sm">Community Volunteer</span>
        </div>
      </div>
    </section>
  );
}
