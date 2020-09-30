import React from "react";
import { Pagination } from "react-bootstrap";

const BPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const items = [];
  let active = 1;
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => paginate(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default BPagination;
