export const InputWrapper = (props) => {
    const { value, onWrite, inputRef } = props;

    const handleOnChange = (event) => {
        //value is the current value in the input
        onWrite(event.target.value)
    }

    return (
        <input ref={inputRef} value={value} onChange={handleOnChange} />
    )
}