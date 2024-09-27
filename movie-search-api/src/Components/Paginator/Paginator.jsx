/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Paginator.css"
import { useMovie } from "../../Utils/MovieProvider"
function Paginator() {
    const {setPageNumber} = useMovie()
    const pages = Array(10).fill("")
    const [isActive,setIsActive] = useState(0)
    function handlePaginatorClick(index) {
        setIsActive(index)
        setPageNumber(index+1)
    }
    return (
        <div className='paginator-buttons'>
            {
                pages.map((_, index) => {
                    return (
                        <button
                        disabled={isActive === index}
                            onClick={() => {handlePaginatorClick(index)}}
                            key={index}
                        >
                            {index + 1}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Paginator
