import './TattooPost.css'

function TattooPost(props){
    const { tattoo,onBgclick } = props;
    return(
        <div className="tattoo-post">
            <div className="tattoo-post-bg" onClick = {onBgclick}/>
            <div className="tattoo-post-content">
            <img src={tattoo. thumbnailUrl} />
                <img src={tattoo.fullUrl} />
<h4>{tattoo.title}</h4>
                </div>
        </div>
    )
}
export default TattooPost;