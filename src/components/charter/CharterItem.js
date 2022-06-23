const CharterItem=({item})=>{
    return(
        <div className={item.id} id={item.id}>
            <h2>{item.charterName}</h2>
            <p>{item.charterDescription}</p>
        </div>
    );
}

export default CharterItem