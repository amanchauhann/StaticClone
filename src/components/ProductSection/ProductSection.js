import React from "react";
import "./ProductSection.css";

const productContent = [
  {
    image: "assets/privacy.svg",
    title: "Privacy Policy Generator",
    description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    image: "assets/terms.svg",
    title: "Terms & Conditions Generator",
    description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    image: "assets/domain.svg",
    title: "Domain Name Generator",
    description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    image: "assets/invoice.svg",
    title: "Invoice Generator",
    description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

const ProductSection = () => {
  return (
    <div className="productContainer">
      <div className="HeadingMain">
        <h1 className="HeadingContent">Try our other free products</h1>
      </div>
      <section className="productItems">
        {productContent.map((data, index) => (
          <div key={index} className="productCard-styles">
            <img src={data.image} alt={`${data.title}`} />
            <h5 className="productCard-title">{data.title}</h5>
            <p className="productCard-description">{data.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export { ProductSection };
