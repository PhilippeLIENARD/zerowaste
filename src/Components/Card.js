const projetcs = [

    {
        title : "Adwords" ,
        description : "Certification earned" ,
        link : "https://skillshop.exceedlms.com/profiles/71ae9f8215d444b5bc15e8601278c097"

    },
    {
        title : "Conversion Rate Optimization" ,
        description : "Mobile experience optimisation" ,
        link : "https://skillshop.exceedlms.com/student/award/uzr1xLgdEDrewZXBQFtmVMUZ"

    },
    {
        title : "Google Tag Manager" ,
        description : "Get the metrics to prioritize the testing of your hypothesis" ,
        link : "https://skillshop.exceedlms.com/profiles/71ae9f8215d444b5bc15e8601278c097"

    }

];

projetcs.map(Card);

function Card ({thisproject}) {
    return (
        <>
            <a 
            href="{thisproject.link}" 
            target="_blank" 
            rel="noreferrer noopener">

                <div>

                    <h2>{thisproject.title}</h2>

                    <p>{thisproject.description}</p>

                </div>

            </a>

        </>
    );

}

export default Card;