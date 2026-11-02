// Case-study content for the project detail tabs. Imported only by the lazy-loaded
// ProjectDetailPage, so the text and icons of every case study stay out of the main bundle.
const modules = import.meta.glob(['./*.js', '!./index.js', '!./content.js'], {
  eager: true,
  import: 'default',
});

const CONTENT = Object.fromEntries(
  Object.entries(modules).map(([path, details]) => [path.slice(2, -3), details]),
);

export const getDetails = (id) => CONTENT[id] || null;
