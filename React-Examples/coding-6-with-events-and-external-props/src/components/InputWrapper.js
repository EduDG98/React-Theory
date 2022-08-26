
export const InputWrapper = (props) => {

    const { text, onWrite } = props;

    const handleOnChange = (event) => {
        //value is the current value in the input
        onWrite(event.target.value)
    }


    return (
        <>
            <input onChange={handleOnChange} />
        </>
    )
}