import React from "react";

export default function Contacts({ children }) {
	return (
		<>
			<div className="container" id="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Data de admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{children}
				</section>
			</div>
		</>
	);
}

