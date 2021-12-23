const CardPop = (props) => {

    let thisImage = () => <img src={props.image} alt={props.altimage} />;
    
    const content =

    <>
        
        
        <div 
        className="homeIcon"        

        onTouchEnd={() => {props.setSelectedCard(null) ; props.setMouseOverStatus([null,'noTouched'])}}

        onClick={() => {props.setSelectedCard(null) ; props.setMouseOverStatus([null,'noTouched'])}}
        

        >
            
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12 L17,15.59z"/></svg> */}
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> */}
            
        </div>

    

        <div 
            className={props.className_4}
            style={{background:props.bg}}

            onTouchMove={() => console.log("***move => " + document.getElementById('root').clientX)}
               
        >           

            
                <div className="wrapperCardPop">

                    <div>   

                    <h1>{props.title}</h1>
                
                    <p>{props.description}</p>
                    {props.image.length > 0 &&
                        thisImage(props.image , props.description)
                    }

                        

                    </div> 

                </div>

        </div>

    </>

    return (
        <>
            {content}
        </>
    )
}

export default CardPop;