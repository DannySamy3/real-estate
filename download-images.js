const https = require("https");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const images = [
  // Home page images
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "hero-exterior.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    filename: "hero-interior.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    filename: "hero-pool.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    filename: "about-property.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "stats-interior.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    filename: "stats-modern.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    filename: "stats-luxury.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    filename: "gallery-arizona.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "gallery-miami1.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    filename: "gallery-miami2.jpg",
    width: 1920,
    height: 1080,
  },

  // About page images
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    filename: "about-hero.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "about-team.jpg",
    width: 800,
    height: 600,
  },

  // Team member images
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    filename: "team-michael.jpg",
    width: 400,
    height: 400,
  },
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    filename: "team-jessica.jpg",
    width: 400,
    height: 400,
  },
  {
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    filename: "team-robert.jpg",
    width: 400,
    height: 400,
  },
  {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    filename: "team-maria.jpg",
    width: 400,
    height: 400,
  },

  // Properties page images
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    filename: "properties-hero.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "property-1.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "property-2.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    filename: "property-3.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    filename: "property-4.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    filename: "property-5.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    filename: "property-6.jpg",
    width: 800,
    height: 600,
  },

  // Agent profile images
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    filename: "agent-john.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    filename: "agent-jane.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    filename: "agent-robert.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    filename: "agent-maria.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    filename: "agent-david.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    filename: "agent-sarah.jpg",
    width: 100,
    height: 100,
  },

  // Sell page images
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "sell-hero.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "sell-process.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    filename: "sell-testimonial-1.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    filename: "sell-testimonial-2.jpg",
    width: 100,
    height: 100,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    filename: "sell-testimonial-3.jpg",
    width: 100,
    height: 100,
  },

  // News page images
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "news-hero.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "news-1.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    filename: "news-2.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    filename: "news-3.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    filename: "news-4.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "news-5.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "news-6.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    filename: "news-7.jpg",
    width: 800,
    height: 600,
  },

  // Contact page images
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "contact-hero.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    filename: "contact-map.jpg",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    filename: "contact-office.jpg",
    width: 800,
    height: 600,
  },

  // About page footer image
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "about-cta.jpg",
    width: 1920,
    height: 1080,
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Failed to download ${url}: ${response.statusCode}`)
          );
          return;
        }

        const chunks = [];
        response.on("data", (chunk) => chunks.push(chunk));
        response.on("end", () => {
          const buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
      })
      .on("error", reject);
  });
};

const optimizeImage = async (buffer, filename, width, height) => {
  const outputPath = path.join("public", "images", filename);
  await sharp(buffer)
    .resize(width, height, {
      fit: "cover",
      position: "center",
    })
    .jpeg({ quality: 80 })
    .toFile(outputPath);
  console.log(`Optimized ${filename}`);
};

const main = async () => {
  // Create images directory if it doesn't exist
  const imagesDir = path.join("public", "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Download and optimize each image
  for (const image of images) {
    try {
      console.log(`Downloading ${image.filename}...`);
      const buffer = await downloadImage(image.url, image.filename);
      await optimizeImage(buffer, image.filename, image.width, image.height);
    } catch (error) {
      console.error(`Error processing ${image.filename}:`, error);
    }
  }
};

main().catch(console.error);
