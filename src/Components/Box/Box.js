// import { BOX_DATA } from "../shared/constants";
import "../Box/Box.css";
export default function Box(props) {
  return (
    <>
      {props.data.map(function (value) {
        return (
          <div className="box">
            <div class="img3">
              <h2>{value.heading}</h2>
              {value.Array1.map(function (v2) {
                return (
                  <div class="t1">
                    <img src={v2.img} alt="" />
                    <span>{v2.sub}</span>
                  </div>
                );
              })}

              {/*  */}
              <a href="#1">{value.link}</a>
            </div>
          </div>
        );
      })}
    </>
  );
}
