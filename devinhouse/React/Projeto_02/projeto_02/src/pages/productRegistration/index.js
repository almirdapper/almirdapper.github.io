import React from "react";
import ProductRegistationC from "../../components/productRegistration";
import "./styleProduct.css";

class ProductRegistation extends React.Component {
	render() {
		return (
			<>
				<div className="productRegistation">
					<div className="productContainer">
						<ul>
							<h1>Novo Produto</h1>
							<button className="classBtnCadastrar">Cadastrar</button>
							<button className="classBtnCancelar">Cancelar</button>
							<img src="../../img/produto.png" />

							<ProductRegistationC descricao="URL da imagem" typeInput="text" />
							<ProductRegistationC
								descricao="Nome do Produto"
								typeInput="text"
							/>
							<ProductRegistationC
								descricao="Preço Unitario"
								typeInput="text"
							/>
							<li>
								<span>Descrição</span>
							</li>
							<li>
								<textarea></textarea>
							</li>

							<li>
								<span>Fornecedor</span>
							</li>
							<li>
								<select className="classSelect"></select>
							</li>
							<li>
								<span>Grupo</span>
							</li>
							<li>
								<select className="classSelect"></select>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default ProductRegistation;
