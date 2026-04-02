// Centralized magic numbers and constants
// Used by both ES modules (ui.js) and inline scripts (index.html)

const MAX_IMAGE_PROMPT = 1500;
const MAX_TTS_CHARS = 3000;
const MAX_HISTORY = 20;
const API_IMAGE_TIMEOUT = 120000;  // ms, matches server-side axios timeout
const API_AUDIO_TIMEOUT = 30000;   // ms

module.exports = {
  MAX_IMAGE_PROMPT,
  MAX_TTS_CHARS,
  MAX_HISTORY,
  API_IMAGE_TIMEOUT,
  API_AUDIO_TIMEOUT,
};
