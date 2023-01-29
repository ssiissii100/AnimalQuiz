import { useNavigate } from "react-router-dom"

// Components for Quiz
export default function Test() {

    const navigate = useNavigate();

/**
 * It navigates to the finish page.
 */
    function navigateFinish() {
        navigate('/finish')
    }

    return(
        <>
            <br/>
            <button onClick={navigateFinish}>go to finish</button>
        </>
    )
}