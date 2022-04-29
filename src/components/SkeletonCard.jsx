import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCard(){
    return (
      <div className="cards">
        <Skeleton circle={true} height={100} width={100} />
        <h1>
          <Skeleton />
        </h1>
        <h2>
          <Skeleton />
        </h2>
        <h3>
          <Skeleton />
        </h3>
      </div>
    );
}
export default SkeletonCard