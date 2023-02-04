import Navbar from "./Components/Navbar/Navbar";

export const PageWrapper = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};
