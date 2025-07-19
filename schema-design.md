# Database Schema Design

## Core Entities

### Gyms
- id (Primary Key)
- name (e.g., "原岩攀岩館 - 萬華店")
- address
- city (default: "台北")
- created_at, updated_at

### Sections
- id (Primary Key)
- gym_id (Foreign Key to Gyms)
- name (e.g., "A區", "B區", "C區")
- description
- created_at, updated_at

### Routes
- id (Primary Key)
- section_id (Foreign Key to Sections)
- grade (e.g., "V4", "5.10a")
- color (route tape color)
- setter_name
- set_date
- status (active/retired)
- created_at, updated_at

### Beta Videos
- id (Primary Key)
- route_id (Foreign Key to Routes)
- instagram_url
- instagram_user
- video_url
- description
- post_date
- verified (boolean)
- created_at, updated_at

### Users (Optional for user management)
- id (Primary Key)
- username
- email
- role (admin/moderator/user)
- created_at, updated_at

## Relationships
- Gym -> Sections (1:many)
- Section -> Routes (1:many)
- Route -> Beta Videos (1:many)