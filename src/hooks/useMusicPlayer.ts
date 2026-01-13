import { useEffect, useRef, useState } from "react";
import { lofiTracks } from "../data/lofiTracks";

export function useMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(lofiTracks[trackIndex].src);
      audioRef.current.volume = volume;
    } else {
      audioRef.current.src = lofiTracks[trackIndex].src;
    }

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [trackIndex]);

  function play() {
    audioRef.current?.play();
    setIsPlaying(true);
  }

  function pause() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function toggle() {
    isPlaying ? pause() : play();
  }

  function next() {
    setTrackIndex((i) => (i + 1) % lofiTracks.length);
  }

  function prev() {
    setTrackIndex((i) => (i - 1 + lofiTracks.length) % lofiTracks.length);
  }

  function previewSeek(percent: number) {
    setProgress(percent);
  }

  function seek(percent: number) {
    if (!audioRef.current || !audioRef.current.duration) return;

    audioRef.current.currentTime = (percent / 100) * audioRef.current.duration;

    setProgress(percent);
  }

  function setPlayerVolume(percent: number) {
    if (!audioRef.current) return;

    const value = Math.min(100, Math.max(0, percent)) / 100;
    audioRef.current.volume = value;
    setVolume(value);
  }

  function changeVolume(percent: number) {
    const clamped = Math.min(100, Math.max(0, percent));
    setVolume(clamped / 100);
    setIsMuted(clamped === 0);
  }

  function toggleMute() {
    setIsMuted((m) => !m);
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();

    setVolume((v) => {
      const next = v - e.deltaY * 0.001;
      return Math.min(1, Math.max(0, next));
    });
  }

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    function updateProgress() {
      if (!audio.duration || isSeeking) return;
      setProgress((audio.currentTime / audio.duration) * 100);
    }

    function setMeta() {
      setDuration(audio.duration);
    }

    function handleEnded() {
      next();
    }

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, [isSeeking]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  return {
    currentTrack: lofiTracks[trackIndex],
    isPlaying,
    progress,
    duration,
    volume,
    isSeeking,
    isMuted,
    play,
    pause,
    toggle,
    next,
    prev,
    seek,
    previewSeek,
    setIsSeeking,
    setVolume: setPlayerVolume,
    changeVolume,
    toggleMute,
    handleWheel,
  };
}
