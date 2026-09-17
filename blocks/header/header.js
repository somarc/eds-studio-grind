import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const path = new URL(getMetadata('nav') || '/nav', window.location).pathname;
  const fragment = await loadFragment(path);
  if (!fragment) return;

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main');
  [...fragment.children].forEach((section, index) => {
    section.classList.add(index === 0 ? 'header-brand' : 'header-links');
    nav.append(section);
  });

  const current = window.location.pathname.replace(/\/$/, '') || '/';
  nav.querySelectorAll('.header-links a[href]').forEach((link) => {
    const target = new URL(link.href);
    if (target.origin !== window.location.origin) return;
    if (target.pathname === current) link.setAttribute('aria-current', 'page');
    else if (target.pathname !== '/' && current.startsWith(`${target.pathname}/`)) {
      link.setAttribute('aria-current', 'location');
    }
  });
  block.replaceChildren(nav);
}
