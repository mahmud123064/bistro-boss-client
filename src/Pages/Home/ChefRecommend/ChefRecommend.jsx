import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefRecommendItem from "../../../Shared/ChefRecommendItem/ChefRecommendItem";

const ChefRecommend = () => {

    const [chefRecommend, setChefRecommend] = useState([]);
    useEffect(()=> {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const recommend = data.filter(item => item.name === "Roast Duck Breast")
            setChefRecommend(recommend);
        })
    }, [])

    return (
        <section className="mb-12">
            <SectionTitle
            heading = "CHEF RECOMMENDS"
            subHeading = "Should Try"
            >

            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                {
                    chefRecommend.map(item => <ChefRecommendItem
                    item = {item}
                    key={item._id}
                    ></ChefRecommendItem>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;