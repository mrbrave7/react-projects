import SingleDot from "./SingleDot";

const AllDot = () => {
    const dotOnScreen = new Array(1500).fill(null);
    return (
        <div className="AllDot">
            {dotOnScreen.map((_, index) => {
                return (
                    <SingleDot key={index} />
                )
            })}
        </div>
    )

}

export default AllDot
