import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { MusicVisualizer } from './MusicVisualizer';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

export function AudioPlayer({ tracks }: AudioPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
    setIsPlaying(false);
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/10">
      <audio ref={audioRef} src={currentTrack.url} />

      {/* Візуалізатор */}
      <MusicVisualizer audioElement={audioRef.current} isPlaying={isPlaying} />

      {/* Інформація про трек */}
      <div className="mt-4 sm:mt-6 text-center">
        <h3 className="font-semibold text-lg sm:text-xl text-white">{currentTrack.title}</h3>
        <p className="text-sm sm:text-base text-purple-300">{currentTrack.artist}</p>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={1}
          onValueChange={handleSeek}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-purple-300 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Контроли */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          className="text-white hover:bg-white/10 h-10 w-10 sm:h-12 sm:w-12"
        >
          <SkipBack className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        <Button
          size="icon"
          onClick={togglePlay}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 sm:h-6 sm:w-6" fill="white" />
          ) : (
            <Play className="h-5 w-5 sm:h-6 sm:w-6" fill="white" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="text-white hover:bg-white/10 h-10 w-10 sm:h-12 sm:w-12"
        >
          <SkipForward className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>

      {/* Гучність */}
      <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          onValueChange={(value) => setVolume(value[0])}
          className="flex-1"
        />
        <span className="text-xs sm:text-sm text-purple-300 w-10 sm:w-12 text-right">{volume}%</span>
      </div>
    </div>
  );
}
