export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  [...row.children].forEach((cell, index) => {
    cell.classList.add(index === 0 ? 'masthead-copy' : 'masthead-note');
  });
  if (row.children.length > 1) block.classList.add('has-note');
  const heading = block.querySelector('h1');
  const kicker = heading?.previousElementSibling;
  if (kicker?.tagName === 'P') kicker.classList.add('masthead-kicker');
}
