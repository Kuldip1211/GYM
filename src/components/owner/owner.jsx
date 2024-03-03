import "./owner.css";
import { OwnerData } from "../../data/ownerdata";
import { useState } from "react";
import Leftarrow from "../../assets/leftArrow.png";
import Rightarrow from "../../assets/rightArrow.png";
function Owner() {
  const [selected, setSelected] = useState(0);
  const length = OwnerData.length;
  return (
    <>
      <div className="owner">
        <div className="left">
          <span>Owner</span>
          <span className="stroke-text">What They</span>
          <span>say about us</span>
          <span>{OwnerData[selected].review}</span>
          <span>
            <span style={{ color: "var(--orange)" }}>
              {OwnerData[selected].name}
            </span>{" "}
            - {OwnerData[selected].status}
          </span>
        </div>
        {/* left end */}
        <div className="right">
          <div></div>
          <div></div>
          <span className="my">
            <img src={OwnerData[selected].image} alt="" />
          </span>
          <div className="arrows">
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(length - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={Leftarrow}
              alt=""
            />
            <img
              onClick={() => {
                selected === length - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              src={Rightarrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Owner;
