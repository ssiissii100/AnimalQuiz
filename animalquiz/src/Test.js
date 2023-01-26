import { useNavigate } from "react-router-dom"

// Quiz to choose
export default function Test() {

    const navigate = useNavigate();

    function navigateFinish() {
        navigate('/finish')
    }

    return(
        <>
            Hello Test
            <br/>
            <button onClick={navigateFinish}>go to finish</button>
        </>
    )
}