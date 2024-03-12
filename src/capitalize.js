export function capitalize(name) {
  const N = name.at(0).toUpperCase();
  const ame = name.substring(1);
  return N + ame;
}
