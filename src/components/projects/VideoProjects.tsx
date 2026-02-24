import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Volume2, VolumeX, Film, ArrowUpRight,
  Maximize2, Youtube, Users, PlayCircle, Eye, ExternalLink,
} from 'lucide-react';
import { videoProjects } from '../../data/VideoProjects';

// ─── YouTube Channel Data ─────────────────────────────────────────────────────
interface YouTubeChannel {
  id: string;
  name: string;
  handle: string;
  description: string;
  channelUrl: string;
  avatarUrl: string;
  bannerUrl?: string;
  stats: {
    subscribers: string;
    totalViews: string;
    videoCount: string;
  };
  tags: string[];
  accentColor?: 'red' | 'purple' | 'blue';
}

const myChannels: YouTubeChannel[] = [
  {
    id: 'ch-1',
    name: 'Her3:9',
    handle: '@liasmichelle3523',
    description:
      'Cinematic edits, color grading breakdowns, and behind-the-scenes of my video production workflow.',
    channelUrl: 'https://youtube.com/@liasmichelle3523?si=EM8_c52k3GRiQqfP',
    avatarUrl: 'https://placehold.co/120x120/7c3aed/white?text=YT',
    bannerUrl: '',
    stats: {
      subscribers: '1.6K',
      totalViews: '320K',
      videoCount: '41',
    },
    tags: ['Cinematic', 'Color Grading', 'Motion Graphics'],
    accentColor: 'red',
  },

  {
    id: 'ch-2',
    name: 'miss_tyyyyyy',
    handle: '@miss_tyyyyyy',
    description:
      'Cinematic edits, color grading breakdowns, and behind-the-scenes of my video production workflow.',
    channelUrl: 'https://youtube.com/@miss_tyyyyyy?si=DyumPdMWD0cOMSE_',
    avatarUrl: 'https://placehold.co/120x120/7c3aed/white?text=YT',
    bannerUrl: '',
    stats: {
      subscribers: '14',
      totalViews: '1.8K',
      videoCount: '2',
    },
    tags: ['Cinematic', 'Color Grading', 'Motion Graphics'],
    accentColor: 'red',
  },
];

// ─── Accent colour map ────────────────────────────────────────────────────────
const accentMap = {
  red:    { ring: 'ring-red-500/60',    badge: 'bg-red-500',    text: 'text-red-500',    bg: 'bg-red-50 dark:bg-red-950/20' },
  purple: { ring: 'ring-purple-500/60', badge: 'bg-purple-500', text: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' },
  blue:   { ring: 'ring-blue-500/60',   badge: 'bg-blue-500',   text: 'text-blue-500',   bg: 'bg-blue-50 dark:bg-blue-950/20' },
};

// ─── Stat Pill ────────────────────────────────────────────────────────────────
const StatPill: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}> = ({ icon, label, value, color }) => (
  <div className="flex flex-col items-center text-center gap-0.5">
    <div className={`flex items-center gap-1 ${color}`}>{icon}</div>
    <span className="text-base font-bold text-gray-900 dark:text-white">{value}</span>
    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{label}</span>
  </div>
);

// ─── Channel Card ─────────────────────────────────────────────────────────────
const ChannelCard: React.FC<{ channel: YouTubeChannel; index: number }> = ({ channel, index }) => {
  const [hovered, setHovered] = useState(false);
  const colors = accentMap[channel.accentColor ?? 'red'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 group ${
        hovered ? `ring-2 ${colors.ring}` : ''
      }`}
    >
      {/* Banner Background */}
      <div className="relative h-40 overflow-hidden">
        {channel.bannerUrl ? (
          <>
            <motion.img
              src={channel.bannerUrl}
              alt={`${channel.name} banner`}
              className="w-full h-full object-cover"
              animate={{ scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          </>
        ) : (
          <div className={`w-full h-full ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
              animate={{ backgroundPosition: hovered ? ['0px 0px', '40px 40px'] : '0px 0px' }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <Youtube className={`w-16 h-16 ${colors.text} opacity-30`} />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-gray-900/80" />
        
        {/* YouTube Badge */}
        <div className="absolute top-4 right-4 z-10">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-2 px-3 py-1.5 ${colors.badge} rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm`}
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>YouTube</span>
          </motion.span>
        </div>
      </div>

      {/* Avatar */}
      <div className="px-6 -mt-12 mb-4 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-full blur-lg opacity-75" />
          <img
            src={channel.avatarUrl}
            alt={channel.name}
            className="relative w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-3 border-white dark:border-gray-900 rounded-full shadow-lg"
          />
        </motion.div>
      </div>

      {/* Channel Info */}
      <div className="px-6 pb-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 transition-all duration-300">
            {channel.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            {channel.handle}
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {channel.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {channel.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className={`text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg ${colors.bg} ${colors.text} border border-current/10`}
            >
              #{tag}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-5 mb-5 border-t border-gray-200 dark:border-gray-800">
          <motion.div whileHover={{ y: -2 }} className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className={`w-4 h-4 ${colors.text}`} />
            </div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {channel.stats.subscribers}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
              Subscribers
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Eye className={`w-4 h-4 ${colors.text}`} />
            </div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {channel.stats.totalViews}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
              Total Views
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="text-center">
            <div className="flex items-center justify-center mb-1">
              <PlayCircle className={`w-4 h-4 ${colors.text}`} />
            </div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {channel.stats.videoCount}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
              Videos
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={channel.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`block w-full py-3 rounded-xl font-bold text-center text-white ${colors.badge} shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            animate={{ x: hovered ? ['-100%', '100%'] : '-100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative flex items-center justify-center gap-2">
            <span>Visit Channel</span>
            <ExternalLink className="w-4 h-4" />
          </span>
        </motion.a>
      </div>

      {/* Decorative Corner Accent */}
      <motion.div
        className={`absolute top-0 left-0 w-20 h-20 ${colors.text} opacity-5`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
        animate={{ scale: hovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// ─── YouTube Channel Showcase Section ────────────────────────────────────────
const YouTubeChannelShowcase: React.FC = () => (
  <section className="mt-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30"
        >
          <Youtube className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        My YouTube <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Channels</span>
      </h2>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Subscribe for exclusive content, tutorials, and behind-the-scenes insights
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {myChannels.map((channel, idx) => (
        <ChannelCard key={channel.id} channel={channel} index={idx} />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-full border border-red-200/30 dark:border-red-700/30">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-red-500 rounded-full" 
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          More content coming soon
        </span>
      </div>
    </motion.div>
  </section>
);

// ─── Video Card ───────────────────────────────────────────────────────────────
const VideoCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = () => setMuted(!muted);
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const videoSrc = project.videoUrl || '';
  const isEmbedded = videoSrc.includes('vimeo.com') || videoSrc.includes('youtube.com');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800"
    >
      {/* Video Thumbnail/Player */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        {isEmbedded ? (
          <>
            <div
              className="w-full h-full bg-cover bg-center filter blur-sm scale-110"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
            <iframe
              src={videoSrc}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          </>
        ) : (
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

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: hovered ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.button
              onClick={toggleMute}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 z-20 w-9 h-9 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              title={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
            </motion.button>

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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -8 }}
          transition={{ duration: 0.25 }}
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs text-white font-mono uppercase tracking-wider">Hover to Play</span>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((feature: string) => (
            <span key={feature} className="text-xs text-purple-600 dark:text-purple-400 font-mono font-bold tracking-wider uppercase">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 2).map((tech: string) => (
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

        {/* Header */}
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

        {/* Marquee ticker */}
        <div className="border-y border-gray-200 dark:border-gray-800 py-3 mb-16 overflow-hidden bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 transition-colors duration-300">
          <div className="marquee">
            <div className="marquee-inner">
              {[
                'After Effects', 'DaVinci Resolve', 'Color Grading', 'Motion Graphics',
                'Sound Design', 'Visual Effects', 'Editing', 'Premiere Pro',
                'After Effects', 'DaVinci Resolve', 'Color Grading', 'Motion Graphics',
                'Sound Design', 'Visual Effects', 'Editing', 'Premiere Pro',
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

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videoProjects.map((project, index) => (
            <VideoCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* YouTube Channel Showcase */}
        <YouTubeChannelShowcase />

      </div>
    </div>
  );
};

export default VideoProjects;