import { useEffect, useState } from "react";
const Section = ({ titel, discriptin, isVisiable, setisVisiable }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{titel}</h3>
      {isVisiable ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setisVisiable(isVisiable)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setisVisiable(isVisiable)}
        >
          Show
        </button>
      )}
      {isVisiable && <p>{discriptin}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isVisiableSection, setisVisiableSection] = useState("about");
  console.log();
  return (
    <>
      <div>
        <Section
          titel={"About Instamart"}
          discriptin={
            "kj kasjkjkjk Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
          }
          isVisiable={isVisiableSection === "about"}
          setisVisiable={(value) => setisVisiableSection(!value ? "about" : "")}
        />
        <Section
          titel={"Team Instamart"}
          discriptin={
            "kj kasjkjkjk Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
          }
          isVisiable={isVisiableSection === "team"}
          setisVisiable={(value) => setisVisiableSection(!value ? "team" : "")}
        />
        <Section
          titel={"Careers"}
          discriptin={
            "kj kasjkjkjk Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
          }
          isVisiable={isVisiableSection === "careers"}
          setisVisiable={(value) =>
            setisVisiableSection(!value ? "careers" : "")
          }
        />
      </div>
    </>
  );
};
export default Instamart;
