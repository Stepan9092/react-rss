const url = 'https://www.flickr.com/services/rest/';
const methodSearch = 'flickr.photos.search';
const methodPhotoInfo = 'flickr.photos.getInfo';
const apiKey = '60b8535a62a5d31a047a565f11963a78';

export const getDataUrl = (search: string, page: string) =>
  `${url}?method=${methodSearch}&api_key=${apiKey}&text=${search}&per_page=24&page=${page}&format=json&nojsoncallback=1&`;

export const getPhotoInfoUrl = (id: string) =>
  `${url}?method=${methodPhotoInfo}&api_key=${apiKey}&photo_id=${id}&format=json&nojsoncallback=1`;

export const getPhotoUrl = (id: string, server: string, secret: string) =>
  `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

export default getDataUrl;
