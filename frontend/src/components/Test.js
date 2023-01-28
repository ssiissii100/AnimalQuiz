import { useNavigate } from "react-router-dom"

// Components for Quiz
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