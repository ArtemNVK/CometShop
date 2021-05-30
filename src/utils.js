import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SearchScreen from "./screens/SearchScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";

export const prices = [
    {
      name: 'Any',
      min: 0,
      max: 0,
    },
    {
      name: `$1 to $10`,
      min: 1,
      max: 10,
    },
    {
      name: `$10 to $100`,
      min: 10,
      max: 100,
    },
    {
      name: `$100 to $1000`,
      min: 100,
      max: 1000,
    },
  ];
  export const ratings = [
    {
      name: '4stars & up',
      rating: 4,
    },
  
    {
      name: '3stars & up',
      rating: 3,
    },
  
    {
      name: '2stars & up',
      rating: 2,
    },
  
    {
      name: '1stars & up',
      rating: 1,
    },
  ];

  export const sliderData = [
    {
      image: 'https://cometshop.herokuapp.com/uploads/banner1.jpg',
      category: 'Solar Panels'
    },
    {
      image: 'https://themoneyninja.com/wp-content/uploads/2020/09/Amazon-Discover-50-Off-150-Purchase-Banner.jpg',
      category: null
    },
    {
      image: 'https://themoneyninja.com/wp-content/uploads/2020/09/Amazon-Discover-50-Off-150-Purchase-Banner.jpg',
      category: null
    },
    {
      image: 'https://www.pngitem.com/pimgs/m/384-3845524_cooper-tires-promo-banner-headline-oval-hd-png.png',
      category: null
    }
  ]