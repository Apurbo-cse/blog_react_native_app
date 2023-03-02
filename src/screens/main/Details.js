
import React from "react";
import DetailsCard from "../../components/DetailsCard";

const Details = ({ route }) => {
  const { item } = route.params;
  return (
    <>
      <DetailsCard item={item} />
    </>
  );
};

export default Details;

