const translate = require('google-translate-api-extended');

const translateText = async (req, res) => {
  try {
    const { text, targetLang } = req.body;
    if (!text || !targetLang) {
      return res.status(400).json({ error: 'Missing text or targetLang in request body' });
    }

    const result = await translate(text, { to: targetLang });
    return res.json({ translatedText: result.text });
  } catch (error) {
    console.error('Translation error:', error);
    return res.status(500).json({ error: 'Translation failed' });
  }
};

module.exports = {
  translateText,
};
