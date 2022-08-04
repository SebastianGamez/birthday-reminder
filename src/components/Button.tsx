// Props 
type Props = {
    handleClick: () => void, 
    labelText: string
    value: string,
}

// It returns a button
export const Button = ({handleClick, labelText, value}: Props): JSX.Element => {
  
    //It needs the props to run

    return (
        <button
            aria-label= {labelText}
            className="button__button"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}
