export const SimpleCard = ({symbol, text, text2}) => {
    return (
        <div>
            <span id={symbol}>{symbol}</span>
            <span id={text}>{text}</span>
            <span id={text2}>{text2}</span>
        </div>
    )
}