/**
 * Frontend Constants Integration Tests
 *
 * Tests that the centralized constants in public/js/constants.js
 * are correctly defined and match the expected values.
 */

const { MAX_IMAGE_PROMPT, MAX_TTS_CHARS, MAX_HISTORY } = require('../public/js/constants.js');

describe('Centralized Constants', () => {
  describe('MAX_IMAGE_PROMPT', () => {
    test('should be 1500', () => {
      expect(MAX_IMAGE_PROMPT).toBe(1500);
    });

    test('should be a positive integer', () => {
      expect(typeof MAX_IMAGE_PROMPT).toBe('number');
      expect(MAX_IMAGE_PROMPT).toBeGreaterThan(0);
      expect(Number.isInteger(MAX_IMAGE_PROMPT)).toBe(true);
    });
  });

  describe('MAX_TTS_CHARS', () => {
    test('should be 3000', () => {
      expect(MAX_TTS_CHARS).toBe(3000);
    });

    test('should be a positive integer', () => {
      expect(typeof MAX_TTS_CHARS).toBe('number');
      expect(MAX_TTS_CHARS).toBeGreaterThan(0);
      expect(Number.isInteger(MAX_TTS_CHARS)).toBe(true);
    });

    test('should be greater than MAX_IMAGE_PROMPT (TTS allows more characters)', () => {
      expect(MAX_TTS_CHARS).toBeGreaterThan(MAX_IMAGE_PROMPT);
    });
  });

  describe('MAX_HISTORY', () => {
    test('should be defined', () => {
      expect(MAX_HISTORY).toBeDefined();
    });

    test('should be a positive integer', () => {
      expect(typeof MAX_HISTORY).toBe('number');
      expect(MAX_HISTORY).toBeGreaterThan(0);
      expect(Number.isInteger(MAX_HISTORY)).toBe(true);
    });
  });
});
