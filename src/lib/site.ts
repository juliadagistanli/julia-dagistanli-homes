export const agent = {
  name: "Julia Gulden Dagistanli",
  shortName: "Julia Dagistanli",
  title: "Realtor® · Listing Specialist",
  phone: "201-679-5025",
  phoneHref: "tel:+12016795025",
  whatsapp: "https://wa.me/12016795025",
  license: "NJ License 0232776",
  languages: ["English", "French", "Turkish"],
  brokerage: "The Agency Rutherford",
  base: "Rutherford, New Jersey",
  since: 2002,
  consultationForm: "https://forms.gle/7LedLXuUrtP7yxDt5",
  counties: ["Bergen", "Essex", "Hudson", "Passaic"],
};

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/juliadagistanli" },
  {
    label: "Google",
    href: "https://www.google.com/maps/place/Julia+Gulden+Dagistanli+-+Realtor,+The+Agency+Rutherford/@40.8300533,-74.1039247,17z/data=!4m6!3m5!1s0x89c2f8c9476fc6bd:0x34bc8b1ede53b471!8m2!3d40.8300533!4d-74.1039247!16s%2Fg%2F1tf2yqyy",
    icon: "google",
  },
  { label: "Facebook", href: "https://www.facebook.com/juliadagistanli" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juliadagistanli/" },
  { label: "YouTube", href: "https://www.youtube.com/juliadagistanli" },
  { label: "Zillow reviews", href: "https://www.zillow.com/profile/Julia%20Dagistanli#reviews" },
  { label: "Pinterest", href: "https://www.pinterest.com/juliadagistanli" },
  { label: "X", href: "https://www.twitter.com/juliadagistanli" },
  { label: "Blog", href: "https://juliadagistanli.wordpress.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/@juliadagistanli" },
];

export const awards = [
  { name: "NJAR Circle of Excellence® — Gold", years: "2021, 2024, 2025" },
  {
    name: "NJAR Circle of Excellence® — Silver",
    years: "2005, 2006, 2008, 2016, 2017, 2020, 2022, 2023",
  },
  {
    name: "NJAR Circle of Excellence® — Bronze",
    years: "2003, 2004, 2007, 2009, 2013, 2014, 2015, 2018",
  },
  { name: "NJAR Lifetime Distinguished Sales Club", years: "2015" },
  { name: "Top Producing Agent, RE/MAX Metropolitan", years: "2008" },
  { name: "ERA Leaders Award", years: "2019, 2020, 2023" },
  { name: "Five Star Real Estate Award, New Jersey Monthly", years: "2011, 2013–2024" },
  { name: "RealTrends Verified — top 1.5% nationwide", years: "2026" },
];

export type Property = {
  address: string;
  town: string;
  price: string;
  type: string;
  details?: string;
  status?: string;
};

export const currentListings: Property[] = [
  { address: "811 30th Street", town: "Union City", price: "$1,490,000", type: "Multi-Family / Commercial", status: "Active" },
  { address: "615 Summit Avenue", town: "Union City", price: "$1,190,000", type: "Multi-Family / Commercial", status: "Under Contract" },
  { address: "270½ Summit Avenue", town: "Jersey City · Journal Square", price: "$895,000", type: "Multi-Family", details: "3 baths", status: "Active" },
  { address: "67 Prospect Terrace, 2nd Fl", town: "East Rutherford", price: "$2,500 / mo", type: "Rental", details: "2 bd · 1 ba", status: "Active" },
  { address: "116 Essex Street #306", town: "Hackensack", price: "$2,150 / mo", type: "Rental", details: "1 bd · 1 ba", status: "Attorney Review" },
];

export const pastSales: Property[] = [
  { address: "350 Madison Avenue", town: "Cresskill", price: "$2,650,000", type: "Commercial" },
  { address: "517 Dorian Place", town: "Westfield", price: "$1,400,000", type: "Single Family", details: "5 bd · 4 ba" },
  { address: "368 New York Avenue", town: "Lyndhurst", price: "$1,200,000", type: "Multi-Family", details: "6 bd · 4 ba" },
  { address: "193 W Midland Avenue", town: "Paramus", price: "$1,080,000", type: "Multi-Family", details: "7 bd · 4 ba" },
  { address: "68 Feronia Way", town: "Rutherford", price: "$999,000", type: "Multi-Family", details: "6 bd · 4 ba" },
  { address: "144 S Main Street", town: "Lodi", price: "$940,000", type: "Multi-Family", details: "6 bd · 4 ba" },
  { address: "44 Koster Street", town: "Wallington", price: "$920,000", type: "Multi-Family", details: "5 bd · 4 ba" },
  { address: "799 2nd Street", town: "Secaucus", price: "$900,000", type: "Multi-Family", details: "4 ba" },
  { address: "342 Lincoln Avenue", town: "Elmwood Park", price: "$899,000", type: "Multi-Family", details: "5 bd · 2 ba" },
  { address: "19 Yahara Avenue", town: "Rutherford", price: "$840,000", type: "Multi-Family", details: "5 bd · 4 ba" },
  { address: "451 Hoboken Road", town: "Carlstadt", price: "$800,000", type: "Multi-Family", details: "4 bd · 2 ba" },
  { address: "17C Riverview Drive", town: "North Bergen", price: "$790,000", type: "Co-Op", details: "2 bd · 2 ba · 1,617 sf" },
];

export const designFocus = [
  "Kitchens",
  "Bathrooms",
  "Flooring",
  "Lighting",
  "Paint & Finishes",
  "Entryways",
  "Custom Closets",
  "Outdoor Living",
  "Curb Appeal",
  "Architectural Details",
];
