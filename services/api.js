const ITUNES_BASE_URL = 'https://itunes.apple.com/search';

export async function searchSongs(term = 'jazz') {
  const url = `${ITUNES_BASE_URL}?term=${encodeURIComponent(term)}&limit=20&media=music`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results.map((item) => ({
    id: item.trackId,
    title: item.trackName,
    artist: item.artistName,
    album: item.collectionName,
    imageUrl: item.artworkUrl100,
  }));
}
