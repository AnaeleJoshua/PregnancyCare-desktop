# PregnancyCare-desktop
# ![Project Screenshot](11.09.2025_17.42.49_REC.png)

PregnancyCare-desktop is an Electron-based desktop application for managing patient records, diagnoses, reports, and ultrasounds in a pregnancy care setting. It features a modular structure, modern UI with Bootstrap and custom CSS, and supports CRUD operations for patients and medical data.

## Features
- Patient management: create, update, delete, and view patient records
- Diagnosis management: create, update, delete, and view diagnoses
- Ultrasound management: create, update, delete, and view ultrasound records
- Report generation and viewing
- Navigation via a single BrowserWindow for smooth user experience
- Responsive UI using Bootstrap and custom styles
- IPC-based navigation for returning to home or previous pages

## Project Structure

```
PregnancyCare-desktop/
├── component/           # Reusable HTML components (e.g., nav-buttons)
├── main/                # Main Electron process scripts
│   ├── app.js           # Main window creation and management
│   ├── init.js          # App initialization and IPC handlers
│   ├── menu.js          # Application menu setup
│   ├── preload.js       # Preload script for context isolation
│   ├── renderer.js      # (Optional) Renderer process logic
│   ├── util.js          # Utility functions (e.g., loadView)
│   └── windows/         # Window management modules
│       ├── diagnosticWindows.js
│       ├── patientWindows.js
│       ├── reportWindows.js
│       └── ultrasoundWindows.js
├── renderer/            # Renderer process (UI) files
│   ├── error.html
│   ├── index.html       # Home page
│   ├── ...              # Other HTML views
│   ├── create/          # Create forms and logic
│   ├── custom_css/      # Custom styles
│   ├── custom_js/       # Custom JS scripts
│   ├── delete/          # Delete forms and logic
│   ├── fonts/           # Font files
│   ├── images/          # App images
│   ├── reports/         # Report templates and logic
│   ├── src/             # Source images, JS, SCSS
│   ├── update/          # Update forms and logic
│   ├── view/            # View pages
│   ├── view_forms/      # View form pages
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── Readme.md            # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/AnaeleJoshua/PregnancyCare-desktop.git
   cd PregnancyCare-desktop
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the Electron app:
```sh
npm start
```
Or, for development with live reload:
```sh
npm run dev
```

## Usage
- Use the menu to navigate between patient, diagnosis, ultrasound, and report sections.
- Create, update, delete, and view records using the provided forms.
- Return to the home page or previous page using navigation buttons (IPC-based).

## Development Notes
- All navigation is handled via a single BrowserWindow for performance and simplicity.
- IPC is used for communication between renderer and main processes (e.g., navigation).
- Content Security Policy (CSP) is set in each HTML file for security.
- Bootstrap and custom CSS are used for styling.

## Folder Details
### component/
Reusable HTML components, such as navigation buttons.

### main/
Main Electron process scripts, including window management, menu setup, and IPC handlers.

### main/windows/
Modules for creating and managing different app windows (now refactored to use single window navigation).

### renderer/
All UI files, including HTML views, forms, custom styles, images, and JS scripts.

## Security
- CSP is enforced in all HTML files.
- Avoids use of `unsafe-eval` and remote scripts.
- IPC is used for safe navigation and communication.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

## Author
Anaele Joshua
