export interface LightBoxGalleryInterface {
  galleryID: string;
  images: Image[];
}

export interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}
