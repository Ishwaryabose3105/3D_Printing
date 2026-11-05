// `art` is the illustration key used by components/common/ProductArt.jsx
export const products = [
  {
    id: 'keychains',
    name: 'Customized 3D Printed Keychains',
    image: "/images/products/keychain.jpeg",
    description: 'Names, initials or logos, made to your design.',
    category: 'Gifts',
    art: 'keychain',
  },
  {
    id: 'shadow-lamps',
    name: '3D Printed Shadow Lamps',
    image: "/images/products/shadow.jpeg",
    description: 'Layered lamps that cast detailed shadows on the wall.',
    category: 'Home decor',
    art: 'lamp',
  },
  {
    id: 'wall-art',
    name: '3D Printed Wall Art',
    image: "/images/products/wall.jpeg",
    description: 'Dimensional panels and patterns for any wall.',
    category: 'Home decor',
    art: 'wallArt',
  },
  {
    id: 'statues',
    name: '3D Printed Statues',
    image: "/images/products/statue.jpeg",
    description: 'High-detail sculpted figures in the size you choose.',
    category: 'Collectibles',
    art: 'statue',
  },
  {
    id: 'desk-name-boards',
    name: 'Customized Desk Name Boards',
    image: "/images/products/name.jpeg",
    description: 'Name and title boards for desks and reception counters.',
    category: 'Gifts',
    art: 'nameBoard',
  },
  {
    id: 'phone-stands',
    name: '3D Printed Phone Stands',
    image: "/images/products/stand.jpeg",
    description: 'Stable stands fitted to your phone or tablet.',
    category: 'Functional',
    art: 'phoneStand',
  },
  {
    id: 'planters',
    name: '3D Printed Planters',
    image: "/images/products/plant.jpeg",
    description: 'Geometric planters with optional drainage.',
    category: 'Home decor',
    art: 'planter',
  },
  {
    id: 'home-decor',
    name: '3D Printed Home Decor',
    image: "/images/products/palnt2.jpeg",
    description: 'Vases, trays and accents in custom shapes.',
    category: 'Home decor',
    art: 'vase',
  },
  {
    id: 'miniatures',
    name: '3D Printed Miniatures',
    image: "/images/products/miniature.jpeg",
    description: 'Small figures and game pieces with fine detail.',
    category: 'Collectibles',
    art: 'miniature',
  },
  {
    id: 'architectural-models',
    name: '3D Printed Architectural Models',
    image: "/images/products/archi.jpeg",
    description: 'Scale models for presentations and planning.',
    category: 'Models',
    art: 'building',
  },
  {
    id: 'functional-accessories',
    name: '3D Printed Functional Accessories',
    image: "/images/products/acc.jpeg",
    description: 'Holders, clips and parts made to fit your need.',
    category: 'Functional',
    art: 'gear',
  },
  {
    id: 'customized-gifts',
    name: 'Customized Gifts',
    image: "/images/products/cus.jpeg",
    description: 'Personalized pieces for birthdays, events and teams.',
    category: 'Gifts',
    art: 'gift',
  },
]

export const categories = ['All', ...new Set(products.map((product) => product.category))]

export const customizationOptions = ['Name or text', 'Color', 'Size', 'Finish', 'Logo']

// Shown in the product popup. Update once materials and lead times are confirmed.
export const productSpecs = [
  { label: 'Material', value: 'Selected for your design' },
  { label: 'Size', value: 'Made to order' },
  { label: 'Lead time', value: 'Shared with your quote' },
]
