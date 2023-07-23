import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReview] = useState([]);
  useEffect(() => {
    if (user?.uid) {
      fetch(`https://care-vibe-server.vercel.app/myReviews/${user?.uid}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyReview(data);
        });
    }
  }, [user?.uid]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://care-vibe-server.vercel.app/myReviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully Deleted!");
        }
      });
  };
  return (
    <div className="min-h-[1000px] container">
      <div className="overflow-x-auto py-20">
        <table className="table ">
          {/* head */}
          {myReviews.length > 0 && (
            <thead className="">
              <tr>
                <th>Name</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
          )}
          <tbody className="">
            {/* row 1 */}
            {myReviews.map((myReview, i) => (
              <tr key={i} className="bg-base-200">
                <td>{myReview.name}</td>
                <td>{myReview.commnet}</td>
                <td>
                  <button
                    onClick={() => handleDelete(myReview._id)}
                    className="btn-sm rounded btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {myReviews.length === 0 && (
          <div className=" overflow-hidden text-center text-4xl lg:text-7xl font-bold container py-32">
            <h3>No Reviews Added</h3>
          </div>
        )}
      </div>
      <Toaster position="top-center"></Toaster>
    </div>
  );
};

export default MyReviews;
