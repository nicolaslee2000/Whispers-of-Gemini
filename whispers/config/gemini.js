const {GoogleGenerativeAI, HarmCategory, HarmBlockThreshold} = require("@google/generative-ai")

const MODEL_NAME = "gemini-1.0-pro"
const API_KEY = process.env.API_KEY;