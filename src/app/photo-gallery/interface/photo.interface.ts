export interface IPhotoGallery {
  status: string;
  statusCode: number;
  message: string;
  data: IPhotoData[];
}

export interface IPhotoData {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  images: IPhotoImage[];
  banners?: IPhotoBanners;
}

export interface IPhotoImage {
  id: string;
  image: string;
}

export interface IPhotoBanners {
  id: string;
  title: string;
  image: string;
}
