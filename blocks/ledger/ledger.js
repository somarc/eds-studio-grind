export default function decorate(block) {
  const entries = [...block.children].map((row) => {
    const entry = document.createElement('article');
    entry.className = 'ledger-entry';
    [...row.children].forEach((cell, index) => {
      cell.classList.add(index === 0 ? 'ledger-meta' : 'ledger-body');
      entry.append(cell);
    });
    return entry;
  });
  block.replaceChildren(...entries);
}
