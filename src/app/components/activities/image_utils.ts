export const resolveGalleryImageSrc = (imageUrl: string) => {
  if (!imageUrl) return "";

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  const normalized = imageUrl.replace(/\\/g, "/");
  const withLeadingSlash = normalized.startsWith("/")
    ? normalized
    : `/${normalized}`;

  return `${process.env.NEXT_PUBLIC_SERVER_URL}${withLeadingSlash}`;
};

