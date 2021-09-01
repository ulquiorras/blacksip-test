import React, {useState, useEffect} from 'react';

export const List = () =>{


        const url = ('https://blackisp.herokuapp.com/products');
        const [product, setProduct] = useState([]);

        useEffect(() => {
            getData()
        }, [])

        const getData = async () =>{
            const data = await fetch(url)
            const products = await data.json()
            /* console.log(products) */
            setProduct(products)
        }
        

        return(
        <div>
            <div className="list">
                <div className="card">
                    <div className="header">
                        <h4><strong>RESUMEN DE LA ORDEN</strong></h4>
                    </div>
                    
                    { product.map(function(object, i){
                        return<div className="body" key={i}>
                            <div className="col1">
                                <img src={object['image']} />
                            </div>
                            <div className="col2">
                                <p>{object['name']}</p>
                            </div>
                            <div className="col3">
                                <p><strong>${object['price']}</strong></p>
                            </div>
                        </div>
                    })}
                        
                    <div className="btn">
                            <button type="submit" className="btn-editar"><strong>Editar</strong></button>
                        </div>
                    <div className="footer">
                        <div className="subtotal">
                            <div className="line1">
                                <div className="col-1">
                                    <p><strong>SUBTOTAL</strong></p>
                                </div>
                                <div className="col-2">
                                    <p><strong>$13974</strong></p>
                                </div>
                            </div>

                            <div className="line2">
                                <div className="col-1">
                                    <p><strong>ENVIO</strong></p>
                                </div>
                                <div className="col-2">
                                    <p><strong>A calcular</strong></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="total">
                            <div className="col-1">
                                <p><strong>TOTAL</strong></p>
                            </div>
                            <div className="col-2">
                                <p><strong>$13974</strong></p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        )

}

