import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const path = new URL(getMetadata('footer') || '/footer', window.location).pathname;
  const fragment = await loadFragment(path);
  if (fragment) block.replaceChildren(...fragment.children);
}
