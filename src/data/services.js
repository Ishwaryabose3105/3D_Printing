import { Rocket, Package, Ruler, Shapes, Wrench, MessagesSquare } from 'lucide-react'

// `art: 'gem'` shows the wireframe gem instead of a product illustration
export const coreServices = [
  {
    title: '3D printing services',
    art: 'miniature',
    image:"/images/3D Printing.png",
    points: [
      'Rapid prototyping',
      'Small-batch manufacturing',
      'Layer resolution options',
      'Print-on-demand production',
    ],
  },
  {
    title: '3D design and modeling',
    art: 'gem',
    image:"/images/modeling.jpeg",
    points: [
      'CAD modeling',
      'Low-poly modeling',
      'High-detail sculpting',
      'Blender and Fusion 360 workflows',
      'Technical and industrial design',
    ],
  },
  {
    title: 'Customized 3D solutions',
    art: 'gift',
     image:"/images/customized.png",
    points: [
      'Bespoke product development',
      'Personalized products',
      'Custom design requests',
      'Client-uploaded project consultations',
    ],
  },
]

// TODO: confirm the final list of printers and materials with the team
export const printingInfo = [
  {
    title: 'Printing technologies',
    text: 'FDM printing for durable parts and large pieces. Resin printing for fine detail and smooth surfaces.',
  },
  {
    title: 'Materials',
    text: 'PLA, PETG, ABS and resin, chosen to suit how each part will be used.',
  },
]

export const serviceFeatures = [
  {
    icon: Rocket,
    title: 'Rapid prototyping',
    text: 'Print a working version early, test it, and revise before you commit.',
  },
  {
    icon: Package,
    title: 'Small-batch production',
    text: 'Repeatable runs for products, events and teams.',
  },
  {
    icon: Ruler,
    title: 'CAD and 3D modeling',
    text: 'Precise, dimensioned models for technical and industrial parts.',
  },
  {
    icon: Shapes,
    title: 'Blender and Fusion 360 workflows',
    text: 'Sculpted detail in Blender, parametric engineering in Fusion 360.',
  },
  {
    icon: Wrench,
    title: 'Customized manufacturing',
    text: 'Bespoke products developed with you from concept to finished piece.',
  },
  {
    icon: MessagesSquare,
    title: 'Project consultation',
    text: 'Review your files or ideas with us before any work begins.',
  },
]
