import {Link} from "react-router-dom";
const Border = (props) => {
    const {border, id} = props;
    return(
        <div className="border mx-1 min-w-6 px-2">
            {border}
        </div>
    )
}

export default Border