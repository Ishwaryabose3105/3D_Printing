import { Layers, Box, SlidersHorizontal, Zap } from 'lucide-react'

export const capabilities = [
  {
    icon: Layers,
    title: 'Precision 3D printing',
   
    text: 'Accurate, consistent layers for parts that fit and finishes that last.',
  },
  {
    icon: Box,
    title: 'Professional 3D modeling',
    text: 'CAD and sculpted models prepared for clean printing.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom product development',
    text: 'From first sketch to a product made around your needs.',
  },
  {
    icon: Zap,
    title: 'Rapid prototyping',
    text: 'Hold your idea in your hands early, then refine it.',
  },
]

// size: 'large' = 2x2 tile, 'tall' = 4 rows, 'wide' = full row
// TODO: swap the illustrations for real project photos when they're ready
export const projects = [
  { title: 'Architectural models', art: 'building', size: 'large', image: '/images/projects/archii.jpeg' },
  
  { title: 'Custom sculptures', art: 'statue' , image: '/images/projects/sta.jpeg',},
  { title: 'Functional prototypes', art: 'gear', size: 'tall', image: '/images/projects/gear.avif', },
  { title: '3D product designs', art: 'lamp', image: '/images/projects/moon.jpeg', },
  { title: 'Personalized products', art: 'keychain', size: 'wide', image: '/images/projects/cust.jpeg' },
]

export const processSteps = [
  { title: 'Share your idea', text: 'Send a sketch, a photo or a rough description.' },
  { title: 'Design and 3D modeling', text: 'We build the model and confirm the details with you.' },
  { title: 'Printing and production', text: 'Your parts are printed with the right settings and materials.' },
  { title: 'Quality check and delivery', text: 'Every piece is inspected, then packed and delivered.' },
]

export const whyChooseUs = [
  { title: 'Creative customization', text: 'Shapes, text, colors and sizes made around your idea.' },
  { title: 'Precision-focused production', text: 'Careful print settings for accurate, repeatable parts.' },
  { title: 'Professional design workflows', text: 'CAD, Blender and Fusion 360 under one roof.' },
  { title: 'Quality materials', text: 'Materials chosen for the job, from display pieces to working parts.' },
  { title: 'Personalized consultation', text: 'Talk through your idea with the people who build it.' },
  { title: 'Flexible project requirements', text: 'One-off pieces or small batches, we adapt.' },
]
