import WithCounter from "../hoc/withCount";


const HoverCounter = ({count,incrementCount}) => {
  return (
    <div>
      <h2 onMouseMove={incrementCount}>hovered {count} times</h2>
    </div>
  );
};

export default WithCounter(HoverCounter,10);
