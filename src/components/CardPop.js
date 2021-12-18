const CardPop = (props) => {

    // let thisImage = () => <img src={props.image} alt={props.altimage} />;
    
    const content =

        <div 
        className="card cardPop"
        style={{background: props.bg}}
            // className={props.className_4}
            // style={{background: props.bg}}
        >
          <div
       
          >   

        <h1>{props.title}</h1>
        <h2>TEST POP</h2>
        {/* <p>{props.description}</p>
        {props.image.length > 0 &&
            thisImage(props.image , props.description)
        } */}

            

        </div> 

    </div>

    return (
        <>
            {content}
        </>
    )
}

export default CardPop;