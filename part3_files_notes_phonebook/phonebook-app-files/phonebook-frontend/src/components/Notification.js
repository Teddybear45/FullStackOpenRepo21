import React from "react";

const Notification = ({ message, error }) => {
	if (message === null) {
		return null;
	}
	let notificationStyle = {
		color: "green",
		background: "lightgrey",
		fontSize: "20px",
		borderStyle: "solid",
		borderRadius: "5px",
		padding: "10px",
		marginBottom: "10px",
	};
  console.log(error);
	if (error) {
		notificationStyle = { ...notificationStyle, color: "red" };
	}

	return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
