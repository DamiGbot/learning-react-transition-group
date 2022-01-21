import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
	const styles = ["Modal"];

	return (
		<CSSTransition
			in={props.show}
			timeout={400}
			mountOnEnter
			unmountOnExit
			classNames={{
				enterActive: "modalOpen",
				exitActive: "modalClose",
			}}
		>
			<div className={styles.join(" ")}>
				<h1>A Modal</h1>
				<button className="Button" onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
