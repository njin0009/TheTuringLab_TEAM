# The Turing Lab Team Website

A responsive one-page team website for The Turing Lab, a Monash University FIT Capstone team building PathwayIQ.

## Structure

```text
.
|-- index.html              # Page content and semantic section structure
|-- css/
|   `-- styles.css          # Layout, visual design and responsive rules
|-- js/
|   `-- main.js             # Team data and reusable profile rendering
|-- scripts/
|   `-- dev-server.js       # Dependency-free local preview server
|-- assets/
|   |-- p-*.png             # Portraits used by the website
|   |-- face-*.png          # Alternative cropped portraits from the source ZIP
|   |-- related/            # Linked homepage previews for related products
|   |-- roadmap/            # Feature illustrations for future roadmap cards
|   |-- story/              # Team memories used by the Our Story gallery
|   `-- video/              # Local PathwayIQ walkthrough video
|-- uploads/                # Original supplied team overview image
|-- scraps/                 # Original source sketch metadata
`-- The Turing Lab.html     # Original single-file prototype from the ZIP
```

## Sections

1. Hero: team positioning and quick introduction.
2. Our story: PathwayIQ context and team scope.
3. PathwayIQ: product video, live product link, demo journey, data signals, technical thinking, resources and future feature roadmap.
4. Team: five member profiles with responsibilities, skills and LinkedIn links.
5. Connect: simple call to action pointing visitors back to the profiles.

## Preview

Open `index.html` directly in a browser, or run a local static server:

```powershell
npm run dev
```

Then visit `http://localhost:8000`.
