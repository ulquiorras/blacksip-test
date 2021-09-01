import React from 'react';
import image from '../assets/uMOPx1T.jpg'

export class List extends React.Component{
    render(){
        return(
        <div>
            <div className="list">
                <div className="card">
                    <div className="header">
                        <h4><strong>RESUMEN DE LA ORDEN</strong></h4>
                    </div>
                    <div className="body">
                        <div className="col1">
                            <img src={image} />
                        </div>
                        <div className="col2">
                            <p>COFRE LADY EMBLEM 75 ML EDP + 7,5 ML EDP + 100 ML B</p>
                        </div>
                        <div className="col3">
                            <p><strong>$1890</strong></p>
                        </div>
                    </div>
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
}

export default List;
