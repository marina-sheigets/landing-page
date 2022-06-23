const CharterItem=({item})=>{
    return(
        <div id={item.id}>
            <h2>{item.charterName}</h2>
            <p>{item.charterDescription}</p>
        </div>
    );
}

export default CharterItem