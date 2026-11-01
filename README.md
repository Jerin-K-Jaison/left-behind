# Left Behind — An Atlas of Humanity in Space

An Astro-based interactive space museum documenting humanity's presence across the Solar System and beyond.

## Pages

1. **Solar System** (`/`) — interactive schematic atlas and mission timeline.
2. **Explore the Darkness** (`/explore-the-darkness`) — searchable archive of spacecraft, rovers, probes and stations.
3. **The Last Transmission** (`/last-transmission`) — documented stories of lost contact, final signals and deliberate mission endings.
4. **Spacecraft Behavior** (`/spacecraft-behavior`) — searchable status and whereabouts index. This is a curated archive, not live telemetry.
5. **Image Album** (`/image-album`) — NASA Image and Video Library-powered gallery; requires an internet connection.
6. **Animation** (`/animation`) — interactive stylised spacecraft model and motion study.
7. **Time Machine** (`/time-machine`) — interactive historical spaceflight timeline.
8. **About** (`/about`) — project scope, limitations and research sources.

## Run locally

Requires Node.js 22.23.4 or newer (matching the project engine declaration).

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Notes

- Mission records are stored in `src/data/*.json` and rendered into the archive, Solar System markers and individual story pages.
- The Solar System atlas is schematic and explicitly not to scale.
- NASA image results are loaded at runtime from `https://images-api.nasa.gov/`. An internet connection is required; locally bundled SVG illustrations remain as fallbacks in the mission archive.
- The spacecraft model on the Animation page is an original CSS concept model, not a photorealistic or dimensionally accurate replica.
- Spacecraft status is historical/curated, not real-time tracking. Check each linked agency source for current operational information.
- The narration on individual mission pages uses browser text-to-speech; available voices and quality depend on the visitor's device/browser.
- Respect reduced-motion settings. Background drift, transitions and the model animation are reduced or disabled where requested by the visitor's operating system.

## Primary research sources

- [NASA Science](https://science.nasa.gov/)
- [NASA JPL](https://www.jpl.nasa.gov/)
- [NASA Image and Video Library](https://images.nasa.gov/)
- [NASA Space Science Data Coordinated Archive](https://nssdc.gsfc.nasa.gov/)
- [ISRO](https://www.isro.gov.in/)
- [European Space Agency](https://www.esa.int/)

## v11 layout and 3D model updates

- Global page frames now use the available viewport width instead of inheriting the original 1080px `main` max-width. Wide content sections are centered and use a consistent 98vw frame with responsive side gutters.
- The Animation page now uses Google's `<model-viewer>` web component to display original NASA-hosted GLB assets for the International Space Station, Pioneer 10, and Hubble Space Telescope. Visitors can drag to rotate through 360 degrees, zoom, and toggle auto-rotation.
- The 3D models are streamed from NASA's public `assets.science.nasa.gov` model repository, so an internet connection is required. NASA model credits and source pages are shown beside the viewer.
- Sputnik 1 is not presented as a NASA 3D model because a verified NASA-hosted GLB asset was not located for it. Use the Image Album for archival Sputnik imagery instead of substituting a fictional 3D model.

NASA 3D model references:
- International Space Station (ISS) (A): https://science.nasa.gov/3d-resources/international-space-station-iss-a/
- Pioneer 10: https://science.nasa.gov/3d-resources/pioneer/
- Hubble Space Telescope (A): https://science.nasa.gov/3d-resources/hubble-space-telescope-a/


## v12 heading motion
- Reused the opening Solar System / Explore headline's soft fade-and-deblur (`lock-in`) animation for all `h1`, `h2`, and `h3` headings on pages 3–8.
- Headings reveal as they enter the viewport, so lower-page sections animate when reached rather than all at once.
- The first two pages retain their existing headline timing; reduced-motion preferences are respected.
