const sequelize = require("../config/db");
const Article = require("../models/articleModel");

const seedArticles = async () => {
    try {
        await sequelize.sync({force: true});

        const articles = [
            {
                title: "The Edelman Trust Barometer 2025: A Deep Dive",
                author: "Richard Edelman",
                content: "The 2025 Edelman Trust Barometer reveals a sharp global decline in trust across institutions. This article explores the key insights, data trends, and what it means for brands and governments moving forward...",
                views: 1340,
                shares: 320,
                summary: null
            },
            {
                title: "How Edelman is Reinventing Public Relations in the Digital Age",
                author: "Jane Holloway",
                content: "As the largest independent PR firm, Edelman is leading the charge in integrating AI, digital storytelling, and influencer marketing. We examine the strategies that have set them apart from traditional PR agencies...",
                views: 950,
                shares: 200,
                summary: null
            },
            {
                title: "Edelman’s Climate Dilemma: Clients, Criticism, and COP30",
                author: "Michael Deans",
                content: "With mounting pressure from environmental groups, Edelman's ties to fossil fuel companies have come under scrutiny. This article unpacks the ethical considerations and the firm's future in climate advocacy...",
                views: 780,
                shares: 180,
                summary: null
            },
            {
                title: "Behind the Scenes at Edelman: Culture, Clients, and Crisis Comms",
                author: "Anna Lee",
                content: "What’s it like to work at Edelman? From global campaigns to managing Fortune 500 crises, this piece gives an insider view of the firm's internal culture and client relationships...",
                views: 1100,
                shares: 250,
                summary: null
            }, {
                title: "Building Trust in the Age of AI: Edelman’s Strategic Playbook",
                author: "Daniel Moore",
                content: "In an era where misinformation spreads rapidly, Edelman is helping brands navigate trust and authenticity. This article covers their approach to AI governance, digital ethics, and brand accountability...",
                views: 890,
                shares: 195,
                summary: null
            }, {
                title: "From Family Firm to Global Powerhouse: The Edelman Legacy",
                author: "Sarah Kim",
                content: "Founded in 1952, Edelman remains family-owned and operated. We trace its journey from a small Chicago office to a global force shaping public perception for top brands worldwide...",
                views: 720,
                shares: 170,
                summary: null
            }, {
                title: "How Edelman Uses Data to Drive Campaign Success",
                author: "James Lin",
                content: "Data and analytics are at the heart of Edelman’s modern PR strategies. Learn how they combine data science with storytelling to deliver measurable impact...",
                views: 610,
                shares: 130,
                summary: null
            }, {
                title: "Meet the Minds Behind Edelman's Global Strategy",
                author: "Olivia Nash",
                content: "This profile spotlights the senior leadership at Edelman, highlighting their backgrounds, specialties, and the vision guiding the firm into the future...",
                views: 990,
                shares: 215,
                summary: null
            }, {
                title: "Edelman's Role in Navigating Brand Crises",
                author: "Thomas Reeves",
                content: "When a brand hits a PR crisis, Edelman steps in with structured response frameworks and experienced consultants. We examine recent high-profile case studies...",
                views: 820,
                shares: 185,
                summary: null
            }, {
                title: "The Evolution of Public Relations: Edelman's Perspective",
                author: "Carla Rodriguez",
                content: "Over seven decades, Edelman has witnessed and influenced major shifts in PR. This article reflects on those changes and where the industry is headed...",
                views: 875,
                shares: 210,
                summary: null
            }, {
                title: "Edelman's AI Lab: Ethics and Innovation in Comms",
                author: "Victor Shah",
                content: "Edelman’s AI Lab is exploring how artificial intelligence can be used responsibly in communications. Discover the pilot projects and policy principles in place...",
                views: 745,
                shares: 160,
                summary: null
            }, {
                title: "The Rise of Purpose-Driven Branding with Edelman",
                author: "Natalie Green",
                content: "Purpose is more than a buzzword at Edelman — it’s core to their client campaigns. Explore how brands are aligning with social causes authentically...",
                views: 680,
                shares: 145,
                summary: null
            }, {
                title: "Edelman and the Changing Landscape of Influencer Marketing",
                author: "Leo Brooks",
                content: "Edelman’s approach to influencer marketing is grounded in credibility and engagement. Here's how they’re helping brands build long-term trust via creators...",
                views: 930,
                shares: 230,
                summary: null
            }, {
                title: "Local Voices, Global Impact: Edelman’s Regional Offices",
                author: "Priya Desai",
                content: "From São Paulo to Singapore, Edelman’s regional teams bring local insight to global campaigns. We highlight a few recent success stories...",
                views: 560,
                shares: 120,
                summary: null
            }, {
                title: "How Edelman Trains the Next Generation of Communicators",
                author: "Liam Carter",
                content: "Edelman’s internship and leadership programs are building future PR leaders. Learn about their immersive training methods and mentorship culture...",
                views: 720,
                shares: 150,
                summary: null
            }, {
                title: "The Future of Artificial Intelligence in PR",
                author: "Victor Shah",
                content: "Victor Shah discusses the transformative potential of artificial intelligence in public relations and how it’s shaping modern campaigns.",
                views: 890,
                shares: 140,
                summary: null
            }, {
                title: "The Ethics of AI in PR: A Discussion with Victor Shah",
                author: "Victor Shah",
                content: "Victor Shah dives deep into the ethical implications of AI-driven communication strategies in PR and branding.",
                views: 760,
                shares: 190,
                summary: null
            }, {
                title: "Victor's Guide to Building Digital Trust",
                author: "Victor Shah",
                content: "Victor Shah outlines strategies for brands to build digital trust in a world dominated by misinformation.",
                views: 810,
                shares: 220,
                summary: null
            }, {
                title: "The Evolution of PR Technology: Insights from Victor Shah",
                author: "Victor Shah",
                content: "Victor Shah examines how technology has changed the PR landscape and what the future holds.",
                views: 940,
                shares: 230,
                summary: null
            }, {
                title: "PR in 2030: Victor Shah Predicts the Future",
                author: "Victor Shah",
                content: "Victor Shah shares his predictions for the PR industry in the next decade, highlighting key trends and challenges.",
                views: 1020,
                shares: 250,
                summary: null
            }, {
                title: "Global Campaigns in a Digital World",
                author: "Emma Watson",
                content: "Emma Watson explores how brands are leveraging digital tools to execute global campaigns with local relevance.",
                views: 790,
                shares: 180,
                summary: null
            }, {
                title: "Influencer Marketing Beyond 2025",
                author: "Leo Brooks",
                content: "Leo Brooks evaluates the evolving role of influencer marketing and its impact on brand trust.",
                views: 1050,
                shares: 300,
                summary: null
            }, {
                title: "Ethics in PR: A Global Perspective",
                author: "Carla Rodriguez",
                content: "Carla Rodriguez discusses the importance of ethics in PR and how global brands are addressing these challenges.",
                views: 600,
                shares: 120,
                summary: null
            }, {
                title: "Evolving PR Strategies in the Age of Social Media",
                author: "Sarah Kim",
                content: "Sarah Kim analyzes how social media has transformed public relations strategies for modern brands.",
                views: 950,
                shares: 210,
                summary: null
            }, {
                title: "Crisis Management for Modern Brands",
                author: "Thomas Reeves",
                content: "Thomas Reeves highlights effective crisis management strategies for brands navigating challenges in a connected world.",
                views: 700,
                shares: 150,
                summary: null
            }, {
                title: "Edelman's Role in Combating Fake News",
                author: "Olivia Nash",
                content: "Olivia Nash explores Edelman’s initiatives to combat fake news and support credible journalism.",
                views: 850,
                shares: 200,
                summary: null
            }, {
                title: "The Intersection of AI and PR",
                author: "James Lin",
                content: "James Lin discusses how artificial intelligence is revolutionizing public relations and the challenges it presents.",
                views: 720,
                shares: 180,
                summary: null
            }, {
                title: "Public Relations in Emerging Markets",
                author: "Priya Desai",
                content: "Priya Desai examines how public relations strategies are evolving in fast-growing emerging markets.",
                views: 640,
                shares: 150,
                summary: null
            }, {
                title: "Brand Accountability in the Digital Age",
                author: "Daniel Moore",
                content: "Daniel Moore explores how brands are embracing accountability to build trust with digital audiences.",
                views: 800,
                shares: 190,
                summary: null
            }, {
                title: "The Power of Visual Storytelling in PR",
                author: "Anna Lee",
                content: "Anna Lee shares insights on how visual storytelling is transforming how brands communicate with their audiences.",
                views: 740,
                shares: 175,
                summary: null
            }, {
                title: "The Edelman Trust Barometer 2025: A Deep Dive",
                author: "Richard Edelman",
                content: "The 2025 Edelman Trust Barometer reveals a sharp global decline in trust across institutions. This article explores the key insights, data trends, and what it means for brands and governments moving forward...",
                views: 1340,
                shares: 320,
                summary: null
            }, {
                title: "How Edelman is Reinventing Public Relations in the Digital Age",
                author: "Jane Holloway",
                content: "As the largest independent PR firm, Edelman is leading the charge in integrating AI, digital storytelling, and influencer marketing. We examine the strategies that have set them apart from traditional PR agencies...",
                views: 950,
                shares: 200,
                summary: null
            }, {
                title: "Edelman’s Climate Dilemma: Clients, Criticism, and COP30",
                author: "Michael Deans",
                content: "With mounting pressure from environmental groups, Edelman's ties to fossil fuel companies have come under scrutiny. This article unpacks the ethical considerations and the firm's future in climate advocacy...",
                views: 780,
                shares: 180,
                summary: null
            }, {
                title: "Behind the Scenes at Edelman: Culture, Clients, and Crisis Comms",
                author: "Anna Lee",
                content: "What’s it like to work at Edelman? From global campaigns to managing Fortune 500 crises, this piece gives an insider view of the firm's internal culture and client relationships...",
                views: 1100,
                shares: 250,
                summary: null
            }, {
                title: "Building Trust in the Age of AI: Edelman’s Strategic Playbook",
                author: "Daniel Moore",
                content: "In an era where misinformation spreads rapidly, Edelman is helping brands navigate trust and authenticity. This article covers their approach to AI governance, digital ethics, and brand accountability...",
                views: 890,
                shares: 195,
                summary: null
            }, {
                title: "From Family Firm to Global Powerhouse: The Edelman Legacy",
                author: "Sarah Kim",
                content: "Founded in 1952, Edelman remains family-owned and operated. We trace its journey from a small Chicago office to a global force shaping public perception for top brands worldwide...",
                views: 720,
                shares: 170,
                summary: null
            }, {
                title: "How Edelman Uses Data to Drive Campaign Success",
                author: "James Lin",
                content: "Data and analytics are at the heart of Edelman’s modern PR strategies. Learn how they combine data science with storytelling to deliver measurable impact...",
                views: 610,
                shares: 130,
                summary: null
            }, {
                title: "Meet the Minds Behind Edelman's Global Strategy",
                author: "Olivia Nash",
                content: "This profile spotlights the senior leadership at Edelman, highlighting their backgrounds, specialties, and the vision guiding the firm into the future...",
                views: 990,
                shares: 215,
                summary: null
            }, {
                title: "Edelman's Role in Navigating Brand Crises",
                author: "Thomas Reeves",
                content: "When a brand hits a PR crisis, Edelman steps in with structured response frameworks and experienced consultants. We examine recent high-profile case studies...",
                views: 820,
                shares: 185,
                summary: null
            }, {
                title: "The Evolution of Public Relations: Edelman's Perspective",
                author: "Carla Rodriguez",
                content: "Over seven decades, Edelman has witnessed and influenced major shifts in PR. This article reflects on those changes and where the industry is headed...",
                views: 875,
                shares: 210,
                summary: null
            }, {
                title: "Edelman's AI Lab: Ethics and Innovation in Comms",
                author: "Victor Shah",
                content: "Edelman’s AI Lab is exploring how artificial intelligence can be used responsibly in communications. Discover the pilot projects and policy principles in place...",
                views: 745,
                shares: 160,
                summary: null
            }, {
                title: "The Rise of Purpose-Driven Branding with Edelman",
                author: "Natalie Green",
                content: "Purpose is more than a buzzword at Edelman — it’s core to their client campaigns. Explore how brands are aligning with social causes authentically...",
                views: 680,
                shares: 145,
                summary: null
            }, {
                title: "Edelman and the Changing Landscape of Influencer Marketing",
                author: "Leo Brooks",
                content: "Edelman’s approach to influencer marketing is grounded in credibility and engagement. Here's how they’re helping brands build long-term trust via creators...",
                views: 930,
                shares: 230,
                summary: null
            }, {
                title: "Local Voices, Global Impact: Edelman’s Regional Offices",
                author: "Priya Desai",
                content: "From São Paulo to Singapore, Edelman’s regional teams bring local insight to global campaigns. We highlight a few recent success stories...",
                views: 560,
                shares: 120,
                summary: null
            }, {
                title: "How Edelman Trains the Next Generation of Communicators",
                author: "Liam Carter",
                content: "Edelman’s internship and leadership programs are building future PR leaders. Learn about their immersive training methods and mentorship culture...",
                views: 720,
                shares: 150,
                summary: null
            }, {
                title: "The Future of Artificial Intelligence in PR",
                author: "Victor Shah",
                content: "Victor Shah discusses the transformative potential of artificial intelligence in public relations and how it’s shaping modern campaigns.",
                views: 890,
                shares: 140,
                summary: null
            }, {
                title: "The Ethics of AI in PR: A Discussion with Victor Shah",
                author: "Victor Shah",
                content: "Victor Shah dives deep into the ethical implications of AI-driven communication strategies in PR and branding.",
                views: 760,
                shares: 190,
                summary: null
            }, {
                title: "Victor's Guide to Building Digital Trust",
                author: "Victor Shah",
                content: "Victor Shah outlines strategies for brands to build digital trust in a world dominated by misinformation.",
                views: 810,
                shares: 220,
                summary: null
            }, {
                title: "The Evolution of PR Technology: Insights from Victor Shah",
                author: "Victor Shah",
                content: "Victor Shah examines how technology has changed the PR landscape and what the future holds.",
                views: 940,
                shares: 230,
                summary: null
            }, {
                title: "PR in 2030: Victor Shah Predicts the Future",
                author: "Victor Shah",
                content: "Victor Shah shares his predictions for the PR industry in the next decade, highlighting key trends and challenges.",
                views: 1020,
                shares: 250,
                summary: null
            }, {
                title: "Global Campaigns in a Digital World",
                author: "Emma Watson",
                content: "Emma Watson explores how brands are leveraging digital tools to execute global campaigns with local relevance.",
                views: 790,
                shares: 180,
                summary: null
            }, {
                title: "Influencer Marketing Beyond 2025",
                author: "Leo Brooks",
                content: "Leo Brooks evaluates the evolving role of influencer marketing and its impact on brand trust.",
                views: 1050,
                shares: 300,
                summary: null
            }, {
                title: "Ethics in PR: A Global Perspective",
                author: "Carla Rodriguez",
                content: "Carla Rodriguez discusses the importance of ethics in PR and how global brands are addressing these challenges.",
                views: 600,
                shares: 120,
                summary: null
            }, {
                title: "Evolving PR Strategies in the Age of Social Media",
                author: "Sarah Kim",
                content: "Sarah Kim analyzes how social media has transformed public relations strategies for modern brands.",
                views: 950,
                shares: 210,
                summary: null
            }, {
                title: "Crisis Management for Modern Brands",
                author: "Thomas Reeves",
                content: "Thomas Reeves highlights effective crisis management strategies for brands navigating challenges in a connected world.",
                views: 700,
                shares: 150,
                summary: null
            }, {
                title: "Edelman's Role in Combating Fake News",
                author: "Olivia Nash",
                content: "Olivia Nash explores Edelman’s initiatives to combat fake news and support credible journalism.",
                views: 850,
                shares: 200,
                summary: null
            }, {
                title: "The Intersection of AI and PR",
                author: "James Lin",
                content: "James Lin discusses how artificial intelligence is revolutionizing public relations and the challenges it presents.",
                views: 720,
                shares: 180,
                summary: null
            }, {
                title: "Public Relations in Emerging Markets",
                author: "Priya Desai",
                content: "Priya Desai examines how public relations strategies are evolving in fast-growing emerging markets.",
                views: 640,
                shares: 150,
                summary: null
            }, {
                title: "Brand Accountability in the Digital Age",
                author: "Daniel Moore",
                content: "Daniel Moore explores how brands are embracing accountability to build trust with digital audiences.",
                views: 800,
                shares: 190,
                summary: null
            }, {
                title: "The Power of Visual Storytelling in PR",
                author: "Anna Lee",
                content: "Anna Lee shares insights on how visual storytelling is transforming how brands communicate with their audiences.",
                views: 740,
                shares: 175,
                summary: null
            },
        ];

        await Article.bulkCreate(articles);
        console.log("Database has been seeded!");
    } catch (error) {
        console.error("Failed to seed the database:", error);
    } finally {
        process.exit();
    }
};

seedArticles();
