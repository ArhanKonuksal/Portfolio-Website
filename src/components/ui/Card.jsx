/**
 * Card Component - FAZ 1 Design System
 * Used for project showcases
 */

const Card = ({ 
  children, 
  className = "",
  ...props 
}) => {
  const classes = ["card", className].filter(Boolean).join(" ");

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
};

const CardTitle = ({ children, className = "", ...props }) => {
  const classes = ["card-title", className].filter(Boolean).join(" ");
  return <h3 className={classes} {...props}>{children}</h3>;
};

const CardDescription = ({ children, className = "", ...props }) => {
  const classes = ["card-description", className].filter(Boolean).join(" ");
  return <p className={classes} {...props}>{children}</p>;
};

const CardFooter = ({ children, className = "", ...props }) => {
  const classes = ["card-footer", className].filter(Boolean).join(" ");
  return <div className={classes} {...props}>{children}</div>;
};

Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export default Card;
