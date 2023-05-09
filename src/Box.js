
export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "#2A9D8F" : "transparent"
    }
    return (
        <div
            style={styles}
            className="box"
            onClick = {() => props.toggle(props.id)}
        > 
        </div>
    );

}