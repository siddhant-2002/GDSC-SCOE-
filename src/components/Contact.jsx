import React from "react";
import Navbar from "./Navbar";
import "./contact.css";

const Contact = () => {
	return (
		<div>
			<Navbar />

			<div className="maindiv">
				<div>
					<img
						className="gdscname"
						src="/images/gdscname.png"
						alt=""
					/>
				</div>

				<div className="contactdiv">
					<span className="span1">Find us on</span>
					<br />
					<br />
					<div className="contactdiv2">
						<span>
							<img
								className="contactlogo"
								src="/images/telegram.png"
								alt=""
							/>
						</span>
						<span className="span2">Telegram</span> <br />
						<br />
					</div>
					<div className="contactdiv2">
						<span>
							<img
								className="contactlogo"
								src="/images/twitter.png"
								alt=""
							/>
						</span>
						<span className="span2">Twitter</span> <br />
						<br />
					</div>
					<div className="contactdiv2">
						<span>
							<img
								className="contactlogo"
								src="/images/linkedin.png"
								alt=""
							/>
						</span>
						<span className="span2">LinkedIn</span> <br />
						<br />
					</div>
					<div className="contactdiv2"> 
						<span>
							<img
								className="contactlogo"
								src="/images/instagram.png"
								alt=""
							/>
						</span>
						<span className="span2">Instagram</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
