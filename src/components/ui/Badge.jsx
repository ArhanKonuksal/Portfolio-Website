/**
 * Badge Component - FAZ 1 Design System
 * Used for tech stack labels
 * 
 * Variants: default, accent
 */

const Badge = ({ 
  children, 
  variant = "default",
  className = "",
  ...props 
}) => {
  const baseClass = "badge";
  const variantClass = variant === "accent" ? "badge-accent" : "";
  
  const classes = [baseClass, variantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
