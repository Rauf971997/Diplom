import { BsFillHouseFill as HomeIcon, BsGeoAlt as LocationIcon, BsPeopleFill as ArtistsIcon, BsMusicNoteList as MusicIcon, BsBoxArrowRight as LogoutIcon } from "react-icons/bs";

export const links = [
  { name: "Explore", to: "/", icon: HomeIcon },
  { name: "Around You", to: "/around-you", icon: LocationIcon },
  { name: "Trending Artists", to: "/top-artists", icon: ArtistsIcon },
  { name: "Top Hits", to: "/top-charts", icon: MusicIcon },
  { name: "Logout", to: "/signin", icon: LogoutIcon },
];
