export const GET_PLAYLIST = 'plalist/LOAD';
export const GET_PLAYLIST_SUCCESS = 'plalist/LOAD_SUCCESS';
export const GET_PLAYLIST_FAIL = 'plalist/LOAD_FAIL';

var defaultState = {
  loading: true,
  playlist: {}
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PLAYLIST:
      return { ...state, loading: true };
    case GET_PLAYLIST_SUCCESS:
      return { ...state, loading: false, playlist: action.payload.data };
    case GET_PLAYLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching playlist details'
      };
    default:
      return state;
  }
}

export function getPlaylist(id) {
  return {
    type: GET_PLAYLIST,
    payload: {
      request: {
        url: `/playlists/${id}`
      }
    }
  };
}