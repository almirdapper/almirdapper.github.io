import React from "react";
import PropTypes from "prop-types";
import CompanyRegistationC from "../../components/companyRegistation";
import "./styleCompany.css";
import { Link } from "react-router-dom";
class CompanyRegistation extends React.Component {
	render() {
		return (
			<>
				<div className="company">
					<div className="classCompany">
						<ul className="classUl">
							<h1>Nova Empresa</h1>
							<Link to="/Map">
								<button className="classBtnCadastrar">Cadastrar</button>
							</Link>

							<Link to="/">
								<button className="classBtnCancelar">Cancelar</button>
							</Link>
							<CompanyRegistationC
								typeDescricao="Razão Social "
								typeInput="text"
							/>
							<CompanyRegistationC
								typeDescricao="Nome Fantasia "
								typeInput="text"
							/>
							<CompanyRegistationC typeDescricao="CNPJ " typeInput="text" />
							<CompanyRegistationC typeDescricao="E-mail " typeInput="email" />
							<CompanyRegistationC typeDescricao="CEP " typeInput="text" />
							<CompanyRegistationC typeDescricao="Endereço" typeInput="text" />
							<CompanyRegistationC typeDescricao="Número " typeInput="number" />
							<CompanyRegistationC typeDescricao="Bairro " typeInput="text" />
							<CompanyRegistationC typeDescricao="Cidade " typeInput="text" />
							<CompanyRegistationC
								typeDescricao="Complemento "
								typeInput="text"
							/>
							<CompanyRegistationC typeDescricao="latitude " typeInput="text" />
							<CompanyRegistationC
								typeDescricao="longitude "
								typeInput="text"
							/>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

CompanyRegistation.prototypes = {
	typeDescricao: PropTypes.string.isRequired,
	typeInput: PropTypes.string.isRequired,
};

export default CompanyRegistation;
