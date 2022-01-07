    
let isMobile = () => {  
    
    let isMobileStatus;
        
    let watchMediaSize = (mediaQuery) => (mediaQuery.matches) ? isMobile = true : isMobile = false;

    const mobileWidth = window.matchMedia("(max-width : 768px)");

    watchMediaSize(mobileWidth);

    mobileWidth.addEventListener("change" , watchMediaSize);    

    console.log ("isMobileStatus -> " + isMobileStatus);

    return isMobileStatus;

}  

export default isMobile;
