import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({ log }) => {
	return (
		<li className="collection-item">
			<div className="">
				<a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'cyan-text'}`}>
					{log.message}
				</a>
				<br />
				<span className="grey-text">
					<span className="black-text">ID: {log.id}</span>
					last updated by{''}
					<span className="black-text">{log.tech}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a" />
					<a href="#!" className="secondary-content">
						<i className="material-icons grey-text">delete</i>
					</a>
				</span>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired
};

export default LogItem;