import "./menu.css"
const  Menu =()=>{
    return (
        <div className="container menu">
        <div className="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="logo" width="120" />
        </div>
        <nav className="menu-list">
                <a href="#home"><span>Home</span></a>
                <a href="#about">About</a>
                <a href="#charter">Charter</a>
                <a href="#reviews">Reviews</a>
                <a href="#books">Books</a>
                <a href="#author">Author</a>
                <a href="#contact">Contact</a>
            </nav> 
        </div>
    )
}

export default Menu