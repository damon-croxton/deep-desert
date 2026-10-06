# Deep Desert

A real-time WebGL2 desert in the browser. A cloaked wanderer crosses endless dunes under a ringed gas giant, while harvesters work the haze on the horizon, carryalls ferry them across the sky, and sandworms hunt beneath the sand.

**Live:** https://damon-croxton.github.io/deep-desert/

## Controls

| Input | Action |
| --- | --- |
| `W` `A` `S` `D` | Walk (camera-relative) |
| `Shift` | Run (rhythm in the sand can draw a worm) |
| Drag / mouse wheel | Look / zoom |
| `C` | Toggle the cinematic camera |
| `T` or the slider | Time of day |
| `G` | Summon or dismiss a sandstorm |
| `L` | 2.39:1 letterbox |
| `Q` | Quality preset |
| `M` | Sound |
| `H` | Hide the HUD |
| `F` | Fullscreen |

On touch screens, the left thumb walks with a virtual joystick and dragging on the right looks around.

## What's in it

- **Terrain:** analytic dunes evaluated identically in JS and GLSL, with per-pixel normals, wind ripples, glints, ray-marched dune self-shadowing and a 64 m deformation field for footprints and slide marks.
- **Atmosphere:** height-based haze, a physically motivated sky, cirrus with drifting cloud shadows, a ringed gas giant, a rising ice giant, moons (one casting a transit shadow), a comet, meteors and the Milky Way.
- **Character:** a rigged model driven by a gait-curve walk/run cycle (hip/knee/ankle flexion over the stride) with foot locking, heel-strike and toe-off, pelvic rotation and obliquity, arm swing, head stabilisation, look-at, and a simulated Verlet cloth cloak.
- **Events:** sandworm encounters (sand waves, vertical rises, harvester attacks with carryall rescues, close encounters, rare breaches), ornithopter fly-bys, dust devils, spice blows and a full sandstorm cycle.
- **Rendering:** HDR pipeline with temporal anti-aliasing and upscaling, bloom, god rays, lens flare, depth of field, heat shimmer and an inferior mirage. A GPU-timed governor adapts the internal resolution.

## Running locally

The page loads three.js from jsDelivr and the models from `assets/`, so serve the folder over HTTP rather than opening the file directly:

```bash
npx serve .
```

`deep-desert.html` is the source. It is a head-less fragment so the same file can be published as a Claude artifact. After editing it, regenerate the Pages entry point:

```bash
node tools/build-index.mjs
```

## Credits

3D models via Sketchfab, licensed CC BY 4.0. They were rigged, re-skinned and compressed (meshopt + WebP) for this demo.

- [Fremen of Dune](https://sketchfab.com/3d-models/fb4be07a655a47f890f1ff1d42f7f57e) by count_zero
- [Dune Sandworm RIGGED + ANIMATED](https://sketchfab.com/3d-models/505ddeac40d14e8b9f93293cff7d6134) by evan4129
- [Dune (2021) - Ornithopter [Rigged] [Fan-made]](https://sketchfab.com/3d-models/a3ce0992a5a34c19ae891bde6695d1e6) by StormTown

The models are fan works inspired by *Dune*. This is a non-commercial tech demo with no affiliation to the franchise or its rights holders. Everything else (terrain, sky, harvesters, carryalls, effects, audio) is procedural.
