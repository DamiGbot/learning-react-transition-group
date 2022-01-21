import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
	const styles = ["Backdrop", props.show ? "backdropOpen" : "backdropClose"];

	return <div className={styles.join(" ")}></div>;
};

export default backdrop;
