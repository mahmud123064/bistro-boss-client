import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${item._id}`,{
                method:"DELETE",
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify()
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div className="mx-auto ">

            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold flex justify-evenly h-20 items-center" >
                <h3>This is my cart : {cart.length}</h3>
                <h3>Total products : {total}</h3>
                <button className="btn btn-warning btn-sm">Buy</button>
            </div>
            <div class="overflow-x-auto">
                <table class="table">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM Name</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr 
                            key={item._id}
                            item = {item}
                            >
                                <td>
                                   {index + 1}
                                </td>
                                <td>
                                    
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src = {item.image}alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                  
                                </td>
                                <td>
                                   {item.name}
                                </td>
                                <td className="text-end">{item.price}</td>
                                <td>
                                    <button onClick={()=> handleDelete(item)} class="btn btn-ghost btn bg-orange-400 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;