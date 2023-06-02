import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, } from 'react-icons/fa';
import useCart from "../hooks/useCart";



const Dashboard = () => {

    const [cart] = useCart();
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar ">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                    </div>
                    {/* <div class="flex-1 px-2 mx-2">Navbar Title</div> */}
                    {/* <div class="flex-none hidden lg:block"> */}
                    {/* <ul class="menu menu-horizontal"> */}
                    {/* <!-- Navbar menu content here --> */}
                    {/* <li><a>Navbar Item 1</a></li> */}
                    {/* <li><a>Navbar Item 2</a></li> */}
                    {/* </ul> */}
                    {/* </div> */}
                </div>

                <Outlet></Outlet>
            </div>
            <div class="drawer-side bg-[#D1A054]">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 h-full ">
                    {/* // <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>USER HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>RESERVATION</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>PAYMENT HISTORY</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                        </NavLink>
                        
                    </li>
                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome>HOME</NavLink></li>
                    <li><NavLink to='/menu'>OUR MENU</NavLink></li>
                    <li><NavLink to='/order/Salad'>ORDER FOOD</NavLink></li>
                    <li><NavLink to='/contact'>CONTACT</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;