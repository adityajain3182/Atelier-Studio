import { Brand } from './types';

// HOW TO USE LOCAL IMAGES:
// 1. Ensure you have a 'public/images' folder.
// 2. Create subfolders for each brand (e.g., 'public/images/marchtee').
// 3. Place your screenshots there (cover.jpg, p1-1.jpg, etc.).
// 4. Update the paths below to point to those files (e.g., '/images/marchtee/cover.jpg').

export const BRANDS: Brand[] = [
  {
    id: 'marchtee',
    name: 'Marchtee',
    tagline: 'Essentials redefined.',
    description: 'Premium cotton basics for the everyday wardrobe.',
    fullDescription: 'Marchtee focuses on the foundational pieces of a wardrobe. By perfecting the cut and fabric of the classic t-shirt, we create essentials that stand the test of time and trends.',
    established: '2020',
    origin: 'India',
    image: '/images/marchtee/p23.jpg', 
    gallery: ['https://picsum.photos/800/600?random=11', 'https://picsum.photos/800/600?random=12'],
    website: 'https://marchtee.com',
    categories: ['Basics', 'Apparel'],
    products: [
      { 
        id: 'march-p1', 
        name: 'Signature Tee', 
        price: '₹999', 
        description: 'Heavyweight cotton jersey.', 
        images: ['https://picsum.photos/600/800?random=101', 'https://picsum.photos/600/800?random=101b', 'https://picsum.photos/600/800?random=101c'],
        categories: ['Top', 'Unisex', 'Cotton']
      },
      { 
        id: 'march-p2', 
        name: 'Classic Straight Denim', 
        price: '₹2,499', 
        description: 'Dark indigo wash with a relaxed straight fit.', 
        images: [
            '/images/marchtee/p21.jpg', 
            '/images/marchtee/p22.jpg', 
            '/images/marchtee/p23.jpg'
        ],
        categories: ['Bottoms', 'Denim', 'Relaxed']
      },
    ]
  },
  {
    id: 'made-in-theory',
    name: 'Made In Theory',
    tagline: 'Conceptual streetwear.',
    description: 'Experimental cuts meeting functional design.',
    fullDescription: 'Made In Theory explores the intersection of art and utility. Each collection is a hypothesis tested through fabric, resulting in garments that challenge standard silhouettes.',
    established: '2021',
    origin: 'Mumbai, India',
    image: 'https://picsum.photos/800/1000?random=2', 
    gallery: ['https://picsum.photos/800/600?random=21', 'https://picsum.photos/800/600?random=22'],
    website: 'https://madeintheory.com',
    categories: ['Streetwear', 'Conceptual'],
    products: [
      { 
        id: 'mit-p1', 
        name: 'Utility Vest', 
        price: '₹3,200', 
        description: 'Multi-pocket tactical layer.', 
        images: ['https://picsum.photos/600/800?random=201', 'https://picsum.photos/600/800?random=201b', 'https://picsum.photos/600/800?random=201c'],
        categories: ['Outerwear', 'Tactical', 'Utility']
      },
      { 
        id: 'mit-p2', 
        name: 'Cargo Jogger', 
        price: '₹2,800', 
        description: 'Tapered fit with strap details.', 
        images: ['https://picsum.photos/600/800?random=202', 'https://picsum.photos/600/800?random=202b', 'https://picsum.photos/600/800?random=202c'],
        categories: ['Bottoms', 'Techwear', 'Jogger']
      },
    ]
  },
  {
    id: 'folkandfab',
    name: 'Folk & Fab',
    tagline: 'Heritage woven into modernity.',
    description: 'Traditional textiles adapted for the contemporary soul.',
    fullDescription: 'Bridging the gap between rural artisans and urban aesthetics, Folk & Fab brings centuries-old weaving techniques into modern cuts and styles.',
    established: '2019',
    origin: 'Jaipur, India',
    image: 'https://picsum.photos/800/1000?random=3', 
    gallery: ['https://picsum.photos/800/600?random=31', 'https://picsum.photos/800/600?random=32'],
    website: 'https://folkandfab.com',
    categories: ['Sustainable', 'Ethnic'],
    products: [
      { 
        id: 'ff-p1', 
        name: 'Handloom Shirt', 
        price: '₹1,800', 
        description: 'Organic cotton, natural dyes.', 
        images: ['https://picsum.photos/600/800?random=301', 'https://picsum.photos/600/800?random=301b', 'https://picsum.photos/600/800?random=301c'],
        categories: ['Shirt', 'Organic', 'Handloom']
      },
      { 
        id: 'ff-p2', 
        name: 'Block Print Dress', 
        price: '₹2,400', 
        description: 'Traditional Bagru print.', 
        images: ['https://picsum.photos/600/800?random=302', 'https://picsum.photos/600/800?random=302b', 'https://picsum.photos/600/800?random=302c'],
        categories: ['Dress', 'Printed', 'Artisan']
      },
    ]
  },
  {
    id: 'fourine-enterprise',
    name: 'Fourine',
    tagline: 'Industrial design language.',
    description: 'Structured garments for the creative professional.',
    fullDescription: 'Fourine Enterprise treats clothing design like industrial architecture. Clean lines, robust materials, and a greyscale palette define our visual identity.',
    established: '2022',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=4',
    gallery: ['https://picsum.photos/800/600?random=41', 'https://picsum.photos/800/600?random=42'],
    website: 'https://fourine.com',
    categories: ['Minimalist', 'Workwear'],
    products: [
      { 
        id: 'four-p1', 
        name: 'Architect Jacket', 
        price: '₹4,500', 
        description: 'Structured canvas blend.', 
        images: ['https://picsum.photos/600/800?random=401', 'https://picsum.photos/600/800?random=401b', 'https://picsum.photos/600/800?random=401c'],
        categories: ['Inwear', 'Formal', 'Canvas']
      },
      { 
        id: 'four-p2', 
        name: 'Pleated Trouser', 
        price: '₹3,200', 
        description: 'Wide leg formal fit.', 
        images: ['https://picsum.photos/600/800?random=402', 'https://picsum.photos/600/800?random=402b', 'https://picsum.photos/600/800?random=402c'],
        categories: ['Bottoms', 'Trousers', 'Formal']
      },
    ]
  },
  {
    id: 'londhegarments',
    name: 'Londhe Garments',
    tagline: 'Timeless Indian tailoring.',
    description: 'Bespoke quality ready-to-wear.',
    fullDescription: 'Londhe Garments focuses on the art of the fit. With a heritage in tailoring, we bring bespoke-level attention to detail to our ready-to-wear collections.',
    established: '2018',
    origin: 'Pune, India',
    image: 'https://picsum.photos/800/1000?random=5',
    gallery: ['https://picsum.photos/800/600?random=51', 'https://picsum.photos/800/600?random=52'],
    website: 'https://londhe.com',
    categories: ['Tailoring', 'Menswear'],
    products: [
      { 
        id: 'lon-p1', 
        name: 'Linen Kurta', 
        price: '₹1,500', 
        description: 'Breathable summer essential.', 
        images: ['https://picsum.photos/600/800?random=501', 'https://picsum.photos/600/800?random=501b', 'https://picsum.photos/600/800?random=501c'],
        categories: ['Ethnic', 'Linen', 'Summer']
      },
      { 
        id: 'lon-p2', 
        name: 'Nehru Jacket', 
        price: '₹2,800', 
        description: 'Textured jute blend.', 
        images: ['https://picsum.photos/600/800?random=502', 'https://picsum.photos/600/800?random=502b', 'https://picsum.photos/600/800?random=502c'],
        categories: ['Layering', 'Formal', 'Jute']
      },
    ]
  },
  {
    id: 'ahankarwear',
    name: 'Ahankar Wear',
    tagline: 'Pride in self-expression.',
    description: 'Bold graphics and statement pieces.',
    fullDescription: 'Ahankar is about owning your identity. Our designs are loud, proud, and unapologetic, drawing inspiration from Indian mythology and modern pop culture.',
    established: '2023',
    origin: 'Delhi, India',
    image: 'https://picsum.photos/800/1000?random=6',
    gallery: ['https://picsum.photos/800/600?random=61', 'https://picsum.photos/800/600?random=62'],
    website: 'https://ahankar.com',
    categories: ['Graphic', 'Streetwear'],
    products: [
      { 
        id: 'ahn-p1', 
        name: 'Mythos Oversized Tee', 
        price: '₹1,200', 
        description: 'High density puff print.', 
        images: ['https://picsum.photos/600/800?random=601', 'https://picsum.photos/600/800?random=601b', 'https://picsum.photos/600/800?random=601c'],
        categories: ['Tops', 'Graphic', 'Oversized']
      },
      { 
        id: 'ahn-p2', 
        name: 'Street Hoodie', 
        price: '₹2,500', 
        description: 'Heavyweight fleece.', 
        images: ['https://picsum.photos/600/800?random=602', 'https://picsum.photos/600/800?random=602b', 'https://picsum.photos/600/800?random=602c'],
        categories: ['Hoodie', 'Fleece', 'Winter']
      },
    ]
  },
  {
    id: 'dripoff',
    name: 'Dripoff.in',
    tagline: 'Culture of the new age.',
    description: 'Sneaker match basics and accessories.',
    fullDescription: 'Curated for the hype culture, Dripoff provides the perfect apparel to match your grails. Coordinated colors and modern fits.',
    established: '2021',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=7',
    gallery: ['https://picsum.photos/800/600?random=71', 'https://picsum.photos/800/600?random=72'],
    website: 'https://dripoff.in',
    categories: ['Urban', 'Accessories'],
    products: [
      { 
        id: 'drip-p1', 
        name: 'Coord Set', 
        price: '₹2,200', 
        description: 'Matching track set.', 
        images: ['https://picsum.photos/600/800?random=701', 'https://picsum.photos/600/800?random=701b', 'https://picsum.photos/600/800?random=701c'],
        categories: ['Set', 'Tracksuit', 'Co-ord']
      },
      { 
        id: 'drip-p2', 
        name: 'Varsity Jacket', 
        price: '₹3,500', 
        description: 'Faux leather sleeves.', 
        images: ['https://picsum.photos/600/800?random=702', 'https://picsum.photos/600/800?random=702b', 'https://picsum.photos/600/800?random=702c'],
        categories: ['Outerwear', 'Varsity', 'Faux Leather']
      },
    ]
  },
  {
    id: 'hopeprojectt',
    name: 'Hope Project',
    tagline: 'Fashion for a cause.',
    description: 'Ethical manufacturing supporting local communities.',
    fullDescription: 'More than a brand, Hope Project is a movement. A percentage of every sale goes towards uplifting underprivileged communities in the textile sector.',
    established: '2020',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=8',
    gallery: ['https://picsum.photos/800/600?random=81', 'https://picsum.photos/800/600?random=82'],
    website: 'https://hopeproject.in',
    categories: ['Ethical', 'Casual'],
    products: [
      { 
        id: 'hope-p1', 
        name: 'Canvas Tote', 
        price: '₹599', 
        description: 'Recycled cotton canvas.', 
        images: ['https://picsum.photos/600/800?random=801', 'https://picsum.photos/600/800?random=801b', 'https://picsum.photos/600/800?random=801c'],
        categories: ['Accessory', 'Bag', 'Recycled']
      },
      { 
        id: 'hope-p2', 
        name: 'Basic Tee', 
        price: '₹799', 
        description: 'Fair trade organic cotton.', 
        images: ['https://picsum.photos/600/800?random=802', 'https://picsum.photos/600/800?random=802b', 'https://picsum.photos/600/800?random=802c'],
        categories: ['Top', 'Organic', 'Fair Trade']
      },
    ]
  },
  {
    id: 'wtflex',
    name: 'WTFlex',
    tagline: 'Gym to street.',
    description: 'High performance activewear with style.',
    fullDescription: 'Blurring the lines between workout gear and street style. WTFlex uses technical fabrics that handle sweat while looking sharp enough for a night out.',
    established: '2022',
    origin: 'Bangalore, India',
    image: 'https://picsum.photos/800/1000?random=9',
    gallery: ['https://picsum.photos/800/600?random=91', 'https://picsum.photos/800/600?random=92'],
    website: 'https://wtflex.in',
    categories: ['Activewear', 'Sport'],
    products: [
      { 
        id: 'wtf-p1', 
        name: 'Performance Tee', 
        price: '₹999', 
        description: 'Quick dry mesh blend.', 
        images: ['https://picsum.photos/600/800?random=901', 'https://picsum.photos/600/800?random=901b', 'https://picsum.photos/600/800?random=901c'],
        categories: ['Active', 'Top', 'Quick Dry']
      },
      { 
        id: 'wtf-p2', 
        name: 'Compression Shorts', 
        price: '₹899', 
        description: '4-way stretch support.', 
        images: ['https://picsum.photos/600/800?random=902', 'https://picsum.photos/600/800?random=902b', 'https://picsum.photos/600/800?random=902c'],
        categories: ['Bottoms', 'Compression', 'Gym']
      },
    ]
  },
  {
    id: 'salty-alpha',
    name: 'Salty Alpha',
    tagline: 'For the bold.',
    description: 'Edgy aesthetics for the internet generation.',
    fullDescription: 'Salty Alpha captures the zeitgeist of the digital age. fast-paced, bold, and full of attitude. We make clothes for those who want to be seen.',
    established: '2023',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=10',
    gallery: ['https://picsum.photos/800/600?random=1001', 'https://picsum.photos/800/600?random=1002'],
    website: 'https://saltyalpha.com',
    categories: ['Gen-Z', 'Trendy'],
    products: [
      { 
        id: 'salt-p1', 
        name: 'Crop Top', 
        price: '₹890', 
        description: 'Ribbed cotton blend.', 
        images: ['https://picsum.photos/600/800?random=1003', 'https://picsum.photos/600/800?random=1003b', 'https://picsum.photos/600/800?random=1003c'],
        categories: ['Top', 'Crop', 'Ribbed']
      },
      { 
        id: 'salt-p2', 
        name: 'Wide Denim', 
        price: '₹2,100', 
        description: 'Distressed finish.', 
        images: ['https://picsum.photos/600/800?random=1004', 'https://picsum.photos/600/800?random=1004b', 'https://picsum.photos/600/800?random=1004c'],
        categories: ['Bottoms', 'Denim', 'Wide Leg']
      },
    ]
  },
  {
    id: '7-10store',
    name: '7-10 Store',
    tagline: 'Sneaker culture hub.',
    description: 'Footwear and apparel for the collector.',
    fullDescription: 'Specializing in chunky sneakers and retro-futuristic designs. 7-10 Store brings international sneaker aesthetics to the local market.',
    established: '2020',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=11',
    gallery: ['https://picsum.photos/800/600?random=1101', 'https://picsum.photos/800/600?random=1102'],
    website: 'https://7-10.store',
    categories: ['Footwear', 'Streetwear'],
    products: [
      { 
        id: '710-p1', 
        name: 'Chunky Runner', 
        price: '₹4,999', 
        description: 'Mixed material upper.', 
        images: ['https://picsum.photos/600/800?random=1103', 'https://picsum.photos/600/800?random=1103b', 'https://picsum.photos/600/800?random=1103c'],
        categories: ['Shoes', 'Sneakers', 'Chunky']
      },
      { 
        id: '710-p2', 
        name: 'Logo Socks', 
        price: '₹399', 
        description: 'Cotton athletic crew socks.', 
        images: ['https://picsum.photos/600/800?random=1104', 'https://picsum.photos/600/800?random=1104b', 'https://picsum.photos/600/800?random=1104c'],
        categories: ['Accessory', 'Socks', 'Cotton']
      },
    ]
  },
  {
    id: 'youstafashion',
    name: 'Yousta',
    tagline: 'Youth style evolved.',
    description: 'Affordable trends for the college crowd.',
    fullDescription: 'Yousta brings the runway to the hallway. High fashion concepts translated into affordable, everyday wear for the youth.',
    established: '2022',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=12',
    gallery: ['https://picsum.photos/800/600?random=1201', 'https://picsum.photos/800/600?random=1202'],
    website: 'https://yousta.com',
    categories: ['Fast Fashion', 'Casual'],
    products: [
      { 
        id: 'you-p1', 
        name: 'Printed Shirt', 
        price: '₹999', 
        description: 'Viscose resort fit.', 
        images: ['https://picsum.photos/600/800?random=1203', 'https://picsum.photos/600/800?random=1203b', 'https://picsum.photos/600/800?random=1203c'],
        categories: ['Top', 'Shirt', 'Print']
      },
      { 
        id: 'you-p2', 
        name: 'Chino Shorts', 
        price: '₹799', 
        description: 'Stretch cotton twill.', 
        images: ['https://picsum.photos/600/800?random=1204', 'https://picsum.photos/600/800?random=1204b', 'https://picsum.photos/600/800?random=1204c'],
        categories: ['Bottoms', 'Shorts', 'Casual']
      },
    ]
  },
  {
    id: 'copstreet-india',
    name: 'Copstreet',
    tagline: 'Curated hype.',
    description: 'The destination for limited edition drops.',
    fullDescription: 'Copstreet connects you with the hardest-to-find pieces in the street culture world. Authenticity guaranteed.',
    established: '2021',
    origin: 'Mumbai, India',
    image: 'https://picsum.photos/800/1000?random=13',
    gallery: ['https://picsum.photos/800/600?random=1301', 'https://picsum.photos/800/600?random=1302'],
    website: 'https://copstreet.com',
    categories: ['Resell', 'Luxury'],
    products: [
      { 
        id: 'cop-p1', 
        name: 'Vintage Tee', 
        price: '₹2,500', 
        description: 'Washed black oversized.', 
        images: ['https://picsum.photos/600/800?random=1303', 'https://picsum.photos/600/800?random=1303b', 'https://picsum.photos/600/800?random=1303c'],
        categories: ['Top', 'Vintage', 'Tee']
      },
      { 
        id: 'cop-p2', 
        name: 'Grail Hoodie', 
        price: '₹8,000', 
        description: 'Heavyweight french terry.', 
        images: ['https://picsum.photos/600/800?random=1304', 'https://picsum.photos/600/800?random=1304b', 'https://picsum.photos/600/800?random=1304c'],
        categories: ['Outerwear', 'Hoodie', 'Hype']
      },
    ]
  },
  {
    id: 'offbeatoutfits',
    name: 'Offbeat Outfits',
    tagline: 'Normal is boring.',
    description: 'Quirky prints and unconventional styling.',
    fullDescription: 'For those who color outside the lines. Offbeat Outfits brings joy and eccentricity to your daily rotation.',
    established: '2020',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=14',
    gallery: ['https://picsum.photos/800/600?random=1401', 'https://picsum.photos/800/600?random=1402'],
    website: 'https://offbeat.com',
    categories: ['Quirky', 'Casual'],
    products: [
      { 
        id: 'off-p1', 
        name: 'Patchwork Jacket', 
        price: '₹2,800', 
        description: 'Upcycled fabric scraps.', 
        images: ['https://picsum.photos/600/800?random=1403', 'https://picsum.photos/600/800?random=1403b', 'https://picsum.photos/600/800?random=1403c'],
        categories: ['Outerwear', 'Upcycled', 'Jacket']
      },
      { 
        id: 'off-p2', 
        name: 'Funky Socks', 
        price: '₹299', 
        description: 'Mismatched patterns.', 
        images: ['https://picsum.photos/600/800?random=1404', 'https://picsum.photos/600/800?random=1404b', 'https://picsum.photos/600/800?random=1404c'],
        categories: ['Accessory', 'Socks', 'Funky']
      },
    ]
  },
  {
    id: 'cava-athleisure',
    name: 'Cava Athleisure',
    tagline: 'Move with grace.',
    description: 'Premium activewear for the mindful mover.',
    fullDescription: 'Cava combines the softness of lounge wear with the utility of gym wear. Neutral tones and buttery soft fabrics.',
    established: '2023',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=15',
    gallery: ['https://picsum.photos/800/600?random=1501', 'https://picsum.photos/800/600?random=1502'],
    website: 'https://cava.com',
    categories: ['Athleisure', 'Yoga'],
    products: [
      { 
        id: 'cav-p1', 
        name: 'Sculpt Leggings', 
        price: '₹1,800', 
        description: 'High waist compression.', 
        images: ['https://picsum.photos/600/800?random=1503', 'https://picsum.photos/600/800?random=1503b', 'https://picsum.photos/600/800?random=1503c'],
        categories: ['Bottoms', 'Leggings', 'Yoga']
      },
      { 
        id: 'cav-p2', 
        name: 'Sports Bra', 
        price: '₹1,200', 
        description: 'Medium impact support.', 
        images: ['https://picsum.photos/600/800?random=1504', 'https://picsum.photos/600/800?random=1504b', 'https://picsum.photos/600/800?random=1504c'],
        categories: ['Top', 'Bra', 'Support']
      },
    ]
  },
  {
    id: 'taarinianand',
    name: 'Taarini Anand',
    tagline: 'Contemporary elegance.',
    description: 'Designer wear for the modern woman.',
    fullDescription: 'Taarini Anand creates silhouettes that celebrate the female form. Fluid fabrics, subtle embellishments, and sophisticated cuts.',
    established: '2021',
    origin: 'Delhi, India',
    image: 'https://picsum.photos/800/1000?random=16',
    gallery: ['https://picsum.photos/800/600?random=1601', 'https://picsum.photos/800/600?random=1602'],
    website: 'https://taarinianand.com',
    categories: ['Designer', 'Luxury'],
    products: [
      { 
        id: 'tar-p1', 
        name: 'Silk Overlay', 
        price: '₹5,500', 
        description: 'Hand embroidered detailing.', 
        images: ['https://picsum.photos/600/800?random=1603', 'https://picsum.photos/600/800?random=1603b', 'https://picsum.photos/600/800?random=1603c'],
        categories: ['Outerwear', 'Silk', 'Embroidered']
      },
      { 
        id: 'tar-p2', 
        name: 'Palazzo Set', 
        price: '₹4,800', 
        description: 'Crushed silk fabric.', 
        images: ['https://picsum.photos/600/800?random=1604', 'https://picsum.photos/600/800?random=1604b', 'https://picsum.photos/600/800?random=1604c'],
        categories: ['Set', 'Formal', 'Silk']
      },
    ]
  },
  {
    id: 'gullylabs',
    name: 'Gully Labs',
    tagline: 'From the streets, for the streets.',
    description: 'Raw Indian streetwear culture.',
    fullDescription: 'Gully Labs documents the grit and glory of the Indian streets. Authentically home-grown, strictly limited edition.',
    established: '2019',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=17',
    gallery: ['https://picsum.photos/800/600?random=1701', 'https://picsum.photos/800/600?random=1702'],
    website: 'https://gullylabs.com',
    categories: ['Streetwear', 'Hype'],
    products: [
      { 
        id: 'gul-p1', 
        name: 'Graphic Hoodie', 
        price: '₹2,999', 
        description: 'Oversized drop shoulder.', 
        images: ['https://picsum.photos/600/800?random=1703', 'https://picsum.photos/600/800?random=1703b', 'https://picsum.photos/600/800?random=1703c'],
        categories: ['Outerwear', 'Hoodie', 'Oversized']
      },
      { 
        id: 'gul-p2', 
        name: 'Cargo Vest', 
        price: '₹2,499', 
        description: 'Utility pockets galore.', 
        images: ['https://picsum.photos/600/800?random=1704', 'https://picsum.photos/600/800?random=1704b', 'https://picsum.photos/600/800?random=1704c'],
        categories: ['Outerwear', 'Utility', 'Vest']
      },
    ]
  },
  {
    id: 'flexbrat',
    name: 'Flex Brat',
    tagline: 'Attitude is everything.',
    description: 'Bold statements for the fearless.',
    fullDescription: 'Flex Brat is not for the shy. We create pieces that demand attention, mixing punk aesthetics with modern street style.',
    established: '2022',
    origin: 'India',
    image: 'https://picsum.photos/800/1000?random=18',
    gallery: ['https://picsum.photos/800/600?random=1801', 'https://picsum.photos/800/600?random=1802'],
    website: 'https://flexbrat.com',
    categories: ['Punk', 'Street'],
    products: [
      { 
        id: 'flx-p1', 
        name: 'Distressed Tee', 
        price: '₹999', 
        description: 'Acid wash finish.', 
        images: ['https://picsum.photos/600/800?random=1803', 'https://picsum.photos/600/800?random=1803b', 'https://picsum.photos/600/800?random=1803c'],
        categories: ['Top', 'Tee', 'Distressed']
      },
      { 
        id: 'flx-p2', 
        name: 'Biker Jeans', 
        price: '₹2,500', 
        description: 'Reinforced knee panels.', 
        images: ['https://picsum.photos/600/800?random=1804', 'https://picsum.photos/600/800?random=1804b', 'https://picsum.photos/600/800?random=1804c'],
        categories: ['Bottoms', 'Jeans', 'Biker']
      },
    ]
  },
  {
    id: 'bearhouseindia',
    name: 'Bear House',
    tagline: 'Sharp. Minimal. Masculine.',
    description: 'Contemporary menswear essentials.',
    fullDescription: 'The Bear House offers a complete wardrobe solution for the modern man. From crisp linens to structured flannels, we cover every occasion.',
    established: '2018',
    origin: 'Bangalore, India',
    image: 'https://picsum.photos/800/1000?random=19',
    gallery: ['https://picsum.photos/800/600?random=1901', 'https://picsum.photos/800/600?random=1902'],
    website: 'https://thebearhouse.com',
    categories: ['Menswear', 'Casual'],
    products: [
      { 
        id: 'bear-p1', 
        name: 'Check Flannel', 
        price: '₹1,800', 
        description: 'Brushed cotton warmth.', 
        images: ['https://picsum.photos/600/800?random=1903', 'https://picsum.photos/600/800?random=1903b', 'https://picsum.photos/600/800?random=1903c'],
        categories: ['Shirt', 'Flannel', 'Winter']
      },
      { 
        id: 'bear-p2', 
        name: 'Linen Shirt', 
        price: '₹2,100', 
        description: 'European flax linen.', 
        images: ['https://picsum.photos/600/800?random=1904', 'https://picsum.photos/600/800?random=1904b', 'https://picsum.photos/600/800?random=1904c'],
        categories: ['Shirt', 'Linen', 'Summer']
      },
    ]
  }
];