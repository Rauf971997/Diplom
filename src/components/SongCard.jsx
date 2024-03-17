import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSongs } from "../redux/features/playerSlice";

const SongCard = ({ song, i }) => (
  <div
    className="flex flex-col w-[250px]
   p-4 bg-white/5 bg-opacity-80
    backdrop-blur-sm animate animate-slideup rounded-lg cursor-pointer"
  ></div>
);

export default SongCard;
