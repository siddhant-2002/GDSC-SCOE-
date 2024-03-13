import "./eventslider.css";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
	{url: "/images/Event.png"},
	{url: "/images/Hackathons.png"},
	{url: "/images/Workshops.png"},
	{url: "/images/StudyJams.png"},
];

const EventSlider = () => {
	return (
		<div>
			<div className="eventslider" style={{borderRadius: '50px', overflow: 'hidden'}}>
				<SimpleImageSlider
					width={1400}
					height={600}
					images={images}
					showBullets={true}
					showNavs={true}
					style={{
						borderRadius: '50px',
						boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
						overflow: "hidden",
					}}
				/>
			</div>
		</div>
	);
};

export default EventSlider;
