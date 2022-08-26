
export const ButtonWrapper = props => {

    const { char, onClick } = props;

    const handleOnClick = () => onClick(char);


    return (
        <>
            <button onClick={handleOnClick}>{char}</button>
        </>
    )
}