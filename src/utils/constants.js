// this file contains all hard-coded URLs, strings.

const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const USER_AVATAR = "https://cdn-icons-png.flaticon.com/512/10337/10337609.png";

const Netflix_BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_small.jpg";

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

// 2. KINOCHECK API - movie videos, trailers, info
/*
Example Request:-
 fetch(URL, {method:'GET',headers:{'Content-Type':'application/json','Accept':'application/json','X-Api-Key':apiKey,'X-Api-Host':'api.kinocheck.com'}})
 accept parameters: id, tmdb_id, imdb_id, language, categories(Trailer,Teaser,Clip,Featurette), limit, page
*/
/*
Example Output :-
 {
	"id": "ly4",
	"tmdb_id": 299534,
	"imdb_id": "tt4154796",
	"language": "de",
	"title": "Avengers 4: Endgame",
	"url": "https://kinocheck.de/film/ly4/avengers-4-2019",
	"trailer": [video resource],
	"videos": [[video resource]]
 } 

--------------
Example video resource: 
 {
	"id": "4ghv",
	"youtube_video_id": "EJJedP2_7_k",
	"youtube_channel_id": "UCOL10n-as9dXO2qtjjFUQbQ",
	"youtube_thumbnail": "https://img.youtube.com/vi/EJJedP2_7_k/maxresdefault.jpg",
	"title": "AVENGERS 4: Endgame Trailer German Deutsch (2019)",
	"url": "https://kinocheck.de/trailer/7zxh/avengers-4-...",
	"thumbnail": "https://images.kinocheck.de/images/hsd2ascncd.jpg",
	"language": "de",
	"categories": [
		"Trailer"
	],
	"published": "2018-12-07T13:16:51+01:00",
	"views": "1391790",
  "resource": ["type" => "movie" "path" => "/movies/" "id" => "ly4" "imdb_id" => "tt4154796" "tmdb_id" => 299534]
 }
*/

/*
Example URLs
GET https://api.kinocheck.com/movies?tmdb_id=299534
GET https://api.kinocheck.com/movies?tmdb_id=299534&language=de
GET https://api.kinocheck.com/movies?tmdb_id=299534&language=de&categories=Trailer
GET https://api.kinocheck.com/movies?tmdb_id=299534&language=de&categories=Trailer,-Clip

GET https://api.kinocheck.com/trailers
GET https://api.kinocheck.com/trailers/trending
GET https://api.kinocheck.com/trailers/latest
*/

const KINOCHECKAPI__KEY =
  "CPnGn49bVg85joSEFEFdV0sGDzOJQS4tuXDviA2sb1gXqHKTWWIHwBl6epcCh5za";
const KINOCHECKAPI__HeaderOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Api-Key": KINOCHECKAPI__KEY,
    "X-Api-Host": "api.kinocheck.com",
  },
};
const CorsProxyUrlFix = "https://proxy.corsfix.com/?";
const KINOCHECKAPI__MoviesURL =
  CorsProxyUrlFix + "https://api.kinocheck.com/movies?tmdb_id="; // fetch( url+tmdbid, headerOptions )
//

export {
  LOGO,
  USER_AVATAR,
  Netflix_BG_URL,
  WatchModeAPI__URL,
  KINOCHECKAPI__MoviesURL,
  KINOCHECKAPI__HeaderOptions,
};
