

export const CustomButton = (props) => {
    const { type, onClick } = props;

    const handleOnChange = (event) => {
        onClick(event)
    }

    return (
        <>
            <button onClick={handleOnChange}>{type}</button>
        </>
    )
}