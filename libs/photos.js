import fs from "fs";
import { join } from "path";

const photosDirectory = join(process.cwd(), 'public', 'images', 'photos');

export function getPhotoSlugs() {
  return fs.readdirSync(photosDirectory);
}

export function getPhotoBySlug(slug) {
  const realSlug = slug.replace(/\.[^.]+$/, "");

  const items = {
    slug: realSlug,
    path: join("/images/photos", slug),
  };

  return items;
}

export function getAllPhotoss() {
  const slugs = getPhotoSlugs();
  const photos = slugs
    .filter((slug) => slug.match(/^[^.].*$/g))
    .map((slug) => getPhotoBySlug(slug))
    .sort((photo1, photo2) => (photo1 > photo2 ? "-1" : "1"));
  return photos;
}
