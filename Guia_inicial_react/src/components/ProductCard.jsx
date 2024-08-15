function ProductCard({ product, OnFavourite }) {
	const handleFavourite = () => {
		OnFavourite(product);
	}
	return (
		<>
			<h2>
				{product.title} - ${product.price}
			</h2>
			<br />
			<img src={product.image} width="100" height="50"></img>
			<p>Categoria: {product.category}</p>
			<button onClick={handleFavourite}>Fav</button>
		</>
	);
}
export default ProductCard;
