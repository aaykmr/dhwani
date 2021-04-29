import logo from './logo.png';
import { useHistory, browserHistory, useLocation, Link } from "react-router-dom";
function Header(props){
    const history = useHistory();
    function handleClick(e){
        e.preventDefault();
        clearTimeout(props.this.exec);
        if(props.title==="First")
            history.push('/second');
        else
            history.goBack();
    }
    return(
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="pageName">{props.title}</div>
                <button className="linkTo" onClick={handleClick}>Goto {props.title==="First"?"Second":"First"} Page</button>
        </header>
    );
}
export default Header;