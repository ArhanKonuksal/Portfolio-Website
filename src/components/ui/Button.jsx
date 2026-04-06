/**
 * Button Component - FAZ 1 Design System
 * 
 * Variants: primary, ghost
 * Sizes: sm, md (default), lg
 */

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md",
  as: Component = "button",
  className = "",
  ...props 
}) => {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = size !== "md" ? `btn-${size}` : "";
  
  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Button;
