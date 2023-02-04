import "../CustomerQ&A/Customer.css";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { customerQ_AnsData } from "../../shared/CustomerQ&A";
export default function Customer() {
  return (
    <div>
      {customerQ_AnsData.map((value) => {
        const { votes, q, a, question, answer } = value;
        return (
          <div className="questionBox">
            <div className="votes">
              <VscTriangleUp id="vscTri" />
              <h3>0</h3>
              <h3>{votes}</h3>
              <VscTriangleDown id="vscTri" />
            </div>
            <div className="Q-A">
              <h4>{q}</h4>
              <h4>{a}</h4>
            </div>
            <div className="question-Ans">
              <h4>{question}</h4>
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
