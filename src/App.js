import React, { useState, useEffect } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import axios from "axios";
import  { SkeletonTheme } from "react-loading-skeleton";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [list, setList] = useState([]);
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((response) => {
          setList(response.data)
          setLoading(false)
        });
    }, 2000);
  }, []);
  return (
    <div className="app">
      <SkeletonTheme highlightColor="rgb(245, 62, 93">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <div>
            <UserDetails list={list}></UserDetails>
          </div>
        )}
      </SkeletonTheme>
    </div>
  );
}
export default App;
