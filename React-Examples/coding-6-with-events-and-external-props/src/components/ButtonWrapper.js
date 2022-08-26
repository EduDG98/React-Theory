
export const ButtonWrapper = (props) => {

    const { onButtonClick, text } = props;


    const handleOnClick = (event) => {
        console.log(event.target.value)
        onButtonClick(text)
    }

    return (
        <>
            <button onClick={handleOnClick}>{text}</button>
        </>
    )
}