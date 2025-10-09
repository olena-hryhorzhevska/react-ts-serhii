import { useState, useEffect } from 'react';

export default function PhotoGallery() {
  type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);

      try {
        const url =
          selectedAlbum === 'all'
            ? 'https://jsonplaceholder.typicode.com/photos?_limit=20'
            : `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`;
        const response = await fetch(url);
        const data = await response.json();
        setPhotos(data);
        
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos()
  }, [selectedAlbum]);

  const handleAlbumChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlbum(event.target.value);
  };

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  }

  const closePhoto = () => {
    setSelectedPhoto(null);
  }

  if (selectedPhoto) {
    return (
      <div>
        <h1>Our photo</h1>
        <button type='button' onClick={closePhoto}>Close Photo</button>
        <h2>{selectedPhoto.title}</h2>
        <img src={selectedPhoto.url} alt={selectedPhoto.title } width={600} />
      </div>
    )
  }

  return (
    <div>
      <h1>Photos Gallery</h1>

      <div>
        <label htmlFor="">
          <select value={selectedAlbum} onChange={handleAlbumChange}>
            <option value="all">All photos</option>
            <option value="1">Album 1</option>
            <option value="2">Album 2</option>
            <option value="3">Album 3</option>
            <option value="4">Album 4</option>
            <option value="5">Album 5</option>
          </select>
        </label>
      </div>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {photos.map(photo => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} onClick={() => openPhoto(photo)} />
              <p>
                ID: {photo.id} - {photo.title}
              </p>
              <button type="button" onClick={() => openPhoto(photo)}>
                Open photo
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
