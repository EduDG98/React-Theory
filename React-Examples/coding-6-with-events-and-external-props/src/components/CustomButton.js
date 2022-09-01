const generateTheme = (type) => {
    if (type === '✔') {
        return 'success';
    }

    if (type === '✖') {
        return 'error';
    }
}

export const CustomButton = (props) => {
    const { type, onClick } = props;

    const handleOnChange = () => {
        onClick();
    }
    const theme = generateTheme(type);
    return (
        <button className={theme} onClick={handleOnChange}>{type}</button>
    )
}