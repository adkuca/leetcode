function destCity(paths: [string, string][]): string {
  const pathsMap = new Map(paths);

  for (const dest of pathsMap.values()) if (!pathsMap.has(dest)) return dest;

  throw new Error(
    'invalid paths input; no destination city that has an outgoing path found'
  );
}
