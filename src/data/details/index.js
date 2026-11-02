// Which projects have a case study, keyed by project id (its Netlify name = the file name).
// Add `<id>.js` next to this file to document another project — it is picked up automatically.
// Only the ids live in the main bundle; the content is loaded with the detail page (see content.js).
const files = import.meta.glob(['./*.js', '!./index.js', '!./content.js']);

export const DETAILS = Object.fromEntries(
  Object.keys(files).map((path) => [path.slice(2, -3), true]),
);
