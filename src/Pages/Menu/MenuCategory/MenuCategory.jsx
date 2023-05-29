import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";


const MenuCategory = ({items, title, img}) => {
    // console.log(items);
    return (
        <div className="pt-8 mb-12">
            {title && <Cover className = " h-[600px]" img={img} title = {title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-16">
                {
                    items.map(item => <MenuItems
                        item = {item}
                        key = {item._id}
                    >

                    </MenuItems>)
                }
                  
            </div>

            <Link to ={ `/order/${title}`}><button className="btn btn-outline uppercase flex flex-col items-center justify-center mx-auto border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button></Link>
          
        </div>
    );
};

export default MenuCategory;