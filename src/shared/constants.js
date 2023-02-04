import Checkout from "../Components/CheckOut/CheckOut";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import ProductsDetialsItem from "../Components/ProductsDetials/ProductsDetialsItem";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import SignInpage from "../Components/SignInPage/SignInPage";
import { Home } from "../Pages/Home";
import {
  FORGOT_PASSWORD,
  HOME,
  PRODUCT_DETAILS,
  RESET_PASSWORD,
  SHOPPING_CART,
  SIGNIN,
  SIGNUP,
  CHECKOUT,
  CREATEACCOUNT,
} from "./routes";

export const BOX_DATA = [
  {
    heading: "Upgrade your home | Amazon Brands & more",
    link: "Explore more from Amazon Pay",

    Array1: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
        sub: "Smart LED TVS",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg",
        sub: "Appliances",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg",
        sub: "Furniture",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg",
        sub: "Kitchen products",
      },
    ],
  },
  {
    heading: "Amazon Pay | Book your travel tickets....",
    link: "Explore more from Amazon Pay",

    Array1: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg",
        sub: "Smart LED TVS",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg",
        sub: "Appliances",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg",
        sub: "Furniture",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg",
        sub: "Kitchen products",
      },
    ],
  },
  {
    heading: "Revamp your home in style...........................",
    link: "See More",

    Array1: [
      {
        img: "/img/m1.jpg",
        sub: "Claim your scratch cards",
      },
      {
        img: "/img/m2.jpg",
        sub: "Redeem your rewards",
      },
      {
        img: "/img/m3.jpg",
        sub: "Unlock more rewards",
      },
      {
        img: "/img/m4.jpg",
        sub: "Explore all offers in one ",
      },
    ],
  },
];

export const BOX_DATA_2 = [
  {
    heading: "Up to 60% off | Styles for Men offers",
    link: "See all offers",

    Array1: [
      {
        img: "/img/s1.jpg",
        sub: "Clothing",
      },
      {
        img: "/img/s2.jpg",
        sub: "Footwear",
      },
      {
        img: "/img/s3.jpg",
        sub: "Watches",
      },
      {
        img: "/img/s4.jpg",
        sub: "bags & luggage",
      },
    ],
  },
  {
    heading: "Revamp your home in style style........",
    link: "Explore all",

    Array1: [
      {
        img: "/img/f1.jpg",
        sub: "Bedsheet curtain",
      },
      {
        img: "/img/f2.jpg",
        sub: "Home decolration",
      },
      {
        img: "/img/f3.jpg",
        sub: "Home storage",
      },
      {
        img: "/img/f4.jpg",
        sub: "Lighting solution",
      },
    ],
  },
  {
    heading: "Car & bike essentials | Up to 60% off",
    link: "See more",

    Array1: [
      {
        img: "/img/c1.jpg",
        sub: "Cleaning accessoiers",
      },
      {
        img: "/img/c2.jpg",
        sub: "Tyre & rim care",
      },
      {
        img: "/img/c3.jpg",
        sub: "helmets",
      },
      {
        img: "/img/c4.jpg",
        sub: "Vacuum cleaner",
      },
    ],
  },
  {
    heading: "Top rated, premium quality | Amazon Brands & more",
    link: "See More",

    Array1: [
      {
        img: "/img/c1.jpg",
        sub: "Home Products",
      },
      {
        img: "/img/c2.jpg",
        sub: "Furniture",
      },
      {
        img: "/img/c3.jpg",
        sub: "Daily essentials",
      },
      {
        img: "/img/c4.jpg",
        sub: "Fashion",
      },
    ],
  },
];

export const electronicsDevices = [
  {
    heading: "Electronics devices for home office",
    link: "See More",

    Array1: [
      {
        img: "img/Electronics devices/e1.jpg",
        sub: "SmartWatchs",
      },
      {
        img: "img/Electronics devices/e2.jpg",
        sub: "Tablets",
      },
      {
        img: "img/Electronics devices/e3.jpg",
        sub: "Laptops",
      },
      {
        img: "img/Electronics devices/e4.jpg",
        sub: "Moniters",
      },
    ],
  },
];

export const Treanding_Array = [
  "Best Sellers",
  "Mobiles",
  "Books",
  "Today's Deal",
  "Electronics",
  "Fashion",
  "Best Sellers",
  "Mobiles",
  "Books",
  "Today's Deal",
  "Electronics",
  "Fashion",
  "Mobiles",
  "Books",
  "Today's Deal",
];

export const hiddenLanguageBoxData = [
  "हिन्दी",
  "தமிழ்",
  "తెలుగు",
  "ಕನ್ನಡ",
  "മലയാളം",
  "বাংলা",
  "मराठी",
];

export const yourlistData = [
  "Create a Wish List",
  "Wish from Any Website",
  "Baby Wishlist",
  "Discover Your Style",
  "Explore Showroom",
];
export const yourAccountData = [
  "Your Account",
  "Your Orders",
  "Your Wish List",
  "Your Recommendations",
  "Your Prime Membership",
  "Your Prime Video",
  "Your Subscribe & Save Items",
  "Memberships & Subscriptions",
  "Your Amazon Business Account",
  "Your Seller Account",
  "Manage Your Content and Device",
];
// export const imageSliderData = [
//   { url: "/img/b4.jpg" },
//   { url: "/img/b10.jpg" },
//   { url: "/img/b11.jpg" },
//   { url: "/img/b12.jpg" },
//   { url: "/img/b13.jpg" },
//   { url: "/img/b14.jpg" },
//   { url: "/img/b2.jpg" },
//   { url: "/img/b3.jpg" },
//   { url: "/img/b5.jpg" },
//   { url: "/img/b6.jpg" },
//   { url: "/img/b7.jpg" },
//   { url: "/img/b8.jpg" },
//   { url: "/img/b9.jpg" },
// ];

export const LocalShopsCollectionData = [
  { img: "/img/Refresh your home ambiance/p1.jpg" },
  { img: "/img/Refresh your home ambiance/p2.jpg" },
  { img: "/img/Refresh your home ambiance/p3.jpg" },
  { img: "/img/Refresh your home ambiance/p4.jpg" },
  { img: "/img/Refresh your home ambiance/p5.jpg" },
  { img: "/img/Refresh your home ambiance/p6.jpg" },
];

export const BeautyCare = [
  { img: "/img/Beauty & Personal Care/b1.jpg" },
  { img: "/img/Beauty & Personal Care/b2.jpg" },
  { img: "/img/Beauty & Personal Care/b3.jpg" },
  { img: "/img/Beauty & Personal Care/b4.jpg" },
  { img: "/img/Beauty & Personal Care/b5.jpg" },
  { img: "/img/Beauty & Personal Care/b6.jpg" },
];

export const birthday = [
  {
    heading: "For all birthday gifting and celebration needs",
    img: "/img/Birthday.jpg",
    link: "See more",
  },
  {
    heading: "Up to 60% off | Professional tools & more",
    img: "/img/tool.jpg",
    link: "See more",
  },
  {
    heading: "Sell on Amazon with 50% off on Selling Fee",
    img: "/img/girl.jpg",
    link: "Register now",
  },
];

export const hoodiesData = [
  {
    id: "errr",
    img: "/img/Hoodies/h1.jpg",
    mainImg: "/img/ProductsDetails/Hoodie1.jpg",
    heading:
      "Funky Monkey - NASA Printed Hoodie, with Embroidery patch on Sleeves",
    star_Rating_No: "256",
    item_Price: 799.0,
    amount: 1,

    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],

    smallImg: [{ img: "/img/Hoodies/h4.jpg" }, { img: "/img/Hoodies/h5.jpg" }],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
  {
    id: "wrrr",
    img: "/img/Hoodies/h2.jpg",
    mainImg: "/img/Hoodies/h2.jpg",
    heading:
      "SXV 'California Adventure’ Printed Cool Aesthetic Sweatshirt Hoodie",
    star_Rating_No: "256",
    item_Price: 1799.0,
    amount: 1,

    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],
    smallImg: [
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
    ],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
  {
    id: "vrrr",
    img: "/img/Hoodies/h3.jpg",
    mainImg: "/img/Hoodies/h3.jpg",
    heading:
      "SXV 'TAKE ME to The Moon’ Printed Cool Aesthetic Sweatshirt Hoodie",
    star_Rating_No: "256",
    item_Price: 999.0,
    amount: 1,

    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],
    smallImg: [
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
    ],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
  {
    id: "arrr",
    img: "/img/Hoodies/h4.jpg",
    mainImg: "/img/Hoodies/h4.jpg",
    heading: "Be savage Basic Men's Cotton Hoodie",
    star_Rating_No: "256",
    item_Price: 1100.0,
    amount: 1,

    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],
    smallImg: [
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
    ],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
  {
    id: "brrr",
    img: "/img/Hoodies/h5.jpg",
    mainImg: "/img/Hoodies/h5.jpg",
    heading:
      "Lasmo Men's Hooded Neck Regular Fit PC Fleece NASA Printed Hoodie for Winters",
    star_Rating_No: "256",
    item_Price: 599.0,
    amount: 1,

    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],
    smallImg: [
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
    ],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
  {
    id: "crrr",
    img: "/img/Hoodies/h6.jpg",
    mainImg: "/img/Hoodies/h6.jpg",
    heading: "ADRO Basics Men's Printed Hoodies",
    star_Rating_No: "256",
    item_Price: 989.0,
    amount: 1,

    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],
    smallImg: [
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
    ],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
  {
    id: "drrr",
    img: "/img/Hoodies/h7.jpg",
    mainImg: "/img/Hoodies/h7.jpg",
    heading: "SXV 'You are Loved’ Printed Cool Aesthetic Sweatshirt Hoodie",
    star_Rating_No: "256",
    item_Price: 999.0,
    amount: 1,
    links: "Visit the FUNKY MONKEY Store",
    discount: "-60%",
    mrp: "M.R.P.:₹1,999.00",
    mrp_sub: "Inclusive of all taxes",
    rupee: "₹",
    liArr: [
      {
        li: "Care Instructions: Do not Iron on print/embroidery/embellishment, Reverse and iron, Machine wash as per tag",
      },
      { li: "Fit Type: Regular Fit" },
      { li: "Excellent gift item" },
      { li: "Comfortable to wea" },
      {
        li: "It can be paired with different kinds of accessories for a stylish look",
      },
    ],
    subtitles: [
      "Save Extra  with 3 offers",
      "No Cost EMI:Avail No Cost EMI on select cards for orders above ₹3000",
    ],
    sizeArr: [
      { size: "2XL" },
      { size: "XL" },
      { size: "L" },
      { size: "M" },
      { size: "S" },
    ],
    saveExtra: [
      { bold: "Save Extra : ", next: " with 3 offers", icon: "CiDiscount1" },
      {
        bold: "No Cost EMI : ",
        next: " Avail No Cost EMI on select cards for orders above ₹3000",
      },
      {
        bold: "Bank Offer : ",
        next: " 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
      },
    ],
    deliveryIcon: [
      { img: "/img/deliverIcons/free d.png", s1: "Free Delivery" },
      {
        img: "/img/deliverIcons/return.png",
        s1: "10 days Returns",
        s2: "& Exchange",
      },
      { img: "/img/deliverIcons/ad.png", s1: "Amazon", s2: "Delivered" },
    ],
    smallImg: [
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
      { img: "/img/ProductsDetails/Hoodie1.jpg" },
    ],
    cart_Data: [{ img: "/img/Hoodies/Cart Hoodies/h1.jpg" }],
    productsDetails: [
      { bold: "Package Dimensions :", next: "27 x 25 x 3 cm; 450 Grams" },
      { bold: "Date First Available:", next: " 29 December 2020" },
      { bold: "Manufacturer:", next: "FUNKY MONKEY" },
      { bold: " ASIN :", next: "B08RNWF1TW" },
      { bold: " Item part number :", next: "FUNKY MONKEY" },
      {
        bold: " Manufacturer :",
        next: "FUNKY MONKEY, Funky Monkey Harihar Complex, Bulding No. A20, Gala No. 117,118 and 119, Near Gajanan Petrol Pump, Dapode Bhiwandi Maharashtra India 421302",
      },
      { bold: " Item Weight  :", next: "490 g" },
      { bold: " Item Dimensions LxWxH  :", next: "30 x 30 x 2 Centimeters" },
      { bold: " Net Quantity :", next: " 1.00 count" },
    ],
  },
];

export const quantity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"];

export const ROUTES = [
  { routeName: SIGNIN, Component: SignInpage },
  // { routeName: SIGNUP, Component: SignInpage },
  // { routeName: FORGOT_PASSWORD, Component: SignInpage },
  // { routeName: RESET_PASSWORD, Component: SignInpage },
  { routeName: HOME, Component: Home },
  { routeName: SHOPPING_CART, Component: ShoppingCart },
  { routeName: PRODUCT_DETAILS, Component: ProductsDetialsItem },
  { routeName: CHECKOUT, Component: Checkout },
  { routeName: CREATEACCOUNT, Component: CreateAccount },
];
