
const GifGridItem = ( {id, title, img} ) => {

    console.log(id, title, img);

    return (
        <div className="card">
            <img src={ img } alt={title} />
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem