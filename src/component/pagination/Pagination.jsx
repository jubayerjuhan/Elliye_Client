import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./pagination.css";
import { useDispatch } from "react-redux";
const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function Pagination({ totalPage, setFilter, filter }) {
  const { items } = usePagination({
    count: totalPage,
  });

  const currentPage = filter.page;

  const handlePageClick = (page) => {
    setFilter({ ...filter, page: page });
  };

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
                <button
                  type="button"
                  className="pagination_number"
                  {...item}
                  onClick={() => handlePageClick(page)}
                >
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
