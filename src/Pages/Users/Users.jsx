import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
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
                fetch(`https://brand-shop-server-3bhh86akn-masum-rezas-projects.vercel.app/user/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            // update state
                            let remaining = users.filter(sinUser => sinUser?._id !== id);
                            setUsers(remaining);

                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire(
                                'Oops!',
                                'Something went wrong.',
                                'error'
                            )
                        }
                    })
            }
            else {
                Swal.fire(
                    'Cancelled!',
                    'Your user is safe.',
                    'error'
                )
            }
        })
    }

    return (
        <div className="py-5 w-[90%] mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>creation Time</th>
                            <th>last SignIn Time</th>
                            <th>emailVerified</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name || 'google-login'}</td>
                                <td>{user?.creationTime}</td>
                                <td>{user?.lastSignInTime}</td>
                                <td>{user?.emailVerified ? 'Yes' : 'No'}</td>
                                <td onClick={() => handleDelete(user?._id)} className="btn md:ml-4 btn-sm md:mt-1 mt-6 ml-4">X</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users