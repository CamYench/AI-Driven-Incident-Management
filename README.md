# AI-Driven Incident Management System

<img width="500" alt="Screenshot 2025-06-13 at 3 50 06 PM" src="https://github.com/user-attachments/assets/000312e9-5881-4089-911d-87bd60dbd9ad" />


A comprehensive work sample demonstrating the design and implementation of an AI-assisted incident response system. This project includes a Product Requirements Document (PRD), Design Document, and Front-End prototype for an automated incident management workflow.

## Overview

This project presents a complete solution for automating customer-facing incident communications using Large Language Models (LLMs). The system aims to:

- Reduce manual effort and response time during incidents
- Ensure consistent, on-brand, and compliant messaging
- Improve clarity around customer impact while minimizing internal noise
- Integrate seamlessly into existing incident response workflows

## Project Components

### 1. Product Requirements Document (PRD)
Located in `Final PRD.md`, this document outlines:
- Detailed user stories for all stakeholders
- Functional requirements (P0, P1, P2 priorities)
- Non-functional requirements
- Success criteria and metrics
- Integration specifications

### 2. Design Document
Located in `Design Document.md`, this document details:
- Complete UI/UX design specifications
- Style guide and component library
- Wireframes for key screens
- AI-native workflow considerations
- Implementation guidelines

### 3. Front-End Prototype
The prototype implements the design specifications using:
- Next.js for the frontend framework
- Tailwind CSS for styling
- Modern UI components and layouts
- Responsive design principles

## Key Features

- **Automated Message Generation**: AI-powered drafting of incident communications
- **Real-time Dashboard**: Overview of active incidents and key metrics
- **Message Review Interface**: Tools for reviewing and editing AI-generated messages
- **Inquiry Management**: Centralized system for handling customer inquiries
- **Integration Capabilities**: Designed to work with existing incident management tools

## Technical Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Design**: Figma-based prototype
- **AI Integration**: LLM ensemble via Model Context Protocol (MCP)
- **Styling**: Custom design system based on Abnormal Security's brand guidelines

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
├── app/                 # Next.js application code
├── components/         # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and shared code
├── public/            # Static assets
├── styles/            # Global styles and Tailwind configuration
├── Design Document.md # Complete design specifications
└── Final PRD.md      # Product requirements documentation
```

## Design Principles

The system follows these key design principles:
- Brand consistency with Abnormal Security's aesthetic
- Usability-first approach with minimal cognitive load
- AI-native workflow integration
- Color psychology for effective communication
- Accessibility and responsive design

## Success Metrics

The system aims to achieve:
- 95% reduction in time from incident detection to communication
- 90% consistency in message tone and structure
- 95% accuracy in incident detail communication
- 4.5/5 satisfaction score from internal users
- 99% adoption rate within the first quarter

## License

This project is licensed under the terms included in the LICENSE file.

## Author

Cameron Yenche 
