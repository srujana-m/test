import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import "./dropdown.css"
export default function DropdownMenu() {
return (
	<div style={{ display: 'block',
				width: 200,
				padding: 30 }}>
	<Dropdown className="dropdown">
		<Dropdown.Toggle variant="info">
	      EXPLORE
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="/">
			Home
		</Dropdown.Item>
		<Dropdown.Item href="https://eduhub-resume-generator.netlify.app/">
		Resume Generator
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Quiz
		</Dropdown.Item>
        <Dropdown.Item href="./write">
			Go To Courses
		</Dropdown.Item>
        <Dropdown.Item href="#">
			Check Internships
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}
