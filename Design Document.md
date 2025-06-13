# Design Document: AI-Assisted Incident Response System Figma Prototype

## 1. Overview

This design document outlines the Figma prototype for the AI-Assisted Incident Response System, aligning with Abnormal Security’s design language and the PRD (Version 1.3). The prototype focuses on three key screens: **Dashboard**, **Incident Details with Message Review and Editing**, and **Inquiry Management**, designed for Incident Responders, Customer Support, and Engineers. The design incorporates color theory, usability best practices, and AI-native workflow principles to ensure an intuitive, efficient interface.

## 2. Design Principles

The prototype adheres to the following principles:

- **Brand Consistency**: Mirrors Abnormal Security’s dark, professional aesthetic with teal accents, as seen in their website ([Abnormal Security](https://abnormalsecurity.com/)).
- **Usability**: Prioritizes clarity, minimal cognitive load, and quick access to actions, per [Nielsen Norman Group’s usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).
- **AI-Native Workflow**: Integrates LLM-driven automation (e.g., message generation, triage) with visual cues, following [Google’s People + AI Guidebook](https://pair.withgoogle.com/guidebook/).
- **Color Psychology**: Uses teal (#00C4B4) for trust and focus, dark gray (#1E2526) for professionalism, and white (#FFFFFF) for readability, per [Color Psychology in UX](https://www.uxdesigninstitute.com/blog/colour-theory-ux/).

## 3. Style Guide

The style guide ensures consistency across the prototype, reflecting Abnormal Security’s aesthetic.

### 3.1 Color Palette

|**Color**|**Hex Code**|**Purpose**|
|---|---|---|
|Primary Background|#1E2526|Main background, conveys professionalism|
|Secondary Background|#2C3539|Cards and panels, subtle contrast|
|Accent (Teal)|#00C4B4|CTAs, highlights, evokes trust|
|Text Primary|#FFFFFF|Main text, high readability|
|Text Secondary|#CCCCCC|Subtle text, secondary information|
|Error|#FF6B6B|Alerts, errors, draws attention|
|Success|#4CAF50|Success indicators, positive feedback|

### 3.2 Typography

- **Font Family**: Inter (sans-serif, modern, available in Figma).
- **Styles**:
    - H1: 32px, bold, uppercase for main headings.
    - H2: 24px, bold, uppercase for section titles.
    - H3: 18px, bold, sentence case for sub-sections.
    - Body: 16px, regular, sentence case for content.
    - Small: 14px, regular, for secondary text.

### 3.3 UI Components

- **Buttons**:
    - Primary: #00C4B4 background, #FFFFFF text, 4px border-radius, 10px x 20px padding.
    - Secondary: #2C3539 background, #FFFFFF text, 4px border-radius, 10px x 20px padding.
- **Cards**:
    - Background: #2C3539, 8px border-radius, box-shadow: 0 4px 6px rgba(0,0,0,0.1).
- **Tables**:
    - Header: #00C4B4 background, #FFFFFF text.
    - Rows: Alternating #1E2526 and #2C3539, #FFFFFF text.
- **Forms**:
    - White background (#FFFFFF), subtle shadow, clear labels with asterisks for required fields.
- **Icons**:
    - Teal (#00C4B4), hexagonal shapes for consistency with website icons.

## 4. Wireframes

The prototype includes three screens, designed for desktop (1440x900px) to prioritize functionality for internal users. Each wireframe is described in text, with layout and component details.

### 4.1 Dashboard

**Purpose**: Provides Incident Responders and Customer Support with an overview of active incidents and key metrics, supporting real-time coordination (PRD 3.7).

**Layout**:

```
[Header: 1440x80px, #000000]
[Logo: Left, White "Abnormal Security"] [Nav: Dashboard | Incidents | Inquiries | Reports, #FFFFFF, Hover #00C4B4] [User Profile: Right, Dropdown] [Logout]

[Summary Cards: 100px below header, 4 cards in row, each 300x150px, #2C3539, 8px radius, shadow]
[Active Incidents: "5", #00C4B4] [High-Severity: "1", #00C4B4] [Avg Response Time: "15m", #00C4B4] [Customer Satisfaction: "4.5/5", #00C4B4]

[Incidents Table: Below cards, 1200x400px, #2C3539]
| ID | Severity | Status | Affected Services | Last Updated | Actions |
|----|----------|--------|-------------------|--------------|---------|
| 123| High (Red Badge) | In Progress | Email Filtering | 10:00 AM | [View, Teal Button] |
| 124| Medium (Yellow Badge) | Open | Login Page | 09:45 AM | [View, Teal Button] |
[Search Bar: Above table, #FFFFFF input] [Filters: Severity, Status, Dropdowns]
[Refresh Button: Bottom right, #00C4B4]
```

**Design Notes**:

- Teal badges for severity (red for high, yellow for medium, green for low) draw attention and align with color psychology for urgency.
- Cards use shadows for depth, reducing visual clutter.
- Table is sortable/filterable, with teal “View” buttons for clear CTAs.

### 4.2 Incident Details with Message Review and Editing

**Purpose**: Enables Incident Responders and Customer Support to view incident details, review/edit AI-generated messages, and take actions (PRD 3.2, 3.5, 3.6, 3.11).

**Layout**:

```
[Header: Same as Dashboard]

[Incident Summary: 100px below header, 1200x150px card, #2C3539]
ID: 123 | Severity: High (Red Badge) | Status: In Progress | Affected Services: Email Filtering | Created: 09:00 AM | Last Updated: 10:00 AM

[Generated Message: Below summary, 1200x200px card, #2C3539]
Title: "AI-Generated Message" [AI Badge: Teal Robot Icon]
Text: "Dear Customers, We’re experiencing a temporary issue with our email filtering feature..." [Read-only]
[Edit: Teal Button] [Approve: Teal Button] [Regenerate: Gray Button] [Feedback: Thumbs Up/Down, #00C4B4]

[Logs: Below message, 1200x200px card, #2C3539]
- 09:05 AM: Incident detected
- 09:10 AM: Engineer assigned
- 09:30 AM: Update: Investigating root cause [Engineer Update]
[Add Update: Teal Button, for Engineers]

[Customer Inquiries: Below logs, 1200x100px card, #2C3539]
- Inquiry #456: "Is this affecting all users?" [View, Teal Button]

[Actions: Bottom, 1200x50px]
[Escalate: Teal Button] [Close Incident: Gray Button]
```

**Design Notes**:

- AI badge (teal robot icon) indicates LLM-generated content, reinforcing the AI-native workflow.
- Teal buttons for primary actions (Edit, Approve) ensure focus, while gray buttons (Regenerate, Close) are secondary.
- Feedback icons provide quick input for model improvement, aligning with PRD 3.6.
- Engineer updates are accessible for Customer Support, supporting PRD 3.11 (Shared Update Log).

### 4.3 Inquiry Management

**Purpose**: Allows Customer Support to view and respond to customer inquiries related to incidents (PRD 3.8).

**Layout**:

```
[Header: Same as Dashboard]

[Inquiries Table: 100px below header, 1200x400px, #2C3539]
| ID | Customer | Incident | Status | Last Updated | Actions |
|----|----------|----------|--------|--------------|---------|
| 456| John Doe | 123 | Open | 10:15 AM | [View, Teal Button] |
| 457| Jane Smith | 124 | Responded | 10:20 AM | [View, Teal Button] |
[Search Bar: Above table, #FFFFFF input] [Filters: Status, Incident ID, Dropdowns]

[Inquiry Details Modal: Overlay, 800x600px, #2C3539]
Customer: John Doe
Incident: 123 - Email Filtering Outage
Message: "Is this affecting all users?"
Response: [Text Area, #FFFFFF, Rich Text]
[Send Response: Teal Button] [Close: Gray Button]
```

**Design Notes**:

- Modal for inquiry details keeps the interface clean and focused.
- Teal “Send Response” button emphasizes action, aligning with color psychology for trust.
- Search and filters enhance usability for Customer Support handling multiple inquiries.

## 5. Usability and AI-Native Considerations

- **Usability Best Practices**:
    - **Clear Feedback**: Success (green #4CAF50) and error (red #FF6B6B) indicators for actions like approving messages or sending responses.
    - **Minimalism**: Ample white space and card-based layout reduce cognitive load.
    - **Accessibility**: High contrast ratios (e.g., white text on dark backgrounds) and clear labels ensure readability.
- **AI-Native Workflow**:
    - Visual cues (e.g., AI badge, “Regenerate” button) highlight LLM-driven automation for message generation and triage.
    - Feedback mechanisms (thumbs up/down) support continuous model improvement, per PRD 3.6.
    - The Shared Update Log (PRD 3.11) is represented as a simple input field for Engineers, accessible to Customer Support.

## 6. Figma Prototype Creation Steps

To create the prototype in Figma:

1. **Set Up Figma File**:
    - Create a new project with 1440x900px frames for desktop.
    - Define color styles (e.g., #1E2526, #00C4B4) and text styles (H1, H2, Body).
    - Create components for buttons, cards, tables, and headers.
2. **Design Header**:
    - Use a component with logo, navigation links, user profile, and logout.
    - Apply across all screens for consistency.
3. **Design Dashboard**:
    - Create four summary cards with placeholder data.
    - Use Figma’s table plugin or manual rectangles for the incidents table.
    - Add search bar, filters, and refresh button.
4. **Design Incident Details**:
    - Create cards for summary, message, logs, and inquiries.
    - Use a text area for the message, with buttons and feedback icons.
    - Include an “Add Update” field for engineers.
5. **Design Inquiry Management**:
    - Create a table similar to the dashboard.
    - Design a modal for inquiry details with a response text area.
6. **Add Interactivity**:
    - Link “View” buttons in the dashboard to the Incident Details screen.
    - Link “Edit” to a text-editable state of the message.
    - Link “View” in inquiries to the modal.
    - Use Figma’s prototyping to simulate navigation.
7. **Polish**:
    - Ensure consistent spacing, alignment, and typography.
    - Use placeholder data (e.g., incident IDs, messages) to simulate real use.
    - Share the Figma link with view-only access for Abnormal Security.

## 7. Implementation Notes

- **Time-Saving Tips**: Use Figma’s auto-layout for cards and tables to speed up design. Reuse components for buttons and headers.
- **AI Integration**: The prototype assumes an LLM ensemble via MCP for automation (e.g., message generation, triage), indicated by visual cues like AI badges.
- **Responsive Design**: Focus on desktop for the prototype, as it’s the primary use case for internal tools, but ensure layouts are flexible for future mobile support.