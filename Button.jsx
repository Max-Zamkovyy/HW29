const Buttons = (props) => {
    const {onClick, children } = props;

    return <button onClick={onClick}>{children}</button>
}


export default Buttons;