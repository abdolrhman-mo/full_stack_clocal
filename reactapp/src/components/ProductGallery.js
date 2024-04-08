import { useEffect, useState } from 'react'
import { products as jsonProducts } from '../data'
import Product from '../Product'

// TODO: Max num of items in gallery

export default function ProductGallery({title, tag}) {

    let [products, setProducts] = useState([])
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('api/')
        let data = await response.json()
        setProducts(data)
    }

    let filtered1 = []
    let filtered2 = []
    let filtered = []
    if (tag === 'all') {
        filtered1 = jsonProducts.map(product => product)
        filtered2 = products.map(product => product)
        filtered = filtered1.concat(filtered2)
    } else {
        filtered1 = jsonProducts.filter(product =>
            product.product_tag[0] === tag || product.product_tag[1] === tag
            // product.tag[0] === tag || product.tag[1] === tag
        )
        filtered2 = products.filter(product => 
            product.product_tag.split(',')[0] === tag || product.product_tag.split(',')[1] === tag 
        )
        filtered = filtered1.concat(filtered2)
    }
    // if (tag === 'all') {
    //     filtered = products.map(product => product)
    // } else {
    //     filtered = products.filter(product =>
    //         product.tag[0] === tag || product.tag[1] === tag
    //     )
    // }

    const listItems = filtered.map(product =>
        <div className="col-6">
            <Product 
                name={product.product_name}
                imgUrl={product.product_img}
                sale={product.product_sale}
                price1={product.product_price1}
                price2={product.product_price2}
                index={product.product_index}
            />
        </div>
        )
    return (
        <div className="product-gallery">
            <div className="container">
                <h2>{title}</h2>
                <div className="row">
                    {listItems}
                </div>
            </div>
        </div>
    )
}