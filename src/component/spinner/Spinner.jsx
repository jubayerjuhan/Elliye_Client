import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  const spinnerStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "fixed",
    zIndex: "9999999",
  };
  return (
    <div className="spinner" style={spinnerStyle}>
      <HashLoader color={"#fff"} loading={true} />
    </div>
  );
};

export default Spinner;
