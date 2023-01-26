import React from "react";
class ProfileClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "subhransu",
      name: "Dummy Name",
      location: "Dummy Location",
      image: "",
      count: 0,
    };
  }
  async componentDidMount() {
    console.log("componentDidMount");
    const apidata = await fetch("https://api.github.com/users/ssmohanty153");
    const gitDetails = await apidata.json();

    this.setState({
      name: gitDetails.name,
      userInfo: gitDetails.company,
      image: gitDetails.avatar_url,
      location: gitDetails.location,
    });

    this.timer = setInterval(() => {
      console.log("ProfileClassComp");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("componentDidUpdate");
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }
  render() {
    console.log("render");
    const { name, userInfo, image, location, count } = this.state;
    return (
      <>
        <h1>ProfileClassComp</h1>
        <img src={image}></img>
        <h1>name:-{name}</h1>
        <h1>userInfo:-{userInfo}</h1>
        <h1>location:-{location}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          count:{count}
        </button>
      </>
    );
  }
}
export default ProfileClassComp;
/*child constructor
*  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */
