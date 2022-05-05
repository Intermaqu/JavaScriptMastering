import logo from "../images/logo192.png"
import "../style/Film.css"

const Film = () => {
    return(
        <div class="film">
            <img src={logo} alt="logo"/>
            <div class="film--content">
                <h2>Name</h2>
                <h3>Author</h3>
            </div>
        </div>
    )
}

export default Film