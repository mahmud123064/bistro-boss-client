import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <section className="my-20 ">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading='TESTIMONIALS'
            >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className="mt-4">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className="flex flex-col items-center mt-5 mx-28 space-y-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft size='3.5rem'></FaQuoteLeft>
                                <p>{review.details}</p>
                                <p className="text-2xl text-orange-500 text-center">{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;