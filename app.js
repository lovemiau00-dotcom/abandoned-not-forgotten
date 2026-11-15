const ARTIFACTS = [
  {
    id: "apollo-11-lrrr",
    planet: "moon",
    year: 1969,
    name: "Apollo 11 Laser Ranging Retroreflector (LRRR)",
    shortName: "Apollo 11 LRRR",
    coords: "0.67416° N, 23.47314° E (Mare Tranquillitatis)",
    lat: 0.67,
    lon: 23.47,
    statusKey: "passive-active",
    status: "Passively active — reflects Earth laser pulses with zero power required",
    reasonLeft: "Left on the lunar surface after Apollo 11 Lunar Module ascent stage departed for Earth.",
    topDownType: "lunar-boots",
    topDownNote: "LRO top-down view shows lunar module descent stage and astronaut boot trails across regolith.",
    audioType: "apollo-radio",
    audioTitle: "Apollo 11 EASEP / LRRR Deployment Telemetry",
    image: "https://images-assets.nasa.gov/image/as11-40-5952/as11-40-5952~medium.jpg",
    story:
      "An array of 100 fused-silica corner-cube prisms left on the Moon in July 1969. Earth observatories fire pulsed lasers at the array to measure Earth–Moon distance to millimeter precision, revealing that the Moon recedes by ~3.8 cm per year."
  },
  {
    id: "surveyor-3",
    planet: "moon",
    year: 1967,
    name: "Surveyor 3 Lander & Apollo 12 Inspection Site",
    shortName: "Surveyor 3",
    coords: "3.01239° S, 23.42157° W (Oceanus Procellarum)",
    lat: -3.01,
    lon: -23.42,
    statusKey: "passive-active",
    status: "Passively active landmark — partially sampled by Apollo 12 astronauts",
    reasonLeft: "Uncrewed lunar soil test lander; Apollo 12 landed 163 m away in 1969 to retrieve camera and scoop components.",
    topDownType: "lunar-boots",
    topDownNote: "Top-down orbital imagery captures Surveyor 3’s frame alongside Apollo 12 EVA foot tracks.",
    audioType: "apollo-radio",
    audioTitle: "Apollo 12 Surveyor 3 Inspection Voice Loop",
    image: "https://images-assets.nasa.gov/image/as12-48-7136/as12-48-7136~medium.jpg",
    story:
      "Surveyor 3 tested lunar surface bearing strength before crewed landings. When Apollo 12 astronauts visited it 31 months later, returned parts gave scientists the first real-world test of vacuum, radiation, and micrometeoroid aging."
  },
  {
    id: "apollo-17-lrv",
    planet: "moon",
    year: 1972,
    name: "Apollo 17 Lunar Roving Vehicle (LRV-3)",
    shortName: "Apollo 17 LRV",
    coords: "20.1908° N, 30.7717° E (Taurus-Littrow Valley)",
    lat: 20.19,
    lon: 30.77,
    statusKey: "passive-active",
    status: "Passively active surface marker — parked and preserved in regolith",
    reasonLeft: "Left behind to save lunar ascent mass while its TV camera recorded the Lunar Module liftoff.",
    topDownType: "lunar-boots",
    topDownNote: "Orbital top-down view shows 35.9 km of woven wire-mesh wheel tracks and boot prints.",
    audioType: "apollo-radio",
    audioTitle: "Apollo 17 LRV TV Camera Liftoff Relay",
    image: "https://images-assets.nasa.gov/image/as17-146-22367/as17-146-22367~medium.jpg",
    story:
      "Driven 35.9 km across Taurus-Littrow Valley, LRV-3 was parked so mission controllers could pan its camera as Eugene Cernan and Harrison Schmitt lifted off from the Moon."
  },
  {
    id: "opportunity-rover",
    planet: "mars",
    year: 2004,
    name: "Mars Exploration Rover Opportunity (MER-B)",
    shortName: "Opportunity",
    coords: "1.9462° S, 354.4734° E (Meridiani Planum)",
    lat: -1.95,
    lon: -5.53,
    statusKey: "sand-covered",
    status: "Buried / sand-covered dormant rover on Meridiani Planum",
    reasonLeft: "Battery failure after a global 2018 Martian dust storm blocked sunlight for months.",
    topDownType: "mars-tracks",
    topDownNote: "MRO HiRISE top-down view traces 45.16 km of rover wheel tracks across ripple fields.",
    audioType: "mars-wind",
    audioTitle: "Meridiani Planum Dust Storm Wind Simulation",
    image: "https://images-assets.nasa.gov/image/PIA06739/PIA06739~medium.jpg",
    story:
      "Built for a 90-sol mission, Opportunity operated for nearly 15 Earth years, discovering hematite spherules and clay minerals proving ancient liquid water on Mars."
  },
  {
    id: "insight-lander",
    planet: "mars",
    year: 2018,
    name: "InSight Mars Lander",
    shortName: "InSight",
    coords: "4.5024° N, 135.6234° E (Elysium Planitia)",
    lat: 4.5,
    lon: 135.62,
    statusKey: "sand-covered",
    status: "Sand-covered on Elysium Planitia — solar arrays coated in Martian dust",
    reasonLeft: "Progressive dust accumulation on solar panels depleted power in December 2022.",
    topDownType: "mars-tracks",
    topDownNote: "MRO top-down imagery tracks dust darkening on InSight’s circular solar wings.",
    audioType: "insight-quake",
    audioTitle: "InSight SEIS Seismic Thud & Martian Wind",
    image: "https://images-assets.nasa.gov/image/PIA22743/PIA22743~medium.jpg",
    story:
      "InSight detected more than 1,300 marsquakes and measured Mars’s crust, mantle, and liquid core. Even after power loss, orbiters photograph its dust-covered deck to measure dust fallout rates."
  },
  {
    id: "ingenuity-helicopter",
    planet: "mars",
    year: 2024,
    name: "Ingenuity Mars Helicopter",
    shortName: "Ingenuity",
    coords: "18°26′41″ N, 77°27′03″ E (Jezero Crater)",
    lat: 18.44,
    lon: 77.45,
    statusKey: "sand-covered",
    status: "Resting in Jezero Crater dunes with a damaged rotor blade",
    reasonLeft: "Rotor blade tip damage during hard landing on Flight 72 (January 18, 2024).",
    topDownType: "mars-tracks",
    topDownNote: "Top-down aerial & orbital view shows rotor shadow and Perseverance rover tracks nearby.",
    audioType: "ingenuity-rotor",
    audioTitle: "Ingenuity 2,537 RPM Rotor Hum & Thin Atmosphere",
    image: "https://images-assets.nasa.gov/image/PIA24455/PIA24455~medium.jpg",
    story:
      "Completed 72 flights instead of the planned 5, covering over 17 km before rotor blade damage ended flight operations. It continues logging weather telemetry from Jezero Crater."
  },
  {
    id: "viking-1",
    planet: "mars",
    year: 1976,
    name: "Viking 1 Lander (Thomas Mutch Memorial Station)",
    shortName: "Viking 1",
    coords: "22.697° N, 311.978° E (Chryse Planitia)",
    lat: 22.7,
    lon: -48.02,
    statusKey: "sand-covered",
    status: "Dormant on Chryse Planitia — geodetic reference landmark",
    reasonLeft: "Accidental uplink command error in 1982 altered antenna pointing and broke communication.",
    topDownType: "mars-tracks",
    topDownNote: "Top-down orbital view marks Chryse Planitia landing site and wind-streaked dunes.",
    audioType: "mars-wind",
    audioTitle: "Chryse Planitia Wind Telemetry",
    image: "https://images-assets.nasa.gov/image/PIA00393/PIA00393~medium.jpg",
    story:
      "First spacecraft to successfully land and operate on Mars (1976–1982), providing long-term atmospheric and surface data and serving as a Mars coordinate reference."
  },
  {
    id: "skylab-debris",
    planet: "earth",
    year: 1979,
    name: "Skylab Orbital Workshop Debris",
    shortName: "Skylab Debris",
    coords: "33.86° S, 121.89° E (Shire of Esperance, Western Australia)",
    lat: -33.86,
    lon: 121.89,
    statusKey: "atmospheric-entry",
    status: "Destroyed on atmospheric entry — surviving fragments recovered on land",
    reasonLeft: "Orbital decay caused uncontrolled re-entry in July 1979.",
    topDownType: "desert-cross",
    topDownNote: "Aerial/top-down survey of recovered fragments in Western Australia.",
    audioType: "telemetry-beep",
    audioTitle: "Orbital Decay Tracking Beacon",
    image: "https://images-assets.nasa.gov/image/PIA16585/PIA16585~medium.jpg",
    story:
      "Most of Skylab burned up during atmospheric re-entry in 1979, while fragments fell across Western Australia, prompting a famous $400 littering fine from Esperance."
  },
  {
    id: "saturn-v-f1",
    planet: "earth",
    year: 1969,
    name: "Saturn V S-IC F-1 Rocket Engines",
    shortName: "Saturn V F-1",
    coords: "28.5° N, 78.5° W (Atlantic Ocean floor, ~4,300 m depth)",
    lat: 28.5,
    lon: -78.5,
    statusKey: "ocean-floor",
    status: "On ocean floor — corrosion-worn booster hardware at ~4.3 km depth",
    reasonLeft: "First-stage booster separated after launch and splashed down in the Atlantic.",
    topDownType: "ocean-floor",
    topDownNote: "Sonar/top-down bathymetric view of F-1 turbopump and nozzle remains on seabed.",
    audioType: "telemetry-beep",
    audioTitle: "Sonar Deep-Ocean Ping",
    image: "https://images-assets.nasa.gov/image/KSC-69PC-0442/KSC-69PC-0442~medium.jpg",
    story:
      "After boosting Apollo missions toward the Moon, Saturn V first stages fell into the Atlantic Ocean. Expeditions later recovered F-1 engine components from deep water."
  },
  {
    id: "mojave-cross",
    planet: "earth",
    year: 1958,
    name: "Mojave Desert Aerial Calibration Cross",
    shortName: "Mojave Cross",
    coords: "35.0° N, 117.0° W (Mojave Desert, California)",
    lat: 35.0,
    lon: -117.0,
    statusKey: "sand-covered",
    status: "Sand-covered / weathered concrete benchmark in desert terrain",
    reasonLeft: "Permanent ground calibration target left in place after aerial/satellite camera testing.",
    topDownType: "desert-cross",
    topDownNote: "Top-down nadir view shows 60-meter cross arms partially drifted with desert sand.",
    audioType: "telemetry-beep",
    audioTitle: "Range Calibration Tone",
    image: "https://images-assets.nasa.gov/image/PIA18033/PIA18033~medium.jpg",
    story:
      "Large ground calibration crosses in arid test ranges helped engineers validate spatial resolution and optical alignment for early reconnaissance and Earth-observation sensors."
  }
];

// Starfield in Hero
(function initStarfield() {
  const canvas = document.getElementById("heroStarfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      a: Math.random() * 0.7 + 0.2
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 232, 255, ${s.a})`;
      ctx.fill();
    });
  }

  resize();
  draw();
  window.addEventListener("resize", () => {
    resize();
    draw();
  });
})();

// Procedural Planet Texture Generator
function createPlanetTexture(type) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (type === "earth") {
    ctx.fillStyle = "#17488a";
    ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = "#2e7d4f";
    const blobs = [
      [110, 95, 48, 32],
      [145, 155, 34, 48],
      [265, 90, 55, 36],
      [280, 150, 38, 52],
      [375, 100, 62, 42],
      [430, 185, 34, 20]
    ];
    blobs.forEach(([x, y, rx, ry]) => {
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0.2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = "rgba(255,255,255,0.22)";
    for (let i = 0; i < 35; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * 512,
        Math.random() * 256,
        18 + Math.random() * 28,
        5 + Math.random() * 8,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  } else if (type === "moon") {
    ctx.fillStyle = "#9aa5b8";
    ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = "#6c7688";
    [
      [170, 110, 42],
      [230, 95, 52],
      [290, 120, 35]
    ].forEach(([x, y, r]) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    });
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const r = 2 + Math.random() * 7;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(30, 36, 48, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  } else {
    ctx.fillStyle = "#b8552d";
    ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = "#8a3619";
    for (let i = 0; i < 45; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * 512,
        Math.random() * 256,
        24 + Math.random() * 45,
        10 + Math.random() * 20,
        Math.random(),
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    ctx.fillStyle = "#f3efe6";
    ctx.fillRect(0, 0, 512, 10);
    ctx.fillRect(0, 246, 512, 10);
  }

  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

// Hero 3-Planet Rotating Preview (Earth, Moon, Mars)
(function initHeroPlanets() {
  const container = document.getElementById("heroPlanetsCanvas");
  if (!container || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0.6, 7.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 0.65);
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.35);
  sun.position.set(6, 4, 5);
  scene.add(ambient, sun);

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 36, 36),
    new THREE.MeshStandardMaterial({ map: createPlanetTexture("earth") })
  );
  earth.position.set(-2.55, 0.15, 0);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 36, 36),
    new THREE.MeshStandardMaterial({ map: createPlanetTexture("moon") })
  );
  moon.position.set(0, -0.1, 0.4);

  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.95, 36, 36),
    new THREE.MeshStandardMaterial({ map: createPlanetTexture("mars") })
  );
  mars.position.set(2.45, 0.1, -0.2);

  scene.add(earth, moon, mars);

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.007;
    moon.rotation.y += 0.005;
    mars.rotation.y += 0.006;
    renderer.render(scene, camera);
  }
  animate();
})();

// Interactive 3D Planet Globe with Left-Behind Artifact Markers
let currentPlanet = "moon";
let currentStatusFilter = "all";
let selectedArtifactId = "apollo-11-lrrr";

let globeScene, globeCamera, globeRenderer, globeMesh, markerGroup;
let isDragging = false;
let prevMouse = { x: 0, y: 0 };

function latLonToVec3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function initInteractiveGlobe() {
  const box = document.getElementById("interactiveGlobeBox");
  if (!box || typeof THREE === "undefined") return;

  globeScene = new THREE.Scene();
  globeCamera = new THREE.PerspectiveCamera(45, box.clientWidth / box.clientHeight, 0.1, 100);
  globeCamera.position.z = 4.2;

  globeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  globeRenderer.setSize(box.clientWidth, box.clientHeight);
  box.appendChild(globeRenderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 0.75);
  const dir = new THREE.DirectionalLight(0xffffff, 1.2);
  dir.position.set(4, 3, 5);
  globeScene.add(ambient, dir);

  markerGroup = new THREE.Group();
  globeScene.add(markerGroup);

  rebuildGlobeForPlanet(currentPlanet);

  // Drag rotation
  box.addEventListener("pointerdown", (e) => {
    isDragging = true;
    prevMouse = { x: e.clientX, y: e.clientY };
  });
  window.addEventListener("pointerup", () => {
    isDragging = false;
  });
  box.addEventListener("pointermove", (e) => {
    if (!isDragging || !globeMesh) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    globeMesh.rotation.y += dx * 0.008;
    globeMesh.rotation.x = Math.max(-1.1, Math.min(1.1, globeMesh.rotation.x + dy * 0.008));
    prevMouse = { x: e.clientX, y: e.clientY };
  });

  // Click raycast on markers
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  box.addEventListener("click", (e) => {
    const rect = box.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, globeCamera);
    const hits = raycaster.intersectObjects(markerGroup.children);
    if (hits.length > 0 && hits[0].object.userData.artifactId) {
      selectedArtifactId = hits[0].object.userData.artifactId;
      renderExplorer();
    }
  });

  function loop() {
    requestAnimationFrame(loop);
    if (!isDragging && globeMesh) {
      globeMesh.rotation.y += 0.0022;
    }
    globeRenderer.render(globeScene, globeCamera);
  }
  loop();
}

function rebuildGlobeForPlanet(planet) {
  if (!globeScene) return;
  if (globeMesh) globeScene.remove(globeMesh);
  while (markerGroup.children.length) {
    markerGroup.remove(markerGroup.children[0]);
  }

  globeMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 48, 48),
    new THREE.MeshStandardMaterial({ map: createPlanetTexture(planet) })
  );
  globeScene.add(globeMesh);

  const planetArtifacts = ARTIFACTS.filter((a) => a.planet === planet);
  planetArtifacts.forEach((art) => {
    const pos = latLonToVec3(art.lat, art.lon, 1.53);
    const pin = new THREE.Mesh(
      new THREE.SphereGeometry(0.065, 16, 16),
      new THREE.MeshBasicMaterial({
        color: art.id === selectedArtifactId ? 0xff7b54 : 0x4ea8ff
      })
    );
    pin.position.copy(pos);
    pin.userData.artifactId = art.id;
    globeMesh.add(pin);
  });
}

function getFilteredArtifacts() {
  return ARTIFACTS.filter((a) => {
    const pMatch = a.planet === currentPlanet;
    const sMatch = currentStatusFilter === "all" || a.statusKey === currentStatusFilter;
    return pMatch && sMatch;
  });
}

function drawTopDownCanvas(canvas, artifact) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  if (artifact.topDownType === "lunar-boots") {
    ctx.fillStyle = "#2b303a";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(60, h * 0.75);
    ctx.quadraticCurveTo(w * 0.45, h * 0.35, w - 80, h * 0.45);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#cbd5e1";
    ctx.fillRect(w * 0.5 - 14, h * 0.45 - 10, 28, 20);
  } else if (artifact.topDownType === "mars-tracks") {
    ctx.fillStyle = "#5c2412";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(255, 190, 150, 0.35)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50, h * 0.65);
    ctx.lineTo(w - 60, h * 0.35);
    ctx.stroke();
    ctx.fillStyle = "#fDBA74";
    ctx.fillRect(w - 75, h * 0.35 - 8, 22, 16);
  } else if (artifact.topDownType === "ocean-floor") {
    ctx.fillStyle = "#082032";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    for (let x = 20; x < w; x += 36) {
      ctx.beginPath();
      ctx.arc(x, h / 2, 14 + (x % 20), 0, Math.PI * 2);
      ctx.stroke();
    }
  } else {
    ctx.fillStyle = "#3b2f23";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#e2e8f0";
    ctx.fillRect(w / 2 - 4, 24, 8, h - 48);
    ctx.fillRect(w / 2 - 55, h / 2 - 4, 110, 8);
  }

  ctx.fillStyle = "#e6ecff";
  ctx.font = "12px JetBrains Mono, monospace";
  ctx.fillText(`TOP-DOWN VIEW // ${artifact.coords}`, 14, 20);
}

// Web Audio API Atmospheric Sound Player
let audioCtx = null;
function playArtifactAudio(type) {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === "ingenuity-rotor") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 1.4);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
    osc.start(now);
    osc.stop(now + 1.45);
  } else if (type === "insight-quake") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(58, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 1.2);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    osc.start(now);
    osc.stop(now + 1.25);
  } else if (type === "mars-wind") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(95, now + 1.5);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    osc.start(now);
    osc.stop(now + 1.55);
  } else {
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.setValueAtTime(660, now + 0.25);
    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc.start(now);
    osc.stop(now + 0.65);
  }
}

function renderExplorer() {
  const titleEl = document.getElementById("activeGlobeTitle");
  if (titleEl) {
    titleEl.textContent = `3D GLOBE // ${currentPlanet.toUpperCase()}`;
  }

  rebuildGlobeForPlanet(currentPlanet);

  const list = getFilteredArtifacts();
  const quickList = document.getElementById("markerQuickList");
  if (quickList) {
    quickList.innerHTML = list
      .map(
        (a) =>
          `<button class="marker-chip ${a.id === selectedArtifactId ? "active" : ""}" data-id="${a.id}">${a.shortName}</button>`
      )
      .join("");

    quickList.querySelectorAll(".marker-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedArtifactId = btn.dataset.id;
        renderExplorer();
      });
    });
  }

  const active =
    list.find((a) => a.id === selectedArtifactId) ||
    list[0] ||
    ARTIFACTS.find((a) => a.planet === currentPlanet) ||
    ARTIFACTS[0];

  if (active) {
    selectedArtifactId = active.id;
  }

  const panel = document.getElementById("artifactDetailPanel");
  if (!panel || !active) return;

  panel.innerHTML = `
    <img class="artifact-photo" src="${active.image}" alt="${active.name}" />
    <div class="detail-badges">
      <span class="pill">${active.planet.toUpperCase()}</span>
      <span class="pill">YEAR: ${active.year}</span>
    </div>
    <h3>${active.name}</h3>
    <p class="detail-story">${active.story}</p>

    <div class="required-fields-grid">
      <div class="req-box">
        <h4>1. STATUS</h4>
        <p>${active.status}</p>
      </div>
      <div class="req-box">
        <h4>2. REASON LEFT BEHIND</h4>
        <p>${active.reasonLeft}</p>
      </div>
      <div class="req-box">
        <h4>3. COORDINATES &amp; TOP-DOWN VIEW</h4>
        <p><strong>Coordinates:</strong> ${active.coords}</p>
        <p>${active.topDownNote}</p>
        <canvas id="artifactTopDownCanvas" class="topdown-canvas" width="460" height="150"></canvas>
      </div>
      <div class="req-box">
        <h4>4. AUDIO ACCOMPANIMENT</h4>
        <div class="audio-bar">
          <button class="audio-btn" id="playArtifactAudioBtn">▶ Play Audio</button>
          <span class="audio-label">${active.audioTitle}</span>
        </div>
      </div>
    </div>
  `;

  drawTopDownCanvas(document.getElementById("artifactTopDownCanvas"), active);
  const audioBtn = document.getElementById("playArtifactAudioBtn");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => playArtifactAudio(active.audioType));
  }
}

// Planet Tabs & Status Filter
document.querySelectorAll(".planet-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".planet-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentPlanet = tab.dataset.planet;
    const first = ARTIFACTS.find((a) => a.planet === currentPlanet);
    if (first) selectedArtifactId = first.id;
    renderExplorer();
  });
});

document.getElementById("statusFilter")?.addEventListener("change", (e) => {
  currentStatusFilter = e.target.value;
  renderExplorer();
});

// Quick Nav & World Cards
document.querySelectorAll(".nav-pill").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.jump;
    if (target === "map") {
      document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    currentPlanet = target;
    document.querySelectorAll(".planet-tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.planet === target);
    });
    const first = ARTIFACTS.find((a) => a.planet === target);
    if (first) selectedArtifactId = first.id;
    renderExplorer();
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".open-world-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const world = btn.dataset.world;
    currentPlanet = world;
    document.querySelectorAll(".planet-tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.planet === world);
    });
    const first = ARTIFACTS.find((a) => a.planet === world);
    if (first) selectedArtifactId = first.id;
    renderExplorer();
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
  });
});

// Spotlight Controls
drawTopDownCanvas(document.getElementById("spotlightTopDownCanvas"), {
  coords: "18°26′41″ N, 77°27′03″ E (Jezero Crater)",
  topDownType: "mars-tracks"
});

document.getElementById("spotlightAudioBtn")?.addEventListener("click", () => {
  playArtifactAudio("ingenuity-rotor");
});

document.getElementById("spotlightSelectBtn")?.addEventListener("click", () => {
  currentPlanet = "mars";
  selectedArtifactId = "ingenuity-helicopter";
  document.querySelectorAll(".planet-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.planet === "mars");
  });
  renderExplorer();
  document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
});

// Time Capsule Timeline (1958–2026)
const TIMELINE_ERAS = [
  {
    maxYear: 1968,
    era: "1958–1968 // Early Calibration & Precursor Probes",
    summary:
      "NASA began with ground calibration crosses, early test hardware, and precursor probes like Surveyor 3 (1967) to verify lunar soil mechanics before crewed landings."
  },
  {
    maxYear: 1975,
    era: "1969–1975 // Lunar Landings, Reflectors & Rovers",
    summary:
      "Apollo missions left descent stages, LRRR corner-cube reflectors, seismometers, and LRV rovers — turning the Moon into an active passive-reflector and geological archive."
  },
  {
    maxYear: 1985,
    era: "1976–1985 // First Martian Landers & Orbital Re-Entry",
    summary:
      "Viking 1 landed on Mars (1976), while Skylab’s re-entry in 1979 left fragments in Western Australia, highlighting atmospheric entry dynamics and space debris rules."
  },
  {
    maxYear: 2017,
    era: "1997–2017 // Long-Duration Martian Rovers",
    summary:
      "Rovers like Spirit and Opportunity (2004) crossed Martian plains for years, leaving multi-kilometer wheel tracks and geological discoveries across ancient lakebeds."
  },
  {
    maxYear: 2026,
    era: "2018–2026 // Seismology, Aerial Flight & Post-Mission Telemetry",
    summary:
      "InSight mapped Mars’s interior before dust covered its panels, while Ingenuity completed 72 flights before settling in Jezero Crater as a stationary weather station."
  }
];

function renderTimeline(year) {
  const yearEl = document.getElementById("timelineYearValue");
  const outEl = document.getElementById("timelineOutput");
  if (yearEl) yearEl.textContent = year;

  const eraObj = TIMELINE_ERAS.find((e) => year <= e.maxYear) || TIMELINE_ERAS[TIMELINE_ERAS.length - 1];
  const matching = ARTIFACTS.filter((a) => a.year <= year);

  if (outEl) {
    outEl.innerHTML = `
      <span class="pill">${eraObj.era}</span>
      <h3 style="margin:10px 0 6px;">Artifacts Left Behind Up to ${year}: ${matching.length}</h3>
      <p style="color:var(--muted);margin-bottom:10px;">${eraObj.summary}</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${matching.map((m) => `<span class="pill">${m.year} · ${m.shortName}</span>`).join("")}
      </div>
    `;
  }
}

const timelineSlider = document.getElementById("timelineSlider");
timelineSlider?.addEventListener("input", (e) => {
  renderTimeline(Number(e.target.value));
});

document.querySelectorAll(".preset-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const y = Number(btn.dataset.year);
    if (timelineSlider) timelineSlider.value = y;
    document.querySelectorAll(".preset-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderTimeline(y);
  });
});

// Scale Lab (Human 1.75 m, Passenger Car 4.5 m, Artifacts)
let currentScaleKey = "f1";
let mojaveTenX = false;

const SCALE_ITEMS = {
  f1: { label: "Saturn V F-1 Engine", meters: 5.6, color: "#4ea8ff" },
  lrv: { label: "Lunar Rover LRV", meters: 3.1, color: "#c8d2e6" },
  opp: { label: "Opportunity Rover", meters: 1.6, color: "#e06d3b" },
  fallen: { label: "Fallen Astronaut Figurine", meters: 0.085, color: "#facc15" },
  mojave: { label: "Mojave Calibration Cross", meters: 60.0, color: "#38bdf8" }
};

function renderScaleLab() {
  const canvas = document.getElementById("scaleCanvas");
  const footnote = document.getElementById("scaleFootnote");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const item = SCALE_ITEMS[currentScaleKey] || SCALE_ITEMS.f1;
  const maxMeters = currentScaleKey === "mojave" && mojaveTenX ? 65 : 7.5;
  const pxPerMeter = (w - 180) / maxMeters;
  const baselineY = h - 55;

  // Baseline
  ctx.strokeStyle = "rgba(238, 243, 255, 0.35)";
  ctx.beginPath();
  ctx.moveTo(40, baselineY);
  ctx.lineTo(w - 40, baselineY);
  ctx.stroke();

  // 1. Human (1.75 m)
  const humanH = 1.75 * pxPerMeter;
  ctx.fillStyle = "#94a3b8";
  ctx.fillRect(90, baselineY - humanH, 16, humanH);
  ctx.fillStyle = "#eef3ff";
  ctx.font = "12px JetBrains Mono, monospace";
  ctx.fillText("Human (1.75 m)", 65, baselineY + 20);

  // 2. Passenger Car (4.5 m length represented as horizontal bar)
  const carW = 4.5 * pxPerMeter;
  const carH = 1.45 * pxPerMeter;
  ctx.fillStyle = "#64748b";
  ctx.fillRect(240, baselineY - carH, carW, carH);
  ctx.fillStyle = "#eef3ff";
  ctx.fillText("Car (4.5 m)", 245, baselineY + 20);

  // 3. Selected Artifact
  const artSize = Math.max(10, item.meters * pxPerMeter);
  ctx.fillStyle = item.color;
  ctx.fillRect(w - 120 - Math.min(artSize, 260), baselineY - Math.min(artSize, 200), Math.min(artSize, 260), Math.min(artSize, 200));
  ctx.fillStyle = "#eef3ff";
  ctx.fillText(`${item.label} (${item.meters} m)`, w - 340, baselineY + 20);

  if (footnote) {
    footnote.textContent =
      currentScaleKey === "mojave"
        ? "The calibration target in the Mojave Desert spans 60 meters — it will not fit on this screen without scaling down by 10x."
        : `Comparing 175 cm human and 4.5 m passenger car with ${item.label} (${item.meters} m).`;
  }
}

document.querySelectorAll(".scale-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".scale-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.scale;
    if (key === "mojave") {
      mojaveTenX = true;
    } else {
      mojaveTenX = false;
    }
    currentScaleKey = key;
    renderScaleLab();
  });
});

// Initial render
initInteractiveGlobe();
renderExplorer();
renderTimeline(1969);
renderScaleLab();
