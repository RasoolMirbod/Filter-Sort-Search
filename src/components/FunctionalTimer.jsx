import { useEffect, useState } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hi Rasool");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>this is timer</div>;
};

export default FunctionalTimer;
