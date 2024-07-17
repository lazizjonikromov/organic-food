import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners"; 

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#A855F7" />
      ) : (
        <div className="flex items-center flex-col">
          <h2 className="text-3xl text-center font-semibold mb-4">
            Order SuccesFully
          </h2>
          <p>Your order has been succesfully placed</p>
          <a
            href="/"
            className="bg-purple-500 font-bold px-3 text-white py-2 rounded-lg mt-5"
          >
            Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Success;
