const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
const apiKey = '60b8535a62a5d31a047a565f11963a78';

const getUrl = (search: string, page: string) => {
  return `${url}api_key=${apiKey}&text=${search}&per_page=24&page=${page}&format=json&nojsoncallback=1&`;
};

export default getUrl;
