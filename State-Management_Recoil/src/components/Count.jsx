import CountRenderer from "./CountRenderer";
import Buttons from "./Buttons";

function Count()
{
    console.log("Count component is re-rendered....");
    
    return (
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    )
}

export default Count;