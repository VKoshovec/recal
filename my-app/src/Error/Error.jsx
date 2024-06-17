import {  selectError } from "../redux/selectors";
import { useSelector } from "react-redux";

const Error = () => {
    
    const errorName = useSelector(selectError);

    return(errorName &&  
    <div>
       <p>{errorName}</p>
    </div>
    );
}

export default Error;