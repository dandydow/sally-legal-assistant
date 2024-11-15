### SONNY: Roadmap and AI Integration - Initial Document

**Main Objective**: Focus on creating the web application and integrating the AIs that are already set up on AWS, enabling the first tests and the release for interested lawyers.

#### 1. Project Overview

SONNY (Systematic Operational Network Navigating Your Needs) is the central foundation of a family of AI assistants, capable of orchestrating different specialized modules across various fields. The first module to be implemented is SALLY (Systematic AI Legal Liaison for You), a legal assistant dedicated to automating legal tasks and facilitating the work of law firms. Besides SALLY, future modules like BRIAN (Building and Researching Intelligent Architecture Network) for engineering and TINA (Technology Integrated Navigation for Assistance) for administrative support are already planned.

The current focus is to create a robust web application, connected to artificial intelligences that are already implemented on AWS infrastructure, to offer a smooth and efficient experience for lawyers. SONNY will be the solid foundation for all future modules, ensuring modularity and scalability from the outset.

**Key components to be integrated**:
- Rasa (Conversational AI)
- GPTNeo (Content Generation and Advanced Support)
- DataJud API (Legal Process Query)
- TJSP Scraping (Building our own API for integration with the São Paulo Court of Justice)

#### 2. Development Roadmap

**Phase 1: Planning and Environment Setup**
- **Objective**: Prepare the development environment and clearly define the responsibilities of each AI in the project.
- **Tasks**:
  - Set up AWS server to host the web application (using EC2, S3, etc).
  - Create the initial structure of the web application (React.js).
  - Configure access to APIs and TJSP scraping.

**Phase 2: Integration of Rasa and GPTNeo**
- **Objective**: Enable the artificial intelligences to work together seamlessly, creating a system capable of understanding natural language requests and generating automated responses.
- **Tasks**:
  - Integrate Rasa to interpret requests from lawyers and redirect to GPTNeo when necessary.
  - Set up communication flow between Rasa and GPTNeo using RESTful APIs to ensure scalability.
  - Implement the internal processing of conversations, ensuring that Rasa can orchestrate the use of GPTNeo when generating documents, predicting outcomes, or handling more complex queries.

**Phase 3: Development of DataJud API and TJSP Scraping**
- **Objective**: Ensure direct access to legal data to provide agile and accurate responses to lawyers.
- **Tasks**:
  - Integrate DataJud API into SONNY for legal process tracking.
  - Develop our own scraping tool to access information from the São Paulo Court of Justice, creating an internal API to make this data available to the SONNY system.
  - Ensure LGPD compliance, maintaining security and privacy of the obtained data.

**Phase 4: Front-End Development and Testing**
- **Objective**: Create an intuitive web interface for lawyers to easily interact with the system.
- **Tasks**:
  - Develop an interface similar to ChatGPT for initial lawyer consultation (search bar and action suggestions).
  - Develop a detailed dashboard for case control and tracking, including calendar, agenda, notifications of important movements, message sending via WhatsApp and email, and process tracking boards and deadlines.
  - Implement a secure login system, including options like login with Gmail and Facebook.
  - Conduct internal MVP tests to ensure that the flow between AIs and generated responses are correct.

**Phase 5: Launch and Validation**
- **Objective**: Launch the MVP to selected lawyers and validate the platform with real feedback.
- **Tasks**:
  - Open the MVP for partner law firms to perform tests and provide feedback.
  - Fix identified issues and adjust functionalities.
  - Start looking for new partners and investors to expand the project.

#### 3. Current Documentation and Code

- **Rasa Status**: Configured to understand basic commands related to the legal environment. Needs front-end integration and additional training with real case data.
- **GPTNeo Status**: Configured and hosted on AWS, capable of generating texts and answering complex queries. Direct integration with Rasa is still in progress.
- **DataJud API**: Tested for basic queries, being adjusted to ensure greater compatibility and integration with the platform.
- **TJSP Scraping**: Initially planned, needs to be developed in parallel with the dashboard creation.

#### 4. Component Integration and Workflow

- Rasa will act as the initial understanding layer, interpreting lawyers' intentions and directing them to the correct module.
- GPTNeo will step in when there is a need for elaborate responses or document generation, ensuring that the lawyer receives complete and personalized assistance.
- The DataJud API and TJSP scraping will be essential data sources to ensure that legal information is always accurate and up-to-date.
- The front-end will be developed to create a smooth transition between the initial chatbot and the complete dashboard, ensuring an intuitive and simplified experience for professionals using the platform.

#### 5. Future Technologies and Expansion

The SONNY project is ambitious and not limited to the legal sector. Although the initial focus is the creation and launch of the SALLY module, we are already planning to expand to other areas with modules like BRIAN (Building and Researching Intelligent Architecture Network) for engineering, TINA (Technology Integrated Navigation for Assistance) for administrative support, and HOPE (Healthcare Operational Platform for Efficiency) for health. Each of these modules will be fully integrated into SONNY, enabling a modular and scalable ecosystem, with different specializations working in a coordinated manner.

Additionally, we are considering implementing disruptive technologies such as Holochain for data decentralization, OpenMined for federated learning and additional user privacy security, as well as Ray RLlib for reinforcement learning enhancement, especially in future modules like G.A.M.E. (Gamified Artificial Master Engine).

#### 6. Next Steps

- Finalize the initial integration between Rasa and GPTNeo.
- Develop TJSP scraping and improve integration with DataJud.
- Create the initial front-end and define the interaction flows of lawyers with the system.
- Test the platform with partner lawyers and adjust the system based on feedback.

If there's anything else, we can adjust the roadmap as needed! What do you think of this initial organization to share with the developer Zarhub?
