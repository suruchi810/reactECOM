import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
export default function Product(curElem){
    const {id, name, image, price, category} = curElem;
    return (
        <a href={`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name} />
                    <figcaption className="caption"></figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{<FormatPrice price={price}/>}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}