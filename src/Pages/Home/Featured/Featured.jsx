import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import"./fetured.css"


const Featured = () => {
    return (
        <section className="featured bg-fixed pt-8 my-16 mb-12">
            <SectionTitle
                subHeading='check it out'
                heading='FROM OUR MENU'
            ></SectionTitle>

            <div className="md:flex space-x-8 items-center bg-slate-400 bg-opacity-50 justify-center py-16 px-28">
                <div>
                    <img className="rounded-xl" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline uppercase text-white border-0 border-b-4">read more</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;