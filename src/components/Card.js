
const Card = ({id,name,email}) =>{
    return(
    <div className="tc bg-light-green dib bx3 ma3 ma2 grow bw2">
        <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}
export default Card;