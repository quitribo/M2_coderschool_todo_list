import React from "react";

function Header({ title, subTitle }) {
  return (
    <div>
      <h1 className="title">
        {title}
        <span>{subTitle}</span>
      </h1>
    </div>
  );
}

export default Header;
