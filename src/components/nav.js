function Nav(){
   const links = [{
    id:1,
    url:"https://facebook.com",
    nombre:"Facebook"
   },
    {
        id:2,
        url:"https://instagram.com",
        nombre:"Instagram"
    },
    {
        id:3,
        url:"https://tiktok.com",
        nombre:"TikTok"
    }
]
   const hipervinculos = links.map(link=>{
       return( 
       <ul key={link.id}>
            <li>
                <a href={link.url}>{link.nombre}</a>
            </li>
        </ul>)
   })


    return(
        <nav>
            {hipervinculos}
        </nav>
    )
}
export default Nav;