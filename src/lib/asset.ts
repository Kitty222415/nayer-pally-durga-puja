/**
 * Resolve a root-relative public asset path. The site is served at the root of
 * https://nayerpallysealdahsarbojanindurgapuja.com, so by default this returns
 * the path unchanged (e.g. "/brand/logo.png"). If NEXT_PUBLIC_BASE_PATH is set
 * for a sub-path build, it is prefixed (next/image does not apply basePath to
 * string `src` values).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
