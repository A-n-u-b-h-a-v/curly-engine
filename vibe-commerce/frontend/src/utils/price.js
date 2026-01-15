export function toNumber(p) {
  if (typeof p === 'number') return p;
  if (typeof p === 'string') {
    const digits = p.replace(/[^0-9.-]+/g, '');
    const n = parseFloat(digits.replace(/,/g, ''));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

export function formatPrice(p) {
  const n = toNumber(p);
  return `₹ ${n.toLocaleString('en-IN')}`;
}

export function getUnitPrice(p) {
  return toNumber(p);
}
