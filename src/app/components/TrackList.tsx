import { Play, Clock } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  album: string;
}

interface TrackListProps {
  tracks: Track[];
  onTrackPlay: (trackId: number) => void;
}

export function TrackList({ tracks, onTrackPlay }: TrackListProps) {
  return (
    <div className="space-y-2">
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-purple-500/30"
          onClick={() => onTrackPlay(index)}
        >
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white fill-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm sm:text-base text-white truncate group-hover:text-purple-400 transition-colors">
              {track.title}
            </h4>
            <p className="text-xs sm:text-sm text-purple-300 truncate">{track.album}</p>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-purple-300">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{track.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
