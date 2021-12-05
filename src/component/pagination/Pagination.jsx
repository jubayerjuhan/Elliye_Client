import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./pagination.css";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 2,
  });

  return (
    <div className="pagination__container">
      <nav className="pagination__wrapper">
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button type="button" className="pagination_number" {...item}>
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" className="pagination__nav-btn" {...item}>
                  {type === "previous" ? (
                    <AiOutlineArrowLeft />
                  ) : (
                    <AiOutlineArrowRight />
                  )}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </div>
  );
}
