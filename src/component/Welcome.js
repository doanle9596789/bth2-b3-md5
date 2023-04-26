import xinchao from "../App";
function Welcome(props) {
    console.log(props);
    return (
        <h1>Hello: {props.name}</h1>
    );
}
export default Welcome;