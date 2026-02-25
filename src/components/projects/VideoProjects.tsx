import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Film, ArrowUpRight,
  Youtube, Users, PlayCircle, Eye, ExternalLink, Play,
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
    stats: { subscribers: '1.6K', totalViews: '320K', videoCount: '41' },
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
    stats: { subscribers: '14', totalViews: '1.8K', videoCount: '2' },
    tags: ['Cinematic', 'Color Grading', 'Motion Graphics'],
    accentColor: 'red',
  },
];

const accentMap = {
  red:    { ring: 'ring-red-500/60',    badge: 'bg-red-500',    text: 'text-red-500',    bg: 'bg-red-50 dark:bg-red-950/20' },
  purple: { ring: 'ring-purple-500/60', badge: 'bg-purple-500', text: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' },
  blue:   { ring: 'ring-blue-500/60',   badge: 'bg-blue-500',   text: 'text-blue-500',   bg: 'bg-blue-50 dark:bg-blue-950/20' },
};

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
      {/* Banner */}
      <div className="relative h-40 overflow-hidden">
        {channel.bannerUrl ? (
          <>
            <motion.img src={channel.bannerUrl} alt={`${channel.name} banner`} className="w-full h-full object-cover" animate={{ scale: hovered ? 1.1 : 1 }} transition={{ duration: 0.6 }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          </>
        ) : (
          <div className={`w-full h-full ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
            <Youtube className={`w-16 h-16 ${colors.text} opacity-30`} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-gray-900/80" />
        <div className="absolute top-4 right-4 z-10">
          <span className={`flex items-center gap-2 px-3 py-1.5 ${colors.badge} rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg`}>
            <Youtube className="w-3.5 h-3.5" /> YouTube
          </span>
        </div>
      </div>

      {/* Avatar */}
      <div className="px-6 -mt-12 mb-4 relative z-10">
        <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="relative inline-block">
          <img src={channel.avatarUrl} alt={channel.name} className="relative w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-xl" />
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full shadow-lg" />
        </motion.div>
      </div>

      {/* Info */}
      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 transition-all duration-300">{channel.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-3">{channel.handle}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">{channel.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {channel.tags.map((tag) => (
            <span key={tag} className={`text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg ${colors.bg} ${colors.text}`}>#{tag}</span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-5 mb-5 border-t border-gray-200 dark:border-gray-800">
          {[
            { icon: <Users className={`w-4 h-4 ${colors.text}`} />, value: channel.stats.subscribers, label: 'Subscribers' },
            { icon: <Eye className={`w-4 h-4 ${colors.text}`} />, value: channel.stats.totalViews, label: 'Total Views' },
            { icon: <PlayCircle className={`w-4 h-4 ${colors.text}`} />, value: channel.stats.videoCount, label: 'Videos' },
          ].map(({ icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="flex items-center justify-center mb-1">{icon}</div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">{label}</p>
            </div>
          ))}
        </div>

        <motion.a href={channel.channelUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`block w-full py-3 rounded-xl font-bold text-center text-white ${colors.badge} shadow-lg hover:shadow-xl transition-all duration-300`}>
          <span className="flex items-center justify-center gap-2">Visit Channel <ExternalLink className="w-4 h-4" /></span>
        </motion.a>
      </div>
    </motion.div>
  );
};

// ─── YouTube Channel Showcase ─────────────────────────────────────────────────
const YouTubeChannelShowcase: React.FC = () => (
  <section className="mt-24">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-6">
        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30">
          <Youtube className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        My YouTube <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Channels</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Subscribe for exclusive content, tutorials, and behind-the-scenes insights</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {myChannels.map((channel, idx) => <ChannelCard key={channel.id} channel={channel} index={idx} />)}
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
      <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-full border border-red-200/30 dark:border-red-700/30">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-red-500 rounded-full" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">More content coming soon</span>
      </div>
    </motion.div>
  </section>
);

// ─── Vimeo Video Card ─────────────────────────────────────────────────────────
const VideoCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const [playing, setPlaying] = useState(false);

  // Build the embed URL — append autoplay=1 when user clicks play
  const baseUrl = project.videoUrl; // already a player.vimeo.com/video/ID URL
  const embedUrl = `${baseUrl}?autoplay=${playing ? 1 : 0}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800"
    >
      {/* Vimeo Embed Area */}
      <div className="relative aspect-video bg-gray-950 overflow-hidden">
        {playing ? (
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        ) : (
          /* Placeholder / click-to-play cover */
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800"
            onClick={() => setPlaying(true)}
          >
            {/* Vimeo logo watermark */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#1ab7ea]/90 rounded-full">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24"><path d="M22.396 7.164c-.093 2.026-1.507 4.799-4.245 8.32C15.322 19.198 12.93 21 10.97 21c-1.214 0-2.24-1.119-3.079-3.359l-1.68-6.172C5.57 9.23 4.93 8.111 4.24 8.111c-.154 0-.69.323-1.609.966L1.5 7.688c1.012-.89 2.006-1.78 2.976-2.667C5.859 3.9 7.07 3.212 7.824 3.14c1.848-.177 2.986 1.087 3.413 3.793.46 2.907.779 4.714.957 5.42.532 2.42 1.117 3.626 1.757 3.626.496 0 1.243-.786 2.24-2.358.993-1.572 1.526-2.768 1.598-3.588.142-1.356-.39-2.035-1.598-2.035-.568 0-1.155.13-1.757.39 1.165-3.83 3.393-5.693 6.681-5.593 2.436.068 3.58 1.651 3.481 4.469z"/></svg>
              <span className="text-white text-xs font-bold">Vimeo</span>
            </div>

            {/* Gradient film strip background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 42px)' }} />

            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-20 h-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transition-all duration-300 shadow-2xl"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </motion.div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold text-sm truncate">{project.title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          {project.timeline && (
            <span className="ml-3 shrink-0 text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
              {project.timeline}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 font-light leading-relaxed">
          {project.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((feature: string) => (
            <span key={feature} className="text-xs text-purple-600 dark:text-purple-400 font-mono font-bold tracking-wider uppercase">
              {feature}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3">
            {project.technologies.slice(0, 2).map((tech: string) => (
              <span key={tech} className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                {tech}
              </span>
            ))}
          </div>
          <motion.a
            href={project.videoUrl.replace('player.vimeo.com/video', 'vimeo.com')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="flex items-center gap-1 text-xs text-[#1ab7ea] font-mono hover:underline"
          >
            <span>Vimeo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
// ...existing code...

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
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 group transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-wider uppercase">Back to Home</span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Film className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
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

        {/* Marquee */}
        <div className="border-y border-gray-200 dark:border-gray-800 py-3 mb-16 overflow-hidden bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
          <div className="marquee">
            <div className="marquee-inner">
              {[
                'After Effects', 'DaVinci Resolve', 'Color Grading', 'Motion Graphics',
                'Sound Design', 'Visual Effects', 'Editing', 'Premiere Pro',
                'After Effects', 'DaVinci Resolve', 'Color Grading', 'Motion Graphics',
                'Sound Design', 'Visual Effects', 'Editing', 'Premiere Pro',
              ].map((item, i) => (
                <span key={i} className="font-mono text-xs text-gray-700 dark:text-gray-300 tracking-widest uppercase flex-shrink-0">
                  {item} <span className="text-purple-600 dark:text-purple-400 mx-4">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* YouTube Channel Showcase - MOVED TO TOP */}
        <YouTubeChannelShowcase />

        {/* Divider */}
        <div className="my-20 border-t border-gray-200 dark:border-gray-800"></div>

        {/* Video Editing Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6"
          >
            <Film className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">Editing Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional video editing showcases and creative productions
          </p>
        </motion.div>

        {/* Video Grid - MOVED TO BOTTOM */}
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