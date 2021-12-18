const CardPop = (props) => {

    let thisImage = () => <img src={props.image} alt={props.altimage} />;
    
    const content =

    

    <div 
        className={props.className_4}
        style={{background: props.bg}}
            // className={props.className_4}
            // style={{background: props.bg}}
        >

            <div 
            className="homeIcon"
            onClick ={() => props.setSelectedCard("closed")}

            >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12 L17,15.59z"/></svg>
                
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> */}
                
            </div>

        <div>   

        <h1>{props.title}</h1>
       
        <p>{props.description}</p>
        {props.image.length > 0 &&
            thisImage(props.image , props.description)
        }

            

        </div> 

    </div>

    return (
        <>
            {content}
        </>
    )
}

export default CardPop;