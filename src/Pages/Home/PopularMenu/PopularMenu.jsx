// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

    // const [menus, setMenus] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             setMenus(popularItems)
    //         })
    // }, [])

    return (
        <section className="mb-12 ">
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'
            >
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {
                    popular.map(item => <MenuItems
                        item={item}
                        key={item._id}
                    >

                    </MenuItems>)
                }
            </div>
            <div className="flex flex-col items-center justify-center">
                <button className="btn btn-outline uppercase  border-0 border-b-4">View Full Menu</button>
            </div>


        </section>
    );
};

export default PopularMenu;