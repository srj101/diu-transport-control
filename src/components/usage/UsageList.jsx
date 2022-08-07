import React from "react";
import { data } from "../../constants";
import "./usage-list.scss";
import ProgressBar from "../progressbar/ProgressBar";

const UsageList = () => {
  return (
    <ul className="usage-list">
      {data.usageByChannel.map((item, index) => (
        <li className="usage-list__item" key={`usage-${index}`}>
          <div className="usage-list__item__title">
            {item.title}
            <span
              className={`${item.value < 50 ? "txt-success" : "txt-danger"}`}
            >
              {item.value}%
            </span>
          </div>
          <div>
            <ProgressBar value={item.value} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsageList;
