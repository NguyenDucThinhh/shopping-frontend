export function buildPathToPublicResource(
  pathToPublicResource: string
): string {
  if (pathToPublicResource[0] === "/")
    pathToPublicResource = pathToPublicResource.slice(1);
  return `${process.env.BASE_PATH ?? ""}/${pathToPublicResource}`;
}
