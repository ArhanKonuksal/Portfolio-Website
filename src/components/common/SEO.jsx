import { Helmet } from "react-helmet-async";

const SITE_URL = "https://arhan-konuksal.dev";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

const SEO = ({
  title = "Arhan Konuksal | Full-Stack Developer",
  description = "Full-stack developer focused on clean architecture, scalable systems, and modern web applications.",
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
}) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:site_name" content="Arhan Konuksal" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Arhan Konuksal" />
      <meta name="theme-color" content="#4F46E5" />
    </Helmet>
  );
};

export default SEO;
