// this file contains all hard-coded URLs, strings.

const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const USER_AVATAR = "https://cdn-icons-png.flaticon.com/512/10337/10337609.png";

//
// !!! Strugging to get Free Movies APIs. !!!
/* 
Movies API providers:-  TMDB, OMDB, TraktApiary Api, WatchMode 
TV shows API providers:- TVMaze(https://api.tvmaze.com/shows)
*/
// TMDB movie api website not working.
// 1. WATCHMODE API
const WatchModeAPI__KEY = "KmUpfDsCw8ErfxvazuB5fpv6pksFInhIy6feFfCQ";
const WatchModeAPI__URL = `https://api.watchmode.com/v1/releases/?apiKey=${WatchModeAPI__KEY}`; // resObj.releases=[mobj1,mobj2]

export { LOGO, USER_AVATAR, WatchModeAPI__URL };
