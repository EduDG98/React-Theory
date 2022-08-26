
export const InputWrapper = (props) => {

    const { text } = props;

    const handleOnChange = (event) => {
        console.log(event.target.value)
        // onUpdateField()
    }


    return (
        <>
            <input value={text} onChange={handleOnChange}></input>
        </>
    )
}