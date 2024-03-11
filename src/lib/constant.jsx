import image1 from "../../public/Home/sofa.png";
import image2 from "../../public/Home/image2.png";
import image3 from "../../public/Home/image3.png";
import image4 from "../../public/Home/image5.png";
import image5 from "../../public/Home/image4.png";


const Navdata = [
  {
    id: 1,
    name: "Home",
    href: "/home",
  },
  {
    id: 2,
    name: "Shop",
    href: "/shop",
  },
  {
    id: 3,
    name: "Product",
    href: "/product",
  },
  {
    id: 4,
    name: "Contact Us",
    href: "/contact-us",
  },
];

export { Navdata };

const Product = [
  {
    id: 1,
    title: "Loveseat Sofa",
    alt:"Loveseat Sofa",
    price: "$400.00",
    discount: "50%",
    discountprice: "$199.00",
    isNew: "New",
    image: image1,
    rating: 5,
  },
  {
    id: 2,
    title: "Table Lamp",
    alt:"Table Lamp",
    discount: "50%",
    discountprice: "$24.99",
    isNew: "New",
    image: image2,
    rating: 5,

  },
  {
    id: 3,
    title: "Beige Table Lamp",
    alt:"Beige Table Lamp",
    discount: "50%",
    discountprice: "$24.99",
    isNew: "New",
    image: image3,
    rating: 5,

  },
  {
    id: 4,
    title: "Toasted",
    alt:"Toasted",
    discount: "50%",
    discountprice: "$224.99",
    isNew: "New",
    image: image4,
    rating: 5,

  },
  {
    id: 5,
    title: "Bamboo basket",
    alt:"Bamboo basket",
    discount: "50%",
    discountprice: "$224.99",
    isNew: "New",
    image: image5,
    rating: 5,
   
  },
];

export { Product };
