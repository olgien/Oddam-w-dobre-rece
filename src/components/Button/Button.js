import './Button.scss';
import {NavLink} from "react-router-dom";

export const Button = ({
  borderless = true,
  navTo,
  size = "s",
  className = "",
                         // forceBorder, size, style: elementStyle = {}, width, height,
   ...rest
}) => {
  // const borderClass = forceBorder ? "Button--bordered" : "";
  let sizeClass;
  switch(size) {
    case 'xs':
      sizeClass = 'Button--xs';
      break;
    case 'm':
      sizeClass = 'Button--m';
      break;
    case 'l':
      sizeClass = 'Button--l';
      break;
    default:
      sizeClass = 'Button--s';
  }

  //  ${borderClass}  ${className}
  if (navTo) {
    return <NavLink className={`Button ${sizeClass} ${className}`} to={navTo} {...rest}/>;
  }

  return <a
    className={`Button ${sizeClass} ${className}`}
    {...rest}
  />
};