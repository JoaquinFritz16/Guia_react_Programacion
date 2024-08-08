function SearchBar({ text, setText, setFiltredProducts, products }) {
	const handleSearch = (e) => {
		const value = e.target.value;
		setText(value);
		if (value === "") {
			setFiltredProducts(products);
		} else {
			setFiltredProducts(
				products.filter((product) =>
					product.title.toLowerCase().startsWith(value.toLowerCase())
				)
			);
		}
	};
	return (
		<>
			<input type="text" value={text} onChange={handleSearch}></input>
		</>
	);
}
export default SearchBar;
