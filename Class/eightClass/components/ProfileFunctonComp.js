import React from "react";

const ProfileFunctonComp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // API Call
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  return (
    <div>
      ProfileFunctonComp
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default ProfileFunctonComp;
