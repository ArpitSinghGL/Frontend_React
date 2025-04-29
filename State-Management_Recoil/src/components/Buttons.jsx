import { useRecoilState } from "recoil";
import { countState } from "../store/atoms/CountState";

function Buttons()
{
    console.log("Button component is re-rendereed....");
    
    const [ count , setCount ] = useRecoilState(countState);

    return (
        <div>
            <button onClick={ () => { setCount(count + 1) } }> Increment </button>
            <button onClick={ () => { setCount(count - 1) } }> Decrement </button>
        </div>
    )
}

export default Buttons;