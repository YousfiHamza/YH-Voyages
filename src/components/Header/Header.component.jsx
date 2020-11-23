import React from "react";
import "./Header.styles.sass";
import Proptypes from "prop-types";

const Header = ({ title, subTitle }) => {
  if (!title) {
    return null;
  }
  return (
    <div className="Header" data-test="HeaderWrapper">
      <h2 className="Title" data-test="title">
        {title}
      </h2>
      <h3 className="SubTitle" data-test="subTitle">
        {subTitle}
      </h3>
    </div>
  );
};

Header.propTypes = {
  title: Proptypes.string,
  subTitle: Proptypes.string,
};

export default Header;
