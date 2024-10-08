export async function getPostCover(postSlug: string): Promise<string | null> {
  // Use a static glob pattern to match all potential cover files
  const cover = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/posts/**/cover.webp",
  );

  // Filter the results to include only the files that match the desired postSlug
  const filteredCover = Object.entries(cover).filter(([key]) =>
    key.includes(`/src/content/posts/${postSlug}/cover.webp`),
  );

  if (filteredCover.length === 0) {
    return null; // No cover found for the given postSlug
  }

  // Resolve the cover image promise
  const resolvedCover = await filteredCover[0][1]();

  // Construct the URL to the cover image
  const coverUrl = filteredCover[0][0].replace("/src", "");

  return coverUrl;
}

export async function getAlbumImages(albumId: string) {
  console.log("albumId", albumId);
  // 1. List all album files from collections path
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/photos/**/*.{webp,jpg,jpeg,JPEG,png}",
  );
  
  // 2. Filter images by albumId
  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(albumId)),
  );

  // 3. Images are promises, so we need to resolve the glob promises
  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default)),
  );

  // 4. Shuffle images in random order
  resolvedImages.sort(() => Math.random() - 0.5);
  return resolvedImages;
}
