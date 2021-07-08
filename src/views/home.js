import React from "react";


import Contact from '../components/contact'
import imagen1 from '../img/1-500x400.jpg'
import imagen2 from '../img/imagen2-300x200.jpg'
import imagen3 from '../img/imagen3.jpg'
import imagen4 from '../img/imagen4.jpg'
import imagen5 from '../img/imagen5.jpg'


const Home = () => {

    return (
        <>
        <div className="body-home">
            <div className="container">
                <h1 className="text-center">Controlify Pro</h1>
                <div className="card mb-4-center max-width: 500px;">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card-body">
                                
                                <h3 className="card-text">Aumenta la productividad de tu empresa.</h3>
                                <h3 className="card-text">Gestiona las horas de tus proyectos.</h3>
                                <h3 className="card-text">Aumenta el rendimiento de tu equipo.</h3>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <img src= {imagen1} className="img-fluid  rounded-circle" alt="..."/> 
                        </div>                    
                    </div>
                </div>
            </div>
            
            
        
            
                <div className="container text-center">
                    <div>
                        <h1 className>Porque Usar?</h1>
                    </div>
                    
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen4} className="card-img-top img-circle" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen5} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>
            
            <div className="container-fluid">
                <div class="card text-center">
                    <h1 className>Quienes Somos?</h1>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                        </div>
                    </div>
                </div>

            <div className="container-fluid">
                <div>
                    <h1 className="text-center">Como Usar?</h1>
                </div>
                
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div classname="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div classname="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>   
        </div>
        
        <Contact/>
        </>
        
    )
}

export default Home;