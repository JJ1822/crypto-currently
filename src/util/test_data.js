export function getData() {
	const promiseBarData = fetch("//rrag.github.io/react-stockcharts/data/barData.json")
		.then(response => response.json());
	return promiseBarData;
}
