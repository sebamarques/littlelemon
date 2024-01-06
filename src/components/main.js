
function Main(){
    const highlights=[
    {
        name:"Greek salad",
        description:"The famous greek salad of crispy",
        price:"$ 10",
        img:null
    },
    {
        name:"Greek salad",
        description:"The famous greek salad of crispy",
        price:"$ 10",
        img:null
    },
    {
        name:"Greek salad",
        description:"The famous greek salad of crispy",
        price:"$ 10",
        img:null
    }
    ]
    const new_highlights= highlights.map(highlight=>{
        return(
            <div className="highlight">
                <div className="highlights">
                    <p>{highlight.name}</p>
                    <p>{highlight.description}</p>
                    <p className="precio">{highlight.price}</p>
                    <img alt="logo de Little Lemon"></img>
                </div>
            </div>
           )
    })
    const testimonials=[{
        star:"",
        profile:"",
        img:"",
        review:""
    }]
    const new_testimonials=testimonials.map(testimonial=>{
       return(
        <>
        <p>{testimonial.star}</p>
        <p>{testimonial.profile}</p>
        <p>{testimonial.img}</p>
        <p>{testimonial.review}</p>
       </>
       )
    })
    const abouts=[{
        name:"",
        description:"",
        img1:"",
        img2:""
    }]
    const new_abouts = abouts.map(about=>{
        return(
            <>
            <p>{about.name}</p>
            <p>{about.description}</p>
            <img src={about.img1} alt="Dueño Mario"></img>
            <img src={about.img2} alt="Dueño Adrian"></img>
            </>
        )
    })
    return(
        <main>
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
            <div className="columns-container">{new_highlights}</div>
            <div>{new_testimonials}</div>
            <div>{new_abouts}</div>
        </main>
    )
}
export default Main;
