import React from 'react';

import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

export default function Topbar() {
	return (
		<>
			<header className="topbar">
				<div className="container">
					<a href="/" className="topbar__logo">
						<LogoSvg alt="Logo contacts app" />
					</a>
				</div>
			</header>
		</>
	);
}


