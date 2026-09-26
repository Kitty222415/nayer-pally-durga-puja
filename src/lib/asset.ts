/**
 * Prefix a root-relative public asset path with the configured basePath
 * (e.g. "/nayer-pally-durga-puja" on GitHub Pages). next/image does not
 * apply basePath to string `src` values, so wrap every public asset path.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
