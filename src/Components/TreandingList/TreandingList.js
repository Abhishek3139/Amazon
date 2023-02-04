// import TreandingArray from "../TreandingArray";
import { Treanding_Array } from "../../shared/constants";
// import TreandingArray from "./shared/constants";

import { BiMenu } from "react-icons/bi";
import "./TreandingList.css";

export default function TreandingList() {
  const TreandingListMap = Treanding_Array.map(function (treand) {
    return <li>{treand}</li>;
  });
  return (
    <div class="trending">
      <ul>
        <li>
          <BiMenu />
          <span> All</span>
        </li>
        {TreandingListMap}
      </ul>
    </div>
  );
}
