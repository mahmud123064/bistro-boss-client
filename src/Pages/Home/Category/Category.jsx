import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="mb-16">
            <SectionTitle
             subHeading = {"From 11:00am to 10:00pm"}
             heading = {"order online"}
            >
               
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides = {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-6"
            >
                <SwiperSlide >
                    <img className="rounded-xl" src={slider1} alt="" />
                    <p className="text-4xl uppercase -mt-20 text-center  text-white">salads</p>
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                    <img src={slider2} alt="" />
                    <p className="text-4xl uppercase -mt-20 text-center text-white">pizzas</p>
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                    <img src={slider3} alt="" />
                    <p className="text-4xl uppercase -mt-20 text-center text-white">soups</p>
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                    <img src={slider4} alt="" />
                    <p className="text-4xl uppercase -mt-20 text-center text-white">desserts</p>
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                    <img src={slider5} alt="" />
                    <p className="text-4xl uppercase -mt-20 text-center text-white">salads</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;