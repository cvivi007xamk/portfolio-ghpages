import React from "react";

import Introduction from "./HomepageComponents/Introduction";
import AboutMe from "./HomepageComponents/AboutMe";
import Contact from "./HomepageComponents/Contact";
import Resume from "./HomepageComponents/Resume";
import Education from "./HomepageComponents/Education";
import Portfolio from "./HomepageComponents/Portfolio";

const Homepage = React.forwardRef((props, ref) => {
	const { resumeRef, introductionRef, aboutRef, contactRef, portfolioRef } =
		ref;

	return (
		<>
			<Introduction ref={introductionRef} />
			<AboutMe ref={aboutRef} />
			<Contact ref={contactRef} />
			<Resume ref={resumeRef} />
			<Education />
			<Portfolio ref={portfolioRef} />
		</>
	);
});

export default Homepage;
