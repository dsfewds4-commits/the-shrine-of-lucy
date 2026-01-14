<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lucy Shrine</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="background-lights" aria-hidden="true"></div>
  <div class="cupboard-stage" id="cupboardStage">
    <div class="cupboard">
      <div class="door" id="cupboardDoor">
        <div class="door-front">
          <div class="label">Lucy</div>
          <div class="knob"></div>
        </div>
      </div>
      <div class="cupboard-shadow"></div>
    </div>
    <div class="intro-text">
      <p>Open the cupboard to enter Lucy's interactive shrine.</p>
      <button id="enterShrine" class="primary-btn">Open</button>
    </div>
  </div>

  <main class="shrine" id="shrine">
    <section class="panel photo-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Gallery</p>
          <h2>Lucy poster wall</h2>
        </div>
      </div>
      <div class="upload-area">
        <div class="password-box">
          <label for="galleryPassword">Secret code</label>
          <input type="password" id="galleryPassword" maxlength="4" placeholder="••••" />
          <button class="secondary-btn tiny" id="unlockBtn">Unlock</button>
        </div>
        <input type="file" id="imageUpload" accept="image/*" multiple style="display: none;">
        <button class="secondary-btn locked" id="uploadBtn" disabled>📷 Add posters</button>
      </div>
      <div class="photo-grid" id="photoGrid"></div>
    </section>

    <section class="panel memory-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Notes</p>
          <h2>Pin a note for Lucy</h2>
        </div>
        <p class="hint">Notes save locally in your browser.</p>
      </div>
      <div class="notes">
        <textarea id="noteInput" placeholder="Drop a kind word, a memory, or an inside joke..."></textarea>
        <button class="primary-btn" id="addNote">Pin note</button>
      </div>
      <div class="note-list" id="noteList"></div>
    </section>
  </main>

  <div class="lightbox" id="lightbox">
    <div class="lightbox-content">
      <button class="close" id="closeLightbox" aria-label="Close lightbox">&times;</button>
      <img id="lightboxImg" alt="Lucy close up" />
      <p id="lightboxCaption"></p>
    </div>
  </div>

  <audio id="shrineAudio" loop>
    <source src="https://cdn.pixabay.com/download/audio/2023/03/06/audio_7c7074e5a6.mp3?filename=lullaby-139752.mp3" type="audio/mpeg">
  </audio>

  <footer class="credit">made by loki</footer>

  <script src="script.js"></script>
</body>
</html>
