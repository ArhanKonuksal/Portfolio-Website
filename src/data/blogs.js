export const blogs = [
  {
    id: "living-abroad-as-cypriot",
    titleKey: "blogs.posts.livingAbroadAsCypriot.title",
    subtitleKey: "blogs.posts.livingAbroadAsCypriot.subtitle",
    date: "2025-03-20",
    readTime: 3,
    tags: ["life", "personal", "abroad"],
    featured: true,
    contentKey: "blogs.posts.livingAbroadAsCypriot.content"
  },
  {
    id: "journey-cyprus-to-belgium",
    titleKey: "blogs.posts.journeyCyprusToBelgium.title",
    subtitleKey: "blogs.posts.journeyCyprusToBelgium.subtitle",
    date: "2025-04-05",
    readTime: 2,
    tags: ["life", "career", "software"],
    featured: true,
    contentKey: "blogs.posts.journeyCyprusToBelgium.content"
  }
];

export const getBlogById = (id) => blogs.find((blog) => blog.id === id);
export const getFeaturedBlogs = () => blogs.filter((blog) => blog.featured);
export const getAllBlogs = () => [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
