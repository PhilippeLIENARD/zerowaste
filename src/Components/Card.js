/* eslint-disable jsx-a11y/anchor-has-content */
function Card({link, title, children, bg}) {
    return (
        <>
         <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            sx={{
            width: `100%`,
            boxShadow: `lg`,
            position: `relative`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: 4,
            py: [4, 5],
            color: `white`,
            background: bg || `none`,
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            "&:hover": {
                color: `white !important`,
                transform: `translateY(-5px)`,
                boxShadow: `xl`,
            },
            }}
            
         >
            <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
            <div
            sx={{
                textTransform: `uppercase`,
                letterSpacing: `wide`,
                pt: 4,
                fontSize: [4, 5],
                fontWeight: `medium`,
                lineHeight: 1,
            }}
            >
            {title}
            </div>
         </a>
        </>
    );
}
export default Card;