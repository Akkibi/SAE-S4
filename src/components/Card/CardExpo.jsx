export const Card = ({titre, text, image, image_name}) => {
	if(image == "") {
		return (
		<div className="card_container">
			<h2>{titre}</h2>
			<p>{text}</p>
			<a href="https://www.youtube.com/watch?v=LD7zsG_ec1c&ab_channel=RecordShop">Read all about it</a>
		</div>
		);	
	} else {
		return (
		<div className="card_container">
			<h2>{titre}</h2>
			<p>{text}</p>
			<img src={image} alt={image_name}/>
			<a href="https://www.youtube.com/watch?v=LD7zsG_ec1c&ab_channel=RecordShop">Voir plus</a>
		</div>
		);	
	}
}