import logo from '../images/logo.svg';

const Header = () => {

    const content = 

    <header className="Page-header">
       
        <div className='headerClass'>
        <h1>zerowaste.consulting</h1>

        <h2>Let your marketing goals drive your technical tools</h2>
        <p>
            Sharp invest by your needs
        </p>    
        </div>

       
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
            
                
            </path>
        
      </svg>



       
    </header>
    
    return (

        <>{content}</>

    )


}

export default Header;