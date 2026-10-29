// Case-study content for the project detail tabs, keyed by project id (its Netlify name).
// Add a file next to this one and register it here to document another project.
import dreamInteriorDesign from './dream-interior-design';
import tripore from './tripore';
import floowpilot from './floowpilot';
import filoraa from './filoraa';
import layora from './layora';

export const DETAILS = {
  'dream-interior-design': dreamInteriorDesign,
  tripore,
  floowpilot,
  filoraa,
  layora,
};

export const getDetails = (id) => DETAILS[id] || null;
