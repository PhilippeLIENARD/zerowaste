const Card = (props) => {   
    
    // console.log('props ');
    
    let iamCliked = () => (props.clickState === props.id) ? true : false;

    let thisImage = () => <img src={props.image} alt={props.altimage} />;

    const content = 
             <div             
            className={iamCliked() ? props.className_2 : props.className}
            style={{background: props.bg}}
            id={props.id}
            // onClick={() => props.setClikState(props.id) }
            onMouseOver={() => {props.setClikState(props.id) ; console.log("OVER -> " + props.clickState)}}
            // onMouseOut={() => {props.setClikState(null) ; console.log("OUT -> " + props.clickState)}}
            >

            {console.log("clickState value -> " + props.clickState + " this ID value ->  " + props.id )}

                <div>                 
                    
                    <h2>{props.title}</h2>                    

                    {iamCliked() ? '**** SELECTED !' : 'NOT SELECTED'}

                    <p>{iamCliked() ? props.description : null}</p>

                    {iamCliked()? thisImage() : null}

                </div>

        </div> 
      
     
       
    return (
        <>
            {content}
        </>
    );

}


export default Card;