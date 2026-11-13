const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const viewer = $('#specimen-viewer');
const dialog = $('#specimen-dialog');
const specimens = [
  { name: 'The Cathedral', tab: 'Cathedral', type: 'ARCHITECTURAL ORGANISM', caption: 'A sanctuary with a pulse.', position: '50% 50%', scale: '1.015', description: 'A monumental nervous system disguised as architecture. Ribs become arches, conduits become veins, and an ivory skull watches over a sanctuary that never quite sleeps.' },
  { name: 'Neural Core', tab: 'Neural core', type: 'BIOELECTRIC CONSCIOUSNESS', caption: 'All signals return here.', position: '82% 90%', scale: '1.6', description: 'An aperture of pale light embedded in the organism’s chest. The neural core translates resonance into sensation. Move the resonance control to tune its pulse.' },
  { name: 'Exoskeleton', tab: 'Exoskeleton', type: 'STRUCTURAL ANATOMY', caption: 'A machine that learned to grow.', position: '85% 20%', scale: '1.5', description: 'An interwoven lattice of blackened bone and titanium. The outer structure grows around its conduits, holding an impossible balance between protection and fragility.' },
];
let selected = 0;
let awake = false;
let signalCount = 1;
let toastTimer;
let audioContext;
let masterGain;
let audioEnabled = false;

function notify(heading, copy) {
  $('#toast-heading').textContent = heading;
  $('#toast-copy').textContent = copy;
  $('#toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 5000);
}

function signal(heading, copy) {
  signalCount += 1;
  $('#signal-count').textContent = String(signalCount).padStart(2, '0');
  $('#notice-heading').textContent = heading;
  $('#notice-copy').textContent = copy;
  $('#notice-time').textContent = 'JUST NOW';
  notify(heading, copy);
  if (audioEnabled) playSignal();
}

function selectSpecimen(index) {
  selected = (index + specimens.length) % specimens.length;
  const specimen = specimens[selected];
  $('#specimen-name').textContent = specimen.name;
  $('#specimen-type').textContent = specimen.type;
  $('#specimen-caption').textContent = specimen.caption;
  $('#specimen-id').textContent = `SPECIMEN ${String(selected + 1).padStart(3, '0')}`;
  $('#scene-image').style.objectPosition = specimen.position;
  $('#scene-image').style.scale = selected === 0 ? '1' : specimen.scale;
  $$('[data-specimen]').forEach((tab, index) => {
    tab.setAttribute('aria-selected', String(index === selected));
    tab.tabIndex = index === selected ? 0 : -1;
  });
  $('#chamber').selectedIndex = selected;
  $('#chamber-note').textContent = `Viewing ${specimen.name.toLowerCase()}. ${specimen.caption}`;
}

function openDialog(kind) {
  if (kind === 'notes') {
    $('#dialog-body').innerHTML = `<div class="dialog-content"><span class="eyebrow">VESSEL / FIELD NOTES</span><h2>Between bone and machine.</h2><p>A small, interactive study in biomechanical interfaces, inspired by the dark sculptural worlds of H. R. Giger.</p><p>The frame, command surface, and cathedral are original generated artworks. The labels and controls are live: try different materials, adjust the light, send a signal, and explore three views of the same organism.</p><p>Sound is optional. Enable it to hear the vessel’s low ambient resonance.</p><a href="assets/frame.png" download="vessel-frame.png">Collect the frame artwork ↓</a></div>`;
  } else {
    const s = specimens[selected];
    $('#dialog-body').innerHTML = `<img class="dialog-art" src="assets/scene.png" alt="Detailed biomechanical cathedral artwork"><div class="dialog-content"><span class="eyebrow">SPECIMEN ${String(selected + 1).padStart(3, '0')} / ${s.type}</span><h2>${s.name}</h2><p>${s.description}</p><a href="assets/scene.png" download="vessel-cathedral.png">Collect the original artwork ↓</a></div>`;
  }
  dialog.showModal();
}

$('#awaken-button').addEventListener('click', () => {
  awake = !awake;
  viewer.classList.toggle('awakened', awake);
  $('#awaken-button span').textContent = awake ? 'Return to stasis' : 'Awaken vessel';
  $('#vessel-state').textContent = awake ? 'CONSCIOUSNESS DETECTED' : 'AWAITING CONTACT';
  $('#readout-text').textContent = awake ? 'ORGANISM AWAKE · LINK STABLE' : 'ALL VITALS WITHIN RANGE';
  signal(awake ? 'The vessel awakens' : 'Returning to stasis', awake ? 'A consciousness stirs beneath the surface.' : 'The organism settles back into silence.');
});
$('#signal-button').addEventListener('click', () => signal('Signal received', `Specimen ${String(selected + 1).padStart(3, '0')} returned a response at ${$('#resonance').value} Hz.`));
$('#notification-button').addEventListener('click', () => signal('A disturbance in the chamber', 'A new signal has entered the neural link.'));
$('#inspect-button').addEventListener('click', () => openDialog('specimen'));
$('#expand-button').addEventListener('click', () => openDialog('specimen'));
$('#core-button').addEventListener('click', () => { selectSpecimen(1); openDialog('specimen'); });
$('#notes-button').addEventListener('click', () => openDialog('notes'));
$('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
$('#dismiss-toast').addEventListener('click', () => { clearTimeout(toastTimer); $('#toast').classList.remove('visible'); });
$('#prev-specimen').addEventListener('click', () => selectSpecimen(selected - 1));
$('#next-specimen').addEventListener('click', () => selectSpecimen(selected + 1));
$$('[data-specimen]').forEach((tab) => {
  tab.addEventListener('click', () => selectSpecimen(Number(tab.dataset.specimen)));
  tab.addEventListener('keydown', (event) => {
    const next = event.key === 'ArrowRight' ? selected + 1 : event.key === 'ArrowLeft' ? selected - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : null;
    if (next !== null) { event.preventDefault(); selectSpecimen(next); $(`[data-specimen="${selected}"]`).focus(); }
  });
});

$('#luminance').addEventListener('input', (event) => {
  $('#luminance-output').textContent = `${event.target.value}%`;
  viewer.style.setProperty('--light', String(Number(event.target.value) / 65));
});
$('#resonance').addEventListener('input', (event) => {
  const value = Number(event.target.value);
  $('#resonance-output').textContent = `${value} Hz`;
  viewer.style.setProperty('--resonance', `${9 - value / 10}s`);
  if (audioContext) audioContext.vesselOscillator.frequency.setTargetAtTime(value, audioContext.currentTime, .3);
});
$$('input[name=material]').forEach((input) => input.addEventListener('change', () => { viewer.dataset.material = input.value; }));
$('#breathing').addEventListener('change', (event) => viewer.classList.toggle('no-motion', !event.target.checked));
$('#scan').addEventListener('change', (event) => {
  viewer.classList.toggle('scanning', event.target.checked);
  $('#view-coordinates').textContent = event.target.checked ? 'NEURAL SCAN IN PROGRESS' : 'X 048 · Y 092';
});
$('#chamber').addEventListener('change', (event) => selectSpecimen(event.target.selectedIndex));
$('#reset-button').addEventListener('click', () => {
  $('#luminance').value = 65; $('#luminance-output').textContent = '65%';
  $('#resonance').value = 38; $('#resonance-output').textContent = '38 Hz';
  viewer.style.setProperty('--light', '1'); viewer.style.setProperty('--resonance', '5.2s');
  viewer.dataset.material = 'bone'; $('input[value=bone]').checked = true;
  $('#breathing').checked = true; $('#scan').checked = false;
  viewer.classList.remove('no-motion', 'scanning', 'awakened');
  awake = false; $('#awaken-button span').textContent = 'Awaken vessel';
  $('#vessel-state').textContent = 'AWAITING CONTACT'; $('#view-coordinates').textContent = 'X 048 · Y 092';
  $('#readout-text').textContent = 'ALL VITALS WITHIN RANGE';
  if (audioContext) audioContext.vesselOscillator.frequency.setTargetAtTime(38, audioContext.currentTime, .3);
  selectSpecimen(0); notify('Equilibrium restored', 'All organism controls have returned to their initial state.');
});

$('#specimen-search').addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  const results = $('#search-results'); results.replaceChildren();
  if (!query) return;
  const matches = specimens.map((s, index) => ({ ...s, index })).filter((s) => `${s.name} ${s.type}`.toLowerCase().includes(query));
  if (!matches.length) { const p = document.createElement('p'); p.className = 'search-empty'; p.textContent = 'No match. Try “cathedral”, “neural”, or “exo”.'; results.append(p); }
  matches.forEach((s) => { const button = document.createElement('button'); button.className = 'search-result'; button.textContent = `${s.name} ↗`; button.addEventListener('click', () => { selectSpecimen(s.index); openDialog('specimen'); }); results.append(button); });
});
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !dialog.open) { event.preventDefault(); $('#specimen-search').focus(); }
});

async function toggleSound() {
  try {
    if (!audioContext) {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error('Audio unavailable');
      audioContext = new Audio(); masterGain = audioContext.createGain(); masterGain.gain.value = 0; masterGain.connect(audioContext.destination);
      const oscillator = audioContext.createOscillator(); oscillator.type = 'sine'; oscillator.frequency.value = Number($('#resonance').value); oscillator.connect(masterGain); oscillator.start(); audioContext.vesselOscillator = oscillator;
      const overtone = audioContext.createOscillator(); const overtoneGain = audioContext.createGain(); overtone.type = 'sine'; overtone.frequency.value = 76.3; overtoneGain.gain.value = .14; overtone.connect(overtoneGain); overtoneGain.connect(masterGain); overtone.start();
    }
    await audioContext.resume(); audioEnabled = !audioEnabled;
    masterGain.gain.setTargetAtTime(audioEnabled ? .13 : 0, audioContext.currentTime, .5);
    $('#sound-button').setAttribute('aria-pressed', String(audioEnabled));
    $('#sound-button').setAttribute('aria-label', audioEnabled ? 'Disable ambient sound' : 'Enable ambient sound');
    $('#sound-label').textContent = audioEnabled ? 'Sound on' : 'Sound off';
  } catch { notify('Sound unavailable', 'Ambient sound could not start in this browser.'); }
}
function playSignal() {
  const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain();
  oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(180, audioContext.currentTime); oscillator.frequency.exponentialRampToValueAtTime(75, audioContext.currentTime + .6);
  gain.gain.setValueAtTime(.035, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .7);
  oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + .7);
}
$('#sound-button').addEventListener('click', toggleSound);
document.addEventListener('visibilitychange', () => {
  if (audioContext && masterGain) masterGain.gain.setTargetAtTime(document.hidden || !audioEnabled ? 0 : .13, audioContext.currentTime, .2);
});
