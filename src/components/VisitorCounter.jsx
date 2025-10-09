import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_VISITOR_URL;
    console.log("API URL:", apiUrl); // 🧠 check this

    fetch(apiUrl)
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Data from API:", data);
        setVisits(data.visits);
      })
      .catch((err) => console.error("Error fetching visits:", err));
  }, []);

  return (
    <div className="text-center mt-4">
      <p className="text-gray-600">
        This portfolio has been visited{" "}
        <b>{visits !== null ? visits : "loading..."}</b> times.
      </p>
    </div>
  );
};

export default VisitorCounter;
