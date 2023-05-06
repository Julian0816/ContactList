import React  from "react";
import avatar from "../../img/avatar.jpeg"
import PropTypes from "prop-types";
import propTypes from "prop-types";


export const ContactCard = props => {


	return (
		<li className="list-group-item contact-list grey">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={avatar} alt={props.name} className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button type="button" className="btn" data-bs-toggle="modal" data-bs-target={"#editModal-"+props.index}>
                        <i className="fas fa-pencil-alt mr-3" style={{color: "white"}} /> 
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
                        <i className="fas fa-trash-alt" style={{color: "white"}} />

						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
                    <i className="fas fa-map-marker-alt text-white mr-3" style={{color: "white"}} />
					<span className="text-white">{props.address}</span>
					<br />
					<span
	className="fa fa-phone fa-fw text-white mr-3"
	data-toggle="tooltip"
	title=""
	data-original-title="(870) 288-4149"
/>
<span className="text-white small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-white mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-white small text-truncate">{props.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
    name: propTypes.string,
    phone: propTypes.string,
    address: propTypes.string,
    email: propTypes.string,
    img: propTypes.string,
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};