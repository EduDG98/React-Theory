

export const ButtonWrapper = (props) => {

    const { symbol, onClickProp } = props;

    const handleOnClick = () => onClickProp();

    return (
        <>
            <button onClick={handleOnClick}>{symbol}</button>
        </>
    )
}