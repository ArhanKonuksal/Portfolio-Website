/**
 * Section Component - FAZ 1 Design System
 * Wrapper for page sections with consistent spacing
 */

const Section = ({ 
  children, 
  className = "",
  id,
  ...props 
}) => {
  const classes = ["section", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

const SectionHeader = ({ children, className = "", centered = false, ...props }) => {
  const classes = [
    "section-header", 
    centered ? "text-center" : "",
    className
  ].filter(Boolean).join(" ");
  
  return <header className={classes} {...props}>{children}</header>;
};

const SectionTitle = ({ children, className = "", ...props }) => {
  const classes = ["section-title", className].filter(Boolean).join(" ");
  return <h2 className={classes} {...props}>{children}</h2>;
};

const SectionSubtitle = ({ children, className = "", ...props }) => {
  const classes = ["section-subtitle", className].filter(Boolean).join(" ");
  return <p className={classes} {...props}>{children}</p>;
};

Section.Header = SectionHeader;
Section.Title = SectionTitle;
Section.Subtitle = SectionSubtitle;

export default Section;
