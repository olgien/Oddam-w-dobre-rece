import './Button.scss';
import {NavLink} from "react-router-dom";

export const Button = ({
  borderless = true,
  navTo,
  size = "s",
//  className = "", forceBorder, size, style: elementStyle = {}, width, height,
   ...rest
}) => {
  // const borderClass = forceBorder ? "Button--bordered" : "";
  const sizeClass = size === 'm' ? 'Button--m' : 'Button--s';
  // const style = {
  //   ...elementStyle, height: height ? height : 'auto', width: width ? width : 'auto'
  // };

  //  ${borderClass}  ${className}
  if (navTo) {
    return <NavLink className={`Button ${sizeClass}`} to={navTo} {...rest}/>;
  }

  return <a
    className={`Button ${sizeClass}`}
    // style={style}
    {...rest}
  />
};