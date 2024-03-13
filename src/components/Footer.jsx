import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div >
			<img className="footerline" src="./images/footerline.png" alt="" />
			<div className="maindiv">
				<div className="div1">
					<div className="contentdiv">
						<div className="explorediv">
							<span className="span1">Explore</span>
							<br />
							<br />
							<span className="span2">Events </span>
							<br />
							<span className="span2">Blogs</span>
							<br />
							<span className="span2">Proposition</span>
						</div>

						<div className="aboutdiv">
							<span className="span1">About</span>
							<br />
							<br />
							<span className="span2">GDSC SCOE</span>
							<br />
							<span className="span2">Team Members</span>
						</div>
					</div>

					<div className="logodiv">
                        <img className='logo' src="./images/gdscLogo.png" alt="Google Developer Student Clubs Logo" />  
                    </div>
				</div>

				<div className="div2">
                    <div className="contactdiv">
                        <span className="span1">Contact</span>
                        <br />
                        <br />
                        <span>
                            <img className="contactlogo" src="./images/insta.png" alt="" />
                        </span>
                        <br />
                        <span>
                            <img className="contactlogo" src="./images/mail.png" alt="" />
                        </span>
                        <br />
                        <span>
                            <img className="contactlogo" src="./images/tele.png" alt="" />
                        </span>
                    </div>
					
				</div>
			</div>
		</div>
	);
};

export default Footer;
