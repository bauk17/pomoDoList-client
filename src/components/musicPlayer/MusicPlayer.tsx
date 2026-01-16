import * as styled from "./styles";
import { FaPause, FaPlay } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { useMusicPlayer } from "../../hooks/useMusicPlayer";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const player = useMusicPlayer();
  const barRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);

  function calcPercent(clientX: number) {
    if (!barRef.current) return 0;

    const rect = barRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;

    return Math.min(100, Math.max(0, percent));
  }

  function handleMouseDown(e: React.MouseEvent) {
    setDragging(true);
    player.seek(calcPercent(e.clientX));
  }

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!dragging) return;
      player.seek(calcPercent(e.clientX));
    }

    function handleMouseUp() {
      setDragging(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);
  const volumeRef = useRef<HTMLDivElement | null>(null);
  const [draggingVolume, setDraggingVolume] = useState(false);

  function calcVolume(clientX: number) {
    if (!volumeRef.current) return 0;

    const rect = volumeRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;

    return Math.min(100, Math.max(0, percent));
  }

  function handleVolumeMouseDown(e: React.MouseEvent) {
    setDraggingVolume(true);
    player.setVolume(calcVolume(e.clientX));
  }

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!draggingVolume) return;
      player.setVolume(calcVolume(e.clientX));
    }

    function handleMouseUp() {
      setDraggingVolume(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingVolume]);

  return (
    <styled.MusicPlayerWrapper>
      <styled.MusicName>{player.currentTrack.title}</styled.MusicName>

      <styled.MusicPlayerBar ref={barRef} onMouseDown={handleMouseDown}>
        <styled.MusicPlayerProgressBar style={{ width: `${player.progress}%` }}>
          <styled.MusicPlayerBarButton />
        </styled.MusicPlayerProgressBar>
      </styled.MusicPlayerBar>

      <styled.MusicPlayerControllers>
        <IoMdSkipBackward size={25} onClick={player.prev} />

        <div onClick={player.toggle}>
          {player.isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
        </div>

        <IoMdSkipForward size={25} onClick={player.next} />
        <styled.VolumeWrapper>
          <div
            onClick={player.toggleMute}
            style={{ marginRight: 10, display: "flex", alignItems: "center" }}
          >
            {player.isMuted ? (
              <FaVolumeMute size={25} />
            ) : (
              <FaVolumeUp size={25} />
            )}
          </div>
          <styled.VolumeBar
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = ((e.clientX - rect.left) / rect.width) * 100;
              player.changeVolume(percent);
            }}
            onWheel={(e) => player.handleWheel(e.nativeEvent)}
            ref={volumeRef}
            onMouseDown={handleVolumeMouseDown}
          >
            <styled.VolumeProgress style={{ width: `${player.volume * 100}%` }}>
              <styled.VolumeButton />
            </styled.VolumeProgress>
          </styled.VolumeBar>
        </styled.VolumeWrapper>
      </styled.MusicPlayerControllers>
    </styled.MusicPlayerWrapper>
  );
}
