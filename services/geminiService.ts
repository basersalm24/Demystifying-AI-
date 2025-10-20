
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function explainConcept(term: string): Promise<string> {
  const prompt = `
    اشرح مصطلح "${term}" في مجال الذكاء الاصطناعي بكلمات بسيطة وموجزة. 
    استخدم تشبيهات سهلة الفهم واجعل الشرح مناسبًا لشخص ليس لديه خلفية تقنية.
    نظم الإجابة بشكل جيد باستخدام العناوين والنقاط لتسهيل القراءة.
    يجب أن تكون الإجابة باللغة العربية.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get explanation from Gemini API.");
  }
}
