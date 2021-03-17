import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
			<img
				className="card-img-top"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR4uWtQLnV3R-BoF3nVzsbW__XBg3XcipFA&usqp=CAU"
				alt="Image Insert Here"
			/>

			<div className="card-body">
				<h5 className="card-title property-under">{props.data.name}</h5>
				{"gender" in props.data && <p className="card-text">{`Gender: ${props.data.gender}`}</p>}
				{"hair_color" in props.data && <p className="card-text">{`Hair Color: ${props.data.hair_color}`}</p>}
				{"eye_color" in props.data && <p className="card-text">{`Eye-Color: ${props.data.eye_color}`}</p>}
				{"population" in props.data && <p className="card-text">{`Population: ${props.data.population}`}</p>}
				{"climate" in props.data && <p className="card-text">{`Climate: ${props.data.climate}`}</p>}
				{"terrain" in props.data && <p className="card-text">{`Terrain: ${props.data.terrain}`}</p>}
				{"model" in props.data && <p className="card-text">{`Model: ${props.data.model}`}</p>}
				{"manufacturer" in props.data && (
					<p className="card-text">{`Manufacturer: ${props.data.manufacturer}`}</p>
				)}
				{"passengers" in props.data && <p className="card-text">{`Passengers: ${props.data.passengers}`}</p>}
				<div className="d-flex flex-row justify-content-between">
					<button type="button" className="btn learn-color">
						<Link to={`/single/${props.data.url.replace("http://swapi.dev/api/", "")}`}>
							{"Learn more!"}
						</Link>
					</button>
					<button
						type="button"
						className="btn fav-button"
						onClick={() => actions.saveFavorites(props.data.name, "people")}>
						<i className="far fa-heart fav-icn" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object
};
