import logo from '../images/logo.svg';

const Header = () => {

    const content = 

    <header className="Page-header">
        <img src={logo} className="React-logo" alt="logo" />
        
        <h1>zerowaste.consulting</h1>

        <h2>Let your marketing goals drive your technical tools</h2>
        <p>
            Sharp invest by your needs
        </p>    
    </header>
    
    return (

        <>{content}</>

    )


}

export default Header;