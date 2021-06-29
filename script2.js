//Object Function contructor

function Product(name, brand, price) {
    //constructor
    this.Name = name;
    this.Brand = brand;
    this.Price = Number(price);
}

const p1 = new Product("Mobile", "Apple", 50000);
const p2 = new Product("Laptop", "Dell", 45000);
const p3 = new Product("Earpod", "One plus", 2500);
const p4 = new Product("Tab", "Lenovo", 4000);
const p5 = new Product("Mobile", "Nokia", 45000);
const p6 = new Product("Laptop", "Lenovo", 48000);

//TODO: Create array and push object in 'productListView' Array

var productListView = [];

productListView.push(p1);
productListView.push(p2);
productListView.push(p3);
productListView.push(p4);
productListView.push(p5);
productListView.push(p6);

console.log(productListView);

//TODO:Display all data formatwise
console.log("-----Format Data in individual String-----");
for (let i = 0, length = productListView.length; i < length; i++) {
    // console.log(productListView[i]);
    const displayFormat = `${productListView[i].Name} from ${productListView[i].Brand} is priced at INR ${productListView[i].Price}.`;
    console.log(displayFormat);
}

//TODO:Pricewise Sorting(Ascending)
console.log("-----Pricewise Sorting(Ascending)-----");
productASortList = [...productListView];
productASortList.sort(
    (firstItem, secondItem) => firstItem.Price - secondItem.Price
);
console.table(productASortList);

//TODO:Pricewise Sorting(Descending)
console.log("-----Pricewise Sorting(Descending)-----");
productDSortList = [...productListView];
productDSortList.sort(
    (firstItem, secondItem) => secondItem.Price - firstItem.Price
);
console.table(productDSortList);

//TODO:Namewise Sorting(Ascending)
console.log("-----Namewise Sorting(Ascending)-----");
productNameAscSortList = [...productListView];
productNameAscSortList.sort(function(a, b) {
    let left = a.Name;
    let right = b.Name;
    return left === right ? 0 : left > right ? 1 : -1;
});
console.table(productNameAscSortList);

//TODO: Namewise Sorting(Descending) - Approch - 1
console.log("-----Namewise Sorting(Descending) -----");
productNameDeSortList = [...productListView];
productNameDeSortList.sort(function(a, b) {
    let left = a.Name;
    let right = b.Name;
    return left === right ? 0 : left > right ? -1 : 1;
});
console.table(productNameDeSortList);

//TODO:Namewise Sorting(Descending) - Approch-2
// productNameDeSortList = [...productNameAscSortList];
// console.log(productNameDeSortList.reverse());

//TODO: Search string.
console.log("-----Search string-----");
let FindAString = productListView.find(function(post, index) {
    if (post.Name == "Mobile") return true;
});
console.table(FindAString);

//TODO: Filter Data
console.log("-----Filter string-----");
let filterDataByName = productListView.filter(
    (filterData) => filterData.Name === "Mobile" && filterData.Price >= 40000
);
console.table(filterDataByName);

//TODO: Data (Product Array) in a string format
console.log("-----Whole Product data in single string-----");
let productShowcase = (productArray) => {
    // return productArray.Name;

    let strProducts = "";
    for (let i = 0, length = productArray.length; i < length; i++) {
        strProducts += `${productArray[i].Name}, ${productArray[i].Brand}, ${
      productArray[i].Price
    } ${i === length - 1 ? " " : "|"} `;
    }
    return strProducts;
};
productDisplay = productShowcase(productListView);
console.log(productDisplay);