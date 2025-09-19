
interface ButtonComponentProps{
    onClick: () => void;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
    return (
        <button onClick={props.onClick}>
            Clique Aqui!
        </button>
    )
}