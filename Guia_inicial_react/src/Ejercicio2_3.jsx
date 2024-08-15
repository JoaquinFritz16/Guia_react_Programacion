import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import FavouriteProd from "./components/FavouriteProd";
function Ejercicio_2_3() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [text, setText] = useState("");
	const [filtredProducts, setFiltredProducts] = useState([]);
	const [category, setCategory] = useState("");
	const [favourites, setFavourites] = useState([])

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((json) => {
				setProducts(json);
				setFiltredProducts(json);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	useEffect(()=>{
		const favouritesSave = localStorage.getItem('favourite')
		if (favouritesSave) {
			setFavourites(Json.parse(favouritesSave));
		}
	},[])

	useEffect(()=>{
		localStorage.setItem('favourites', JSON.stringify(favourites));
	},[favourites])
	const categories = [
		...new Set(products.map((product) => product.category)),
	];
	const handleFavourite = (product) => {
		setFavourites((prevFav)=>{
			const AlreadyFav = prevFav.some((fav)=>fav.id===product.id);
			if(AlreadyFav){
				return prevFav;
			}
			return [...prevFav, product];
		});
	};

	return (
		<>
			<h1>
				Ejercicio 2 y 3 (4: Modularizado): Fetching y Filtro de Búsqueda
			</h1>
			<SearchBar
				text={text}
				setText={setText}
				setFiltredProducts={setFiltredProducts}
				products={products}
			></SearchBar>
			<select onChange={(e) => setCategory(e.target.value)}>
				<option value="">Todas las categorias</option>	
				{categories.map((categoria, index) => (
					<option key={index} value={categoria}>
						{categoria}
					</option>
				))}
			</select>
			<FavouriteProd favourites={favourites}></FavouriteProd>
			{loading ? (
				<p>Cargando...</p>
			) : (
				<ul>
					{error && <li>Error:{error}</li>}
					{filtredProducts
						.filter(
							(product) =>
								!category || product.category === category
						)
						.map((product) => (
							<li key={product.id}>
								<ProductCard product={product} OnFavourite={handleFavourite}></ProductCard>
							</li>
						))}
				</ul>
			)}
		</>
	);
}
export default Ejercicio_2_3;
