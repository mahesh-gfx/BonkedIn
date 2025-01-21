# HireWorthy, formerly Bonkedin: A satirical alternative to LinkedIn (now getting serious)
Welcome to BonkedIn, the app that turns the world of professional networking on its head!

![bonkedIn](https://github.com/user-attachments/assets/4c369214-f6f8-4aa2-ae1f-ab00276a0dbd)


# Why BonkedIn?
LinkedIn, once a bastion of professional networking, has become a circus of clowns vying for attention through dubious means. The platform is now drowning in a sea of fake engagement, sloppy AI-generated content, and influencers who weaponize emotional manipulation for likes and views. They seem to have lost sight of LinkedIn's professional purpose.

These content creators craft deliberately vague, single-paragraph narratives designed to trigger engagement—dramatic personal "revelations" that are often fabricated, ending with desperate calls like "Agree?" or "Thoughts?" The result is a professional network that rewards performative storytelling over substantive expertise, turning what should be a serious career development tool into a content farm that prioritizes viral potential over meaningful professional connection.

In a world saturated with overly serious, self-aggrandizing professional networks, BonkedIn offers a refreshing and humorous(very professional, very nice!) alternative.

![image](https://github.com/user-attachments/assets/bafdf0fd-6b74-4737-9e60-3f7341890a17)

## Directory Structure
~~~~
bonkedIn/
├── backend/
│   ├── api-gateway/
│   ├── config-server/
│   ├── eureka-server/
│   ├── services/
│   │   ├── user-service/
│   │   ├── post-service/
│   │   ├── connection-service/
│   │   ├── messaging-service/
│   │   ├── job-service/
│   │   ├── notification-service/
│   │   ├── analytics-service/
│   │   ├── recommendation-service/
│   │   ├── video-service/
│   │   ├── blockchain-service/
│   │   └── content-moderation-service/
│   ├── common/
│   │   ├── models/
│   │   └── utils/
│   ├── data/
│   │   ├── elasticsearch/
│   │   ├── kafka/
│   │   └── redis/
│   └── docker-compose.yml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── redux/
│   │   ├── i18n/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── mobile/
│   ├── android/
│   ├── ios/
│   └── src/
├── infrastructure/
│   ├── terraform/
│   ├── kubernetes/
│   └── ci-cd/
├── docs/
│   ├── api/
│   ├── architecture/
│   └── user-guides/
├── scripts/
├── .gitignore
├── README.md
└── LICENSE
~~~~

Key points about this structure:
1. The backend directory now includes:
	+ Separate directories for each microservice under services/
api-gateway, config-server, and eureka-server for the supporting infrastructure
	+ A common directory for shared models and utilities
	+ A data directory for data-related configurations (Elasticsearch, Kafka, Redis)
	+ A docker-compose.yml file for local development setup
2. The frontend directory remains similar but includes additional directories for Redux and internationalization (i18n).
3. A new mobile directory for React Native mobile app development.
4. An infrastructure directory containing:
	+ Terraform scripts for infrastructure as code
	+ Kubernetes configurations for container orchestration
	+ CI/CD pipeline configurations
5. A docs directory for API documentation, architecture diagrams, and user guides.
6. A scripts directory for utility scripts, database migrations, etc.





