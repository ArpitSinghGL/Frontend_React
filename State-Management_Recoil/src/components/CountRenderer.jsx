import { useRecoilValue } from "recoil";
import { countState } from "../store/atoms/CountState.jsx";

const CountRenderer = () => {

    console.log("CountRenderer component is re-rendered....");

    const count = useRecoilValue(countState);
    
    return (
        <div className="countDescription">
            <h2> The value of Count is: {count} </h2>
        </div>
    )
}

export default CountRenderer;