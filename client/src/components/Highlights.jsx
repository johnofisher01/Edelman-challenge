import React, { useEffect, useState } from "react";
import { fetchHighlights } from "../services/api";

const Highlights = () => {
  const [highlights, setHighlights] = useState({
    mostViewed: null,
    mostShared: null,
  });

  useEffect(() => {
    const getHighlights = async () => {
      const data = await fetchHighlights();
      setHighlights(data);
    };
    getHighlights();
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.mostViewed && (
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-bold">Most Viewed</h3>
            <p>{highlights.mostViewed.title}</p>
          </div>
        )}
        {highlights.mostShared && (
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-bold">Most Shared</h3>
            <p>{highlights.mostShared.title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;