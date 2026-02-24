import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, VolumeX, Film, ArrowUpRight, Maximize2 } from 'lucide-react';
import { videoProjects } from '../../data/VideoProjects';

// ─── Autoplay Video Card ──────────────────────────────────────────────────────
const VideoCard: React.FC<{ project: (typeof videoProjects)[0]; index: number }> = ({
  project,
  index,
}) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Determine video source: prefer direct videoUrl, fall back to demoUrl
  const videoSrc = project.videoUrl || project.demoUrl || '';

  // Detect if it's a Vimeo / YouTube embed or a direct file
  const isEmbed =
    videoSrc.includes('vimeo.com') || videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');

  // Convert Vimeo share URL → embed URL with autoplay params
  const toVimeoEmbed = (url: string) => {
    const id = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return id
      ? `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1&controls=0`
      : url;
  };

  // Convert YouTube URL → embed URL
  const toYouTubeEmbed = (url: string) => {
    const id =
      url.match(/youtu\.be\/([^?]+)/)?.[1] ||
      url.match(/youtube\.com\/watch\?v=([^&]+)/)?.[1];
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1`
      : url;
  };

  const embedSrc = videoSrc.includes('vimeo')
    ? toVimeoEmbed(videoSrc)
    : videoSrc.includes('youtube') || videoSrc.includes('youtu.be')
    ? toYouTubeEmbed(videoSrc)
    : videoSrc;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
      //onClick={() => navigate(`/projects/video/${project.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Video / Thumbnail Area ── */}
      <div className="relative h-80 overflow-hidden bg-black">

        {isEmbed ? (
          /* ── Iframe embed (Vimeo / YouTube) ── */
          <>
            {/* Static thumbnail shown until hover */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? 'opacity-0' : 'opacity-80'
              }`}
            />
            {/* Iframe revealed on hover */}
            <iframe
              src={hovered ? embedSrc : ''}
              className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          </>
        ) : (
          /* ── Native <video> for direct file URLs ── */
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={project.imageUrl}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Mute / Unmute button */}
            <motion.button
              onClick={toggleMute}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 z-20 w-9 h-9 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              title={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? (
                <VolumeX className="w-4 h-4 text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </motion.button>

            {/* Fullscreen button */}
            <motion.button
              onClick={handleFullscreen}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-16 z-20 w-9 h-9 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4 text-white" />
            </motion.button>
          </>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* "Playing" pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -8 }}
          transition={{ duration: 0.25 }}
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-white text-xs font-mono tracking-wider uppercase">Playing</span>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Timeline badge */}
        <div className="absolute bottom-4 right-4 z-20">
          <span className="px-3 py-1 bg-black/70 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-lg backdrop-blur-sm">
            {project.timeline}
          </span>
        </div>

        {/* Hover border glow */}
        <div
          className={`absolute inset-0 ring-2 ring-purple-500/60 rounded-t-2xl transition-opacity duration-300 pointer-events-none ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* ── Project Info ── */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 font-light">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs text-purple-600 dark:text-purple-400 font-mono font-bold tracking-wider uppercase"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 2).map((tech) => (
              <span key={tech} className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                {tech}
              </span>
            ))}
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
          >
            <ArrowUpRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const VideoProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <style>{`
        .marquee { display: flex; overflow: hidden; gap: 2rem; white-space: nowrap; }
        .marquee-inner { display: flex; gap: 2rem; animation: marquee 22s linear infinite; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ── Header (unchanged) ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 group transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-wider uppercase">Back to Home</span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Film className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Video <span className="text-purple-600 dark:text-purple-400">Editing</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2 font-mono text-sm tracking-wider uppercase">
                {videoProjects.length} Production Projects
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl font-light leading-relaxed">
            Bringing stories to life through creative video production and post-production
          </p>
        </motion.div>

        {/* ── Marquee ticker (unchanged) ── */}
        <div className="border-y border-gray-200 dark:border-gray-800 py-3 mb-16 overflow-hidden bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 transition-colors duration-300">
          <div className="marquee">
            <div className="marquee-inner">
              {[
                'After Effects','DaVinci Resolve','Color Grading','Motion Graphics',
                'Sound Design','Visual Effects','Editing','Premiere Pro',
                'After Effects','DaVinci Resolve','Color Grading','Motion Graphics',
                'Sound Design','Visual Effects','Editing','Premiere Pro',
              ].map((item, i) => (
                <span
                  key={i}
                  className="font-mono text-xs text-gray-700 dark:text-gray-300 tracking-widest uppercase flex-shrink-0 transition-colors duration-300"
                >
                  {item} <span className="text-purple-600 dark:text-purple-400 mx-4">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Video Grid ── */}
        <div className="grid md:grid-cols-2 gap-8">
          {videoProjects.map((project, index) => (
            <VideoCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default VideoProjects;