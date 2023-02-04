import "../SingleBoxBanner/SingleBoxBanner.css";
export default function SingleBoxBanner(props) {
  return (
    <>
      {props.bd.map(function (value) {
        return (
          <div className="singleBox">
            <h2>{value.heading}</h2>
            <img src={value.img} alt="" />
            <a href="#">{value.link}</a>
          </div>
        );
      })}
    </>
  );
}
