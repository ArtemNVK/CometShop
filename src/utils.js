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
  export const adminRoutes = [
    {
      path: "/productlist", 
      name: "Product List", 
      Component: ProductListScreen
    },
    {
      path: "/orderlist", 
      name: "Order List", 
      Component: OrderListScreen
    },
    {
      path: "/userlist", 
      name: "User List", 
      Component: UserListScreen
    },
    {
      path: "/user/:id/edit", 
      name: "User Edit", 
      Component: UserEditScreen
    }
  ];
  export const privateRoutes = [
    {
      path: "/profile", 
      name: "Profile", 
      Component: ProfileScreen
    }
  ];
  export const routes = [
    {
      path: "/", 
      name: "Home", 
      Component: HomeScreen
    },
    {
      path: "/cart/:id?", 
      name: "Cart", 
      Component: CartScreen
    },
    {
      path: "/product/:id", 
      name: "Product", 
      Component: ProductScreen
    },
    {
      path: "/product/:id/edit", 
      name: "Edit Product", 
      Component: ProductEditScreen
    },
    {
      path: "/signin", 
      name: "Sign In", 
      Component: SigninScreen
    },
    {
      path: "/cart/:id?", 
      name: "Cart", 
      Component: CartScreen
    },
    {
      path: "/register", 
      name: "Register", 
      Component: RegisterScreen
    },
    {
      path: "/shipping", 
      name: "Shipping", 
      Component: ShippingAddressScreen
    },
    {
      path: "/payment", 
      name: "Payment", 
      Component: PaymentMethodScreen
    },
    {
      path: "/placeorder", 
      name: "Place Order", 
      Component: PlaceOrderScreen
    },
    {
      path: "/order/:id", 
      name: "Order", 
      Component: OrderScreen
    },
    {
      path: "/orderhistory", 
      name: "Order History", 
      Component: OrderHistoryScreen
    },
    {
      path: "/search/name/:name?", 
      name: "Search", 
      Component: SearchScreen
    },
    {
      path: "/search/category/:category", 
      name: "Search", 
      Component: SearchScreen
    },
    {
      path: "/search/category/:category/name/:name", 
      name: "Search", 
      Component: SearchScreen
    },
    {
      path: "/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order", 
      name: "Search", 
      Component: SearchScreen
    }
  ];