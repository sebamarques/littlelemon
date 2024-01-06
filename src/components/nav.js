import imagen from "../img/logo.jpg"
function Nav(){
   const links = [
    {nombre:"Home",
    url:""},
    {nombre:"About",
    url:""},
    {nombre:"Menu",
    url:""},
    {nombre:"Reservations",
    url:""},
    {nombre:"Order online",
    url:""},
    {nombre:"Login",
    url:""}
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
        <>
        <nav>
        <img src={imagen} alt="Logo Little Lemon" width="120px" height="50px"></img>
            {hipervinculos}
        </nav>
        </>
    )
}
export default Nav;