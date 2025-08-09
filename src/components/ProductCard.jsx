import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { MAX_QTY } from "../utils/utils";
import VariantsDropdown from "../components/VariantsDropdown";
import { useCartQty } from "../utils/useCartQty";

const ProductCard = memo(({ product, onAddToCart }) => {
  const { id, title, price, image, variants } = product;
  const [selectedVariant, setSelectedVariant] = useState(variants?.[0] || "");

  const qty = useCartQty(product.id);
  const reachedMax = qty >= MAX_QTY;

  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
        <img
            src={image}
            className="card-img-top p-3"
            alt={title}
            style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column justify-content-between gap-2">
            <div>
                <Link
                    to={`/product/${id}`}
                    className="card-title text-decoration-none text-dark"
                >
                    {title.length > 40 ? title.slice(0, 40) + "..." : title}
                </Link>
                <p className="card-text fw-bold">${price}</p>
            </div>
            <div>
                <VariantsDropdown
                    variants={variants}
                    selectedVariant={selectedVariant}
                    onChange={setSelectedVariant}
                />
                {reachedMax ? (
                    <button type="button" className="btn btn-secondary w-100" disabled>
                        Out of Stock
                    </button>
                    ) : (
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => onAddToCart({ ...product, selectedVariant })}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    </div>
  );
});

export default ProductCard;
