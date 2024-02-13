import { useContext } from "react";
import { apiContext } from "../context/apiContext";

export default function Button() {
    const { handleNextPage, page } = useContext(apiContext);

    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col text-center ">
                    {page < 4 ? <button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleNextPage}>View more</button> : null}
                </div>
            </div>
        </div>
    )
};