import logo from '../images/logo.svg';

const Header = () => {

    const content = 

    <header className="Page-header">
        {/* <img src={logo} className="React-logo" alt="logo" /> */}
        

        {/* <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path 
                id="path_1"
                fill="none" 
                stroke="lightgrey"
                strokeWidth="0.5"
                d="M20,50 
                C20,-50 180,150 180,50 
                C180-50 20,150 20,50 
                z" />

            <circle r="5" fill="red">
                <animateMotion 
                dur="10s" 
                repeatCount="indefinite"
                // path="M20,50 
                // C20,-50 180,150 180,50 
                // C180-50 20,150 20,50 
                // z" 
                >
                        <mpath xlinkHref='#path_1' />

                </animateMotion>
            </circle>
        </svg> */}

        <svg 
        className='smoothLight'
        viewBox="0 0 2098.4 815.4"
        >
            <defs>
                <filter id='blur1' y="-50%" height="280%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
                </filter>
            </defs>

            <path 
           
            fill="#FBB03B"
            d="M578.3,316.5c20.9-21.3,114.1,113.3,262.2,116.4C972,435.5,992.6,331.1,1155,328c77.1-1.5,98.5,21.6,203.3,14.1
            c100.6-7.2,163.4-34.3,165-29.4c2.1,6.5-104.8,64.5-240.4,78c-114.9,11.4-136.7-40.2-216.1-17.9c-93.1,26.1-88.4,93.9-184.1,121.5
            c-72.6,20.9-156.4,5.3-217.4-39.6C603,408.7,563.3,331.7,578.3,316.5z"
            filter='url(#blur1)'
            
                />
        Sorry, your browser does not support inline SVG.
        </svg>

        {/* <svg height="110" width="110">

            <defs>
                <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                </filter>
            </defs>
            <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)" />
            Sorry, your browser does not support inline SVG.  
        </svg> */}





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