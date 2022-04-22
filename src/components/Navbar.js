// import { Link } from "react-router-dom";
// import {
//   ABOUT_US_ROUTE,
//   HOME_ROUTE,
//   LOGIN_ROUTE
// } from "../constants/routeNames";
//
//
// const LINK_DEFINITIONS = [
//   {
//     to: HOME_ROUTE,
//     text: "Start"
//   },
//   {
//     to: ABOUT_US_ROUTE,
//     text: "O Nas"
//   },
//   /* Link poniej byłby normalnie w drugim navbarze, tym na górze.
//       Umieściłem go tu dla uproszczenia */
//   {
//     to: LOGIN_ROUTE,
//     text: "Zaloguj"
//   }
// ];
//
// export const Navbar = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         marginBottom: "24px",
//         display: "flex",
//         alignItems: "flex-end",
//         justifyContent: "flex-end"
//       }}
//     >
//       <span style={{ marginRight: "12px" }}>NAVBAR</span>
//       {LINK_DEFINITIONS.map((link) => (
//         <Link key={link.to} to={link.to} style={{ marginRight: "12px" }}>
//           {link.text}
//         </Link>
//       ))}
//     </div>
//   );
// };