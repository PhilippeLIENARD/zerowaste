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

        <h1>zerowaste.consulting</h1>

        <h2>Let your marketing goals drive your technical tools</h2>
        <p>
            Sharp invest by your needs
        </p>    

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
            d="M578.3,316.5c20.9-21.3,114.1,113.3,262.2,116.4c131.6,2.7,115.3-129.3,277.7-132.4
            c77.1-1.5,135.4,49.1,240.2,41.6c100.6-7.2,139.1-55.2,165-29.4c19.5,19.4-59.5,81.6-195.1,95.1c-114.9,11.4-169.1-12.1-248.5,10.2
            c-93.1,26.1-66.9,69.5-162.6,97.1c-72.6,20.9-190.8-15.5-251.9-60.4C603,408.7,563.3,331.7,578.3,316.5z"
            filter='url(#blur1)'
            >
                {/* <animateColor 
                attributeName="fill" 
                attributeType="XML"
                from="#FBB03B"
                to="#93278F"
                dur="6s"
                repeatCount="indefinite"
                /> */}
                
            </path>
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





       
    </header>
    
    return (

        <>{content}</>

    )


}

export default Header;