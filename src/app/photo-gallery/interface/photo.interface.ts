export interface IPhotoRoot {
  status: string;
  status_code: number;
  message: string;
  data: IPhotoDaum[];
}

export interface IPhotoDaum {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: IPhotoImage[];
}

export interface IPhotoImage {
  id: string;
  image: string;
}
