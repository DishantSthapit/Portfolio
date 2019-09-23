import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import SkillChart from '../components/SkillChart/SkillChart';
import TechnicalSkills from '../components/TechnicalSkills/TechnicalSkills';
import Services from '../components/Services/Services';

function NavSkills() {
	return (
		<div>
			<NavBar />
			<div className="color">
				<div className="skill-overview-wrapper">
					<div className="section-heading">SKILLS OVERVIEW</div>
					<SkillChart />
				</div>
				{/* <TechnicalSkills/> */}
				<div className="hr-line"></div>
				<Services />
			</div>
		</div>
	);
}

export default NavSkills;
