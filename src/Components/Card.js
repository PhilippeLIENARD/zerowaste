function Card(props) {    

    const content = props.projects.map((project) =>   
         
            <a 
            key={project.id}
            href={project.link}
            target="_blank" 
            rel="noreferrer noopener"
            style={{background: project.bg}}           
            >
                <div>

                    <h2>{project.title}</h2>

                    <p>{project.description}</p>

                </div>

            </a>       
    );
    
    return (
        <>
            {content}
        </>
    );

}

export default Card;