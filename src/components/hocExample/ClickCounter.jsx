import { useState } from "react";
import WithCounter from "../hoc/withCount";

const ClickCounter = ({ count, incrementCount, name }) => {
  console.log(name);
  return (
    <div>
      <h2 onClick={incrementCount}>hovered {count} times</h2>
    </div>
  );
};

export default WithCounter(ClickCounter,5);
