import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import coverImg from "../../../assets/menu/banner3.jpg"
// import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soups from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {

    const [menu] = useMenu()

    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>

            <Helmet>
                <title>Bistro Boss |Menu</title>
            </Helmet>
            <div className='mb-12'>
                <Cover img={coverImg} title="our menu"></Cover>
            </div>

            {/* /// todays offered /// */}

            <SectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>
            {/* offered items */}
            <MenuCategory items={offered} ></MenuCategory>

            {/* Dessert item  */}

            <MenuCategory
                items={desserts}
                title="Dessert"
                img={dessertImg}
            >
            </MenuCategory>

            {/* Pizza item  */}

            <MenuCategory
                items={pizzas}
                title="Pizza"
                img={pizzaImg}
            ></MenuCategory>

            {/* Salad */}

            <MenuCategory
            items={salad}
            title = "Salad"
            img ={saladImg}
            ></MenuCategory>

            {/* Soups */}

            <MenuCategory
            items={soup}
            title = {"Soup"}
            img = {soups}
            ></MenuCategory>
        </div>
    );
};

export default Menu;