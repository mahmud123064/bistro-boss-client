import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart();

    const handleAddToCart = (item) => {
        console.log(item)

        if (user && user.email){

            const cartItem = { menuItemId: _id,  name, image, recipe, price, email: user.email }

            fetch("http://localhost:5000/carts", {

                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)

            }
            )
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()   // refetch cart to update number  pn the cart 
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Food Item added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please login to order food',
                icon: 'warning',
                position: 'center',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="Shoes" className="rounded-xl " />
                </figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-12 px-4 mt-12">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline uppercase flex flex-col items-center justify-center mx-auto border-0 border-b-4 bg-slate-100 border-orange-500">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;