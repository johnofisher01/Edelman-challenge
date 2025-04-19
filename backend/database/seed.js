const sequelize = require("../config/db");
const Article = require("../models/articleModel");

const seedArticles = async () => {
  try {
    await sequelize.sync({ force: true });

    const articles = [
      {
        title: "The Edelman Trust Barometer 2025: A Deep Dive",
        author: "Richard Edelman",
        content:
          "The 2025 Edelman Trust Barometer reveals a sharp global decline in trust across institutions. This article explores the key insights, data trends, and what it means for brands and governments moving forward...",
        views: 1340,
        shares: 320,
        summary: null,
      },
      {
        title: "How Edelman is Reinventing Public Relations in the Digital Age",
        author: "Jane Holloway",
        content:
          "As the largest independent PR firm, Edelman is leading the charge in integrating AI, digital storytelling, and influencer marketing. We examine the strategies that have set them apart from traditional PR agencies...",
        views: 950,
        shares: 200,
        summary: null,
      },
      {
        title: "Edelman’s Climate Dilemma: Clients, Criticism, and COP30",
        author: "Michael Deans",
        content:
          "With mounting pressure from environmental groups, Edelman's ties to fossil fuel companies have come under scrutiny. This article unpacks the ethical considerations and the firm's future in climate advocacy...",
        views: 780,
        shares: 180,
        summary: null,
      },
      {
        title: "Behind the Scenes at Edelman: Culture, Clients, and Crisis Comms",
        author: "Anna Lee",
        content:
          "What’s it like to work at Edelman? From global campaigns to managing Fortune 500 crises, this piece gives an insider view of the firm's internal culture and client relationships...",
        views: 1100,
        shares: 250,
        summary: null,
      },
      {
        title: "Building Trust in the Age of AI: Edelman’s Strategic Playbook",
        author: "Daniel Moore",
        content:
          "In an era where misinformation spreads rapidly, Edelman is helping brands navigate trust and authenticity. This article covers their approach to AI governance, digital ethics, and brand accountability...",
        views: 890,
        shares: 195,
        summary: null,
      },
      {
        title: "From Family Firm to Global Powerhouse: The Edelman Legacy",
        author: "Sarah Kim",
        content:
          "Founded in 1952, Edelman remains family-owned and operated. We trace its journey from a small Chicago office to a global force shaping public perception for top brands worldwide...",
        views: 720,
        shares: 170,
        summary: null,
      },
      {
        title: "How Edelman Uses Data to Drive Campaign Success",
        author: "James Lin",
        content:
          "Data and analytics are at the heart of Edelman’s modern PR strategies. Learn how they combine data science with storytelling to deliver measurable impact...",
        views: 610,
        shares: 130,
        summary: null,
      },
      {
        title: "Meet the Minds Behind Edelman's Global Strategy",
        author: "Olivia Nash",
        content:
          "This profile spotlights the senior leadership at Edelman, highlighting their backgrounds, specialties, and the vision guiding the firm into the future...",
        views: 990,
        shares: 215,
        summary: null,
      },
      {
        title: "Edelman's Role in Navigating Brand Crises",
        author: "Thomas Reeves",
        content:
          "When a brand hits a PR crisis, Edelman steps in with structured response frameworks and experienced consultants. We examine recent high-profile case studies...",
        views: 820,
        shares: 185,
        summary: null,
      },
      {
        title: "The Evolution of Public Relations: Edelman's Perspective",
        author: "Carla Rodriguez",
        content:
          "Over seven decades, Edelman has witnessed and influenced major shifts in PR. This article reflects on those changes and where the industry is headed...",
        views: 875,
        shares: 210,
        summary: null,
      },
      {
        title: "Edelman's AI Lab: Ethics and Innovation in Comms",
        author: "Victor Shah",
        content:
          "Edelman’s AI Lab is exploring how artificial intelligence can be used responsibly in communications. Discover the pilot projects and policy principles in place...",
        views: 745,
        shares: 160,
        summary: null,
      },
      {
        title: "The Rise of Purpose-Driven Branding with Edelman",
        author: "Natalie Green",
        content:
          "Purpose is more than a buzzword at Edelman — it’s core to their client campaigns. Explore how brands are aligning with social causes authentically...",
        views: 680,
        shares: 145,
        summary: null,
      },
      {
        title: "Edelman and the Changing Landscape of Influencer Marketing",
        author: "Leo Brooks",
        content:
          "Edelman’s approach to influencer marketing is grounded in credibility and engagement. Here's how they’re helping brands build long-term trust via creators...",
        views: 930,
        shares: 230,
        summary: null,
      },
      {
        title: "Local Voices, Global Impact: Edelman’s Regional Offices",
        author: "Priya Desai",
        content:
          "From São Paulo to Singapore, Edelman’s regional teams bring local insight to global campaigns. We highlight a few recent success stories...",
        views: 560,
        shares: 120,
        summary: null,
      },
      {
        title: "How Edelman Trains the Next Generation of Communicators",
        author: "Liam Carter",
        content:
          "Edelman’s internship and leadership programs are building future PR leaders. Learn about their immersive training methods and mentorship culture...",
        views: 720,
        shares: 150,
        summary: null,
      },
    ];

    // Insert data into the database
    await Article.bulkCreate(articles);
    console.log("Database has been seeded!");
  } catch (error) {
    console.error("Failed to seed the database:", error);
  } finally {
    process.exit();
  }
};

seedArticles();