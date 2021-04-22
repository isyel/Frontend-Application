import React, { useState } from "react";
import { connect } from "react-redux";
import { saveProduct } from "../../redux/actions/productActions";
import "./TabContent.css";

function TabContent({ product, saveProduct, trl, configuration }) {
	const [isAttributeTab, setIsAttributeTab] = useState(false);

	const handleDescriptionChange = (event) => {
		product.description = event?.target.innerText;
		saveProduct(product).catch((error) => {
			console.log("Saving product failed", error);
		});
	};

	return (
		<div className="description">
			<div className="description__details">
				<div
					onClick={() => setIsAttributeTab(false)}
					style={{
						backgroundColor: !isAttributeTab
							? configuration.mainColor
							: "rgb(241, 239, 239)",
						color: !isAttributeTab ? "white" : "rgb(141, 141, 141)",
					}}>
					Description
				</div>
				<div
					onClick={() => setIsAttributeTab(true)}
					style={{
						backgroundColor: isAttributeTab
							? configuration.mainColor
							: "rgb(241, 239, 239)",
						color: isAttributeTab ? "white" : "rgb(141, 141, 141)",
					}}>
					Attribute
				</div>
			</div>
			<div className="description__attribute">
				{!isAttributeTab && (
					<div>
						<div
							contentEditable={true}
							suppressContentEditableWarning={true}
							onBlur={handleDescriptionChange}>
							{product.description}
						</div>
					</div>
				)}
				{isAttributeTab && trl && (
					<>
						<strong>Categories</strong>
						<ul className="description__attribute__list">
							{product.categories?.map((category, index) => (
								<li className="description__attribute__list__item" key={index}>
									{category.name}
								</li>
							))}
						</ul>
						<strong>Business Model</strong>
						<ul className="description__attribute__list">
							{product.businessModels?.map((singleBusinessModel, index) => (
								<li className="description__attribute__list__item" key={index}>
									{singleBusinessModel.name}
								</li>
							))}
						</ul>
						<strong>TRL</strong>
						<ul className="description__attribute__list">
							{trl?.map((singleTrl, index) => (
								<li className="description__attribute__list__item" key={index}>
									{singleTrl.name}
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		configuration: state.configuration,
		product: state.product,
	};
}

const mapDispatchToProps = {
	saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
