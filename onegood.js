const menuList = [];
const priceList = [];
$$("ul.MuiList-padding").forEach((item) => {
	const list = item.innerText.split('\n\n');
	const category = list[0];
	const menu = [];
	const price = [];
	let status = 1;
	for (let i = 1; i < list.length; i+= 1) {
		if (status === 1) {
			menu.push(list[i]);
		}
		status += 1;
		if (list[i].indexOf('NT$') > -1) {
			price.push(list[i]);
			status = 1;
		}
	}
	menuList.push({
		item: [category].concat(menu)
	});
	priceList.push({
		item: [''].concat(price)
	});
});
console.log(JSON.stringify([{category: '菜單', list: menuList}, {category: '價格', list: priceList}]));
