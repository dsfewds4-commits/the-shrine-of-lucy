const cupboardStage = document.getElementById('cupboardStage');
const cupboard = document.querySelector('.cupboard');
const door = document.getElementById('cupboardDoor');
const enterBtn = document.getElementById('enterShrine');
const shrine = document.getElementById('shrine');
const backgroundLights = document.querySelector('.background-lights');
const audioEl = document.getElementById('shrineAudio');
const photoGrid = document.getElementById('photoGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.getElementById('closeLightbox');
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNote');
const noteList = document.getElementById('noteList');
const imageUpload = document.getElementById('imageUpload');
const uploadBtn = document.getElementById('uploadBtn');
const passwordInput = document.getElementById('galleryPassword');
const unlockBtn = document.getElementById('unlockBtn');

// Load images from localStorage, start empty if none
function getImageData() {
  const stored = localStorage.getItem('lucy-images');
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
}

let imageData = getImageData();
let uploadUnlocked = sessionStorage.getItem('lucy-upload-unlocked') === 'true';

function openShrine() {
  cupboard.classList.add('open');
  setTimeout(() => {
    shrine.classList.add('visible');
    window.scrollTo({ top: cupboardStage.offsetHeight, behavior: 'smooth' });
  }, 600);
}

enterBtn.addEventListener('click', openShrine);
door.addEventListener('click', openShrine);

function createImageCard({ src, caption }) {
  const card = document.createElement('div');
  card.className = 'photo-card';

  const img = document.createElement('img');
  img.src = src;
  img.alt = caption;
  img.onerror = () => img.replaceWith(createPlaceholder(caption));

  const cap = document.createElement('div');
  cap.className = 'caption';
  cap.textContent = caption;

  card.appendChild(img);
  card.appendChild(cap);

  card.addEventListener('click', () => openLightbox(src, caption));
  return card;
}

function createPlaceholder(caption) {
  const placeholder = document.createElement('div');
  placeholder.className = 'placeholder';
  placeholder.textContent = caption || 'No posters yet – unlock the shrine to start pinning Lucy pics.';
  return placeholder;
}

function renderGallery() {
  photoGrid.innerHTML = '';
  if (!imageData.length) {
    const empty = document.createElement('div');
    empty.className = 'photo-card';
    empty.appendChild(createPlaceholder('No Lucy photos yet. Enter the secret code to start the wall of fame.'));
    photoGrid.appendChild(empty);
    return;
  }
  imageData.forEach((img) => {
    const card = createImageCard(img);
    photoGrid.appendChild(card);
  });
}

// Save images to localStorage
function saveImageData(data) {
  localStorage.setItem('lucy-images', JSON.stringify(data));
}

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('open');
}

closeLightbox.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

function loadNotes() {
  const stored = localStorage.getItem('lucy-notes');
  return stored ? JSON.parse(stored) : [];
}

function saveNotes(notes) {
  localStorage.setItem('lucy-notes', JSON.stringify(notes));
}

function renderNotes() {
  noteList.innerHTML = '';
  const notes = loadNotes();
  notes.forEach((note) => {
    const el = document.createElement('div');
    el.className = 'note';
    el.innerHTML = `
      <div>${note.text}</div>
      <div class="time">${note.time}</div>
    `;
    noteList.appendChild(el);
  });
}

addNoteBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if (!text) return;
  const notes = loadNotes();
  const stamp = new Date().toLocaleString();
  notes.unshift({ text, time: stamp });
  saveNotes(notes);
  renderNotes();
  noteInput.value = '';
});

// Password gate for uploads
function updateUploadLockUI() {
  if (uploadUnlocked) {
    uploadBtn.disabled = false;
    uploadBtn.classList.remove('locked');
    if (unlockBtn) {
      unlockBtn.textContent = 'Code accepted';
      unlockBtn.disabled = true;
    }
    if (passwordInput) {
      passwordInput.value = '';
      passwordInput.disabled = true;
    }
  } else {
    uploadBtn.disabled = true;
    uploadBtn.classList.add('locked');
  }
}

if (unlockBtn && passwordInput) {
  unlockBtn.addEventListener('click', () => {
    if (passwordInput.value === '1262') {
      uploadUnlocked = true;
      sessionStorage.setItem('lucy-upload-unlocked', 'true');
      updateUploadLockUI();
    } else {
      unlockBtn.classList.add('shake');
      setTimeout(() => unlockBtn.classList.remove('shake'), 400);
    }
  });
}

// Image upload handler (only when unlocked)
uploadBtn.addEventListener('click', () => {
  if (!uploadUnlocked) return;
  imageUpload.click();
});

imageUpload.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const newImage = {
        src: event.target.result,
        caption: file.name.replace(/\.[^/.]+$/, '') || 'Lucy photo'
      };
      imageData.push(newImage);
      saveImageData(imageData);
      renderGallery();
    };
    reader.readAsDataURL(file);
  });
  // Reset input so same file can be selected again
  imageUpload.value = '';
});

// kick off
updateUploadLockUI();
renderGallery();
renderNotes();
