/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    playlists = [...playlists, {name:playlistName, songs: []}];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    playlists = playlists.filter(playlist => playlist.name !== playlistName);
  };
          
  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */

  
  const addSongToPlaylist = (playlistName, song) => {
    
    //Guardo en variable playList la busqueda de  si existe la playlist:
    const playList = playlists.find(playlist => playlist.name === playlistName);

    //Lanzar error si la playlist no existe
    if (!playList) {
      throw new Error(`La playlist ${playlistName} no existe`);
    };

    //Guardar la canción en su playlist:
    
    playlists = playlists.map(playlistItem => {

      if (playlistItem.name === playlistName) {
        // añadir nuevo tema
        const newSongs = [...playlistItem.songs, {
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          duration: song.duration,
          favorite: false
        }]

        // retornar el playlist modificado
        return {...playlistItem, songs: newSongs }
          
      }
      
      /// si no hay que mappearlo porque no coincide con el nombre de la playlist no lo hacemos
      return playlistItem;
    })
  
  };
  
  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    //Buscar su existe la playlist y si no lanzar error:
    const findPlayList = playlists.find(playlist => playlist.name === playlistName);

    if (!findPlayList) {
      throw new Error(`La playlist ${playlistName} no existe`);
    };

    //Buscar si existe la canción y si no lanzar error:
    const findSong = playlists.find(songInPlayList => songInPlayList.songs.title === title);

    if (!findSong) {
      throw new Error(`La canción ${title} no existe`);
    };


    playlists = playlists.map(playlistItem => {

      if (playlistItem.name === playlistName) {

        //Creamos una nueva lista con las canciones sin la cancion que se ha querido eliminar
        updatedSongs = playlistItem.songs.filter(songItem => songItem.title !== title);

        // retornar el playlist modificado
        return {...playlistItem, songs: updatedSongs }
          
      }
      
      /// si no hay que mappearlo porque no coincide con el nombre de la playlist no lo hacemos
      return playlistItem;
    })

  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {

    //Buscar si existe la playlist y el titulo y si no lanzar un error:

    const findPlayList = playlists.find(playlist => playlist.name === playlistName);

    if (!findPlayList) {
      throw new Error(`La playlist ${playlistName} no existe`);
    };

    const findSong = findPlayList.songs.find(songInPlayList => songInPlayList.title === title);

    if (!findSong) {
      throw new Error(`La canción ${title} no existe`);
    };


    //Recorrer las playlists buscando la playlistName:

    playlists.map(playlistItem => {

      if (playlistItem.name === playlistName) {

        const updatedSongs = playlistItem.songs.map(songItem => {
          if (songItem.title === title){  
            songItem.favorite = true  
          }

          return songItem
        })
      
        // retornar el playlist modificado
        return {...playlistItem, songs: updatedSongs}
      }
        /// si no hay que mappearlo porque no coincide con el nombre de la playlist no lo hacemos
      return playlistItem;
    })


  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};


const catalog = musicCatalog();
catalog.createPlaylist('Rock Classics');
//Crear una canción
const song = { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop', duration: 300 };
catalog.addSongToPlaylist('Rock Classics', song);



export default musicCatalog;