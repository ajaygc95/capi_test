// export const homeObjThree = {
//   primary: false,
//   lightBg: true,
//   lightTopLine: false,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: "Testimonial", // Updated topline slightly
//   headline: "Loved their amazing products!", // Updated headline
//   description: "I highly recommend their stylish and durable items.", // Updated description
//   buttonLabel: "Read More",
//   imgStart: "start",
//   img: "/images/profile.jpg", // Updated path to use profile.jpg
//   alt: "Customer Profile",
//   start: "true",
// };

// export const homeObjFour = {
//   primary: true,
//   lightBg: true,
//   lightTopLine: false,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: "Featured Product: Bag", // Updated topline
//   headline: "Check out our Popular Bag", // Updated headline
//   description: "Stylish and versatile for everyday use.", // Updated description
//   buttonLabel: "View Bag",
//   imgStart: "start",
//   img: "/images/bag.jpeg", // Kept bag.jpeg as it's in the list
//   alt: "Stylish Bag",
//   start: "true",
//   price: 45.99, // Example price
//   id: "featured-bag",
// };

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Instant Setup",
  headline: "Extremely quick onboarding process",
  description:
    "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
  buttonLabel: "Learn More",
  imgStart: "",
  img: "/images/svg-2.svg", // Kept svg-2.svg as it's in the list
  alt: "Vault",
  start: "",
};

// Updated productData based on the image list provided
export const productData = [
  {
    id: "pillow-1",
    name: "Shih Tzu Custom Pillow",
    image_url: "/images/shih_tzu_picture_on_pillow.jpeg", // Updated image
    price: 34.99, // Example price
    description: "A comfortable decorative pillow featuring a Shih Tzu.",
  },
  {
    id: "mug-2",
    name: "Shih Tzu Coffee Mug",
    image_url: "/images/shihtzu_mug.jpeg", // Updated image
    price: 15.99, // Example price
    description: "Start your day right with this cute Shih Tzu coffee mug.",
  },
  {
    id: "phone-case-3",
    name: "Protective Phone Case",
    image_url: "/images/phone_case.jpeg", // Updated image
    price: 24.5, // Example price
    description: "A durable and stylish case to protect your smartphone.",
  },
  {
    id: "sweatshirt-4",
    name: "Shih Tzu Sweatshirt",
    image_url: "/images/sweatshirt_shihtzu.jpeg", // Updated image
    price: 49.99, // Example price
    description: "Stay cozy with this comfortable Shih Tzu themed sweatshirt.",
  },
  {
    id: "water-bottle-5",
    name: "Insulated Water Bottle",
    image_url: "/images/watter_bottle.jpeg", // Corrected typo: watter -> water? Assuming water_bottle.jpeg
    price: 19.95, // Example price
    description: "Keep your drinks cold or hot with this insulated bottle.",
    // If the filename is literally watter_bottle.jpeg, use that instead:
    // image_url: "/images/watter_bottle.jpeg",
  },
  {
    id: "bag-6", // Changed ID
    name: "Everyday Shoulder Bag", // Slightly different name
    image_url: "/images/bag.jpeg", // Using bag.jpeg from the list
    price: 45.99, // Kept original price example
    description: "A fashionable and versatile shoulder bag.",
  },
  {
    id: "cup-7",
    name: "Shih Tzu Pink Cup",
    image_url: "/images/shihtzu_on_cup_pink.jpeg", // Added another item
    price: 14.99, // Example price
    description: "A lovely pink cup featuring a Shih Tzu.",
  },
  // Add more product objects based on other images in your list if needed
];
