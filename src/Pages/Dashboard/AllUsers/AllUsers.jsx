import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    const handleDelete = user => {

    }

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    return (
        <div className="mx-auto">

            <Helmet>
                <title>Bistro Boss | all users</title>
            </Helmet>

            <div>
                <h3 className="text-3xl font-semibold">TOTAL USERS : {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="uppercase">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ROle</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role === "admin" ? 'admin' : <button onClick={() => handleMakeAdmin(user)} class="btn btn-ghost btn bg-pink-500 text-white"><FaUserShield></FaUserShield></button>
                                    }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} class="btn btn-ghost btn bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;