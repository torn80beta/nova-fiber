const menuItems = [
  { href: "#features", label: "Features" },
  { href: "#products", label: "Products" },
  { href: "#experiences", label: "Experience" },
  { href: "#materials", label: "Materials" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contacts", label: "Contacts" },
  { href: "#top", label: "Back to top", isBackToTop: true },
];

// const products = [
//   {
//     id: 1,
//     name: "Sakarias Armchair",
//     image: "/image/products/product_1.jpg",
//   },
//   {
//     id: 2,
//     name: "Baltsar Chair",
//     image: "/image/products/product_2.jpg",
//   },
//   {
//     id: 3,
//     name: "Anjay Chair",
//     image: "/image/products/product_3.jpg",
//   },
//   {
//     id: 4,
//     name: "Nyantuy Chair",
//     image: "/image/products/product_4.jpg",
//   },
// ];

const testimonials = [
  {
    id: 1,
    name: "Bang Upin",
    role: "Pedagang Asongan",
    quote:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
    bgImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    quote:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pak Budi",
    role: "Pengusaha",
    quote: "Desain interior yang sangat memuaskan dan elegan.",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Mas Dimas",
    role: "Freelance Designer",
    quote:
      "Semenjak pakai furniture dari Panto, ruang kerjaku jadi super estetik. Kalau lagi Zoom meeting, background-nya udah kayak studio profesional!",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Mbak Ayu",
    role: "Pengantin Baru",
    quote:
      "Pas banget buat ngisi rumah baru kami. Harganya bersahabat, tapi kualitas kayunya kokoh banget. Suami juga suka sama desain minimalisnya.",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Kang Gilang",
    role: "Anak Kost",
    quote:
      "Gak nyangka kamar kost-an yang sempit bisa disulap jadi se-cozy ini berkat Panto. Bahannya bagus dan perakitannya gampang banget.",
    rating: 4,
    bgImage:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  },
];

const works = [
  {
    id: 1,
    name: "Red Sofa",
    before: "/image/products/photo_4_1.jpg",
    after: "/image/products/photo_4_2.jpg",
  },
  {
    id: 2,
    name: "Gray Sofa",
    before: "/image/products/photo_2_1.jpg",
    after: "/image/products/photo_2_2.jpg",
  },
  {
    id: 3,
    name: "White Mattress",
    before: "/image/products/photo_3_1.jpg",
    after: "/image/products/photo_3_2.jpg",
  },
  {
    id: 4,
    name: "White Sofa",
    before: "/image/products/photo_1_1.jpg",
    after: "/image/products/photo_1_2.jpg",
  },
];

export { menuItems, testimonials, works };
