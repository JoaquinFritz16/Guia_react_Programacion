import { useState, useEffect } from "react";
function Ejercicio_2_3(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState("");
    const [filtredProducts, setFiltredProducts] = useState([]);
    const [category, setCategory] = useState("");

    const search = (e) => {
        const value = e.target.value;
        setText(value)
        if (value === ""){
            setFiltredProducts(products)
        }else{
        setFiltredProducts(
            products.filter(product => product.title.toLowerCase().startsWith(value.toLowerCase())
            )
        );
        }
    }

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json)=>{
            setProducts(json)
            setFiltredProducts(json)
            })
        .catch((error) => setError(error))
        .finally(()=>setLoading(false))
    }, []);

    const categories = [...new Set(products.map((product)=>product.category))];

    return (
        <>
        <h1>Ejercicio 2 y 3: Fetching y Filtro de Búsqueda</h1>
        <input type="text" value={text} onChange={search}></input>
        <select onChange={(e)=> setCategory(e.target.value)}>
            <option value="">Todas las categorias</option>
            {categories.map((categoria, index)=>(
                <option key={index} value={categoria}>{categoria}</option>
            ))}
        </select>
        {loading ? (
            <p>Cargando...</p>
        ):(
        <ul>
            {error && <li>Error:{error}</li>}
            {filtredProducts
            .filter((product)=>!category || product.category === category)
            .map((product) => (
                <li key={product.id}>{product.title}    -   ${product.price}
                <br />
                <img src={product.image} width="100" height="50"></img>
                </li>
                
            ))}
        </ul>
        )}
        </>
    )
}
export default Ejercicio_2_3;