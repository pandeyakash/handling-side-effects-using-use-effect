import { useState, useEffect } from "react";
import axios from "axios";
import "./Data.css";

export const Data = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.log("ERROR!!!", error);
    }
  };

  useEffect(() => {
    document.title = "Data";

    return () => {
      document.title = "Browser Events - Unmounted";
    };
  });

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Data</h1>
      <div className="data-container">
        {data.map((ele) => (
          <div key={ele.id} className="data-box">
            <h3>
              <b>Title: </b>
              {ele.title}
            </h3>
            <p>
              <b>Body: </b>
              {ele.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
