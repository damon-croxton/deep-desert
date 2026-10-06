# Deep Desert

A real-time WebGL2 desert in the browser. A cloaked wanderer crosses endless dunes under a ringed gas giant, while harvesters work the haze on the horizon, carryalls ferry them across the sky, and sandworms hunt beneath the sand.

**Live:** https://damon-croxton.github.io/deep-desert/

## Controls

| Input | Action |
| --- | --- |
| `W` `A` `S` `D` | Walk (camera-relative) |
| `Shift` | Run (rhythm in the sand can draw a worm) |
| Drag / mouse wheel | Look / zoom |
| `E` | Plant a thumper, then run: its rhythm calls a worm |
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
- **Character:** a rigged model retargeted from motion-capture walk, run and idle cycles, with world-locked feet on the terrain (capture-shaped swing arcs, heel strike and toe roll), look-at, a storm brace, and a simulated Verlet cloth cloak that drapes over the head-wrap.
- **Sandworm:** a continuous procedural skin (plated rings, a three-lobed mouth that flares open as it surfaces, rings of crystal teeth) rebuilt every frame along the trail its head carves through the sand, leaving a fading ridge of churned sand behind it.
- **Sand:** wind lofts grains off dune crests and they run down the slip faces; footsteps press real prints and set off small avalanches.
- **Events:** sandworm encounters (sand waves, vertical rises, harvester attacks with carryall rescues, close encounters, rare breaches, and thumpers that call a worm to swallow them), ornithopter fly-bys, dust devils, spice blows and a full sandstorm cycle.
- **Sound:** a procedural score (a shifting minor drone with a vowel-sweeping chant that tightens and pulses when there is wormsign), plus wind, footsteps, thumper strikes, roars and rumble.
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
- [Dune (2021) - Ornithopter [Rigged] [Fan-made]](https://sketchfab.com/3d-models/a3ce0992a5a34c19ae891bde6695d1e6) by StormTown

Walk, run and idle motion: Mixamo animation clips from the three.js `Soldier` example, baked to leg-length-normalised joint curves (`assets/gait.json`) and retargeted at runtime.

The models are fan works inspired by *Dune*. This is a non-commercial tech demo with no affiliation to the franchise or its rights holders. Everything else (terrain, sky, harvesters, carryalls, effects, audio) is procedural.
