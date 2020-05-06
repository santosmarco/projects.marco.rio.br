import React from "react";

const PaginationButton = (props) => {
  /* Props:
    - (bool) disabled
    - (bool) active
    - (string) text
  */
  let liClassName = "page-item";
  let btnClassName = "page-link";
  if (props.disabled) {
    liClassName += " disabled";
    btnClassName += " btn-bg-0 text-muted";
  }
  if (props.active) {
    liClassName += " active";
    btnClassName += " btn-bg-1 text-white";
  }

  return (
    <li className={liClassName} key={props.key}>
      <button className={btnClassName} onClick={props.onClick}>
        {props.text}
      </button>
    </li>
  );
};

export default (props) => {
  /* Props:
    - (int) totalPages
    - (int) currentPage
    - (func) changePageHandler
  */
  const renderButtons = () => {
    let btns = [
      <PaginationButton
        key={0}
        text="Previous"
        disabled={props.currentPage === 0}
        onClick={() => props.changePageHandler(props.currentPage - 1)}
      />,
    ];

    for (let i = 0; i < props.totalPages; i++) {
      btns.push(
        <PaginationButton
          key={i + 1}
          text={i + 1}
          active={i === props.currentPage}
          onClick={() => props.changePageHandler(i)}
        />
      );
    }

    btns.push(
      <PaginationButton
        key={btns.length}
        text="Next"
        disabled={props.currentPage === props.totalPages - 1}
        onClick={() => props.changePageHandler(props.currentPage + 1)}
      />
    );

    return btns;
  };

  return (
    <nav className={props.className}>
      <ul className="pagination justify-content-center">{renderButtons()}</ul>
    </nav>
  );
};
