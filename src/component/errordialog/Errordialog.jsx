import React, { useState } from "react";
import "./errordialog.css";

const Errordialog = ({ message }) => {
  const [visible, setVisible] = React.useState(false);
  useState(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [visible]);
  return (
    visible && (
      <div className="errordialog__container">
        <p>{message}</p>
      </div>
    )
  );
};

export default Errordialog;
