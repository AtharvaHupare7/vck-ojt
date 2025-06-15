import{Link} from 'react-router-dom'
const Header = () => {
    return(
        <>

             <header>
                <nav>
                    <h1>Vivekanand College, Kolhapur</h1>
                    <Link to="/Home">  Home  </Link>
                
                    <Link to="/about"> About </Link>
    
                    <Link to="/courses"> Courses </Link>
                </nav>
                
             </header>
          </>   


    )
}
export default Header;    
