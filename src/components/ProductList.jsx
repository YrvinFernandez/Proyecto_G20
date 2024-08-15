import Pagination from '../components/Pagination'
import React, { useState, useEffect} from 'react'
import '../components/ProductList.css'
export const ProductList = () => {

    const API = 'http://localhost:3000/mujer'
    const [products, setProducts] = useState([])
    
    const totalProducts = products.length

    const [productsPerPage, setProductsPerPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const productList = async() => {
        const data = await fetch(API)
        const products = await data.json()

        setProducts(products);
    };

    useEffect(() => {
        productList();
    }, []);

  return  (
    <>
        <div className='container-products'>
            {products.map(p => (
                <div className='card-product' key={p.id}>
                    <figure className='container-img'>
                        <img src='../src/assets/prendas/vestido11_1.jpg' alt= {p.nombre} />
                    </figure>

                    <div className='info-product'> 
                        <h3>Tipo: {p.tipo}</h3>
                        <h3>{p.nombre}</h3>
                        <h3>Descripción: {p.descrip}</h3>
                        <h3>Material: {p.material}</h3>
                        <div>

                        <p>Colores disponibles:</p>
                        <ul>
                            {p.color.map((color, index) => (
                            <li key={index}>{color}</li>
                            ))}
                        </ul>
                    </div>
                        <div>
                            <h2>{p.nombre}</h2>
                            <p>Tallas disponibles:</p>
                            <ul >
                                {p.talla.map((talla, index) => (
                                <li key={index}>{talla} <b> </b></li>
                                ))}
                            </ul>
                        </div>
                    
                        <p className='price'>Precio: {p.moneda}<b> </b>
                        {p.precio}</p>
                        <button>Añadir a Carrito</button>
                    </div>
                </div>
            ))
            .slice(firstIndex, lastIndex)}
        </div>
        <Pagination 
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProducts={totalProducts}/>
    </>

  );
};

