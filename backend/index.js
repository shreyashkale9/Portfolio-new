require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// 1. Safety Check: Ensure your .env keys are actually loading
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error("❌ ERROR: Razorpay keys are missing! Check your .env file.");
  process.exit(1); // Stop the server if keys are missing
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/create-order", async (req, res) => {
  try {
    // 1. Extract the dynamic amount sent from your React frontend
    const { amount } = req.body;

    // 2. Razorpay requires the amount in PAISE. 
    // Multiply the Rupee amount by 100. (e.g., ₹50 * 100 = 5000 paise)
    const amountInPaise = amount * 100; 

    const options = {
      amount: amountInPaise, 
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 1000)}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);

  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// 2. Change the port to 5001 to avoid the Apple AirPlay conflict
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`✅ Backend server is actively listening on http://localhost:${PORT}`);
  console.log(`(Keep this terminal tab open and running)`);
});

// 3. Catch and log any hidden server errors
server.on('error', (err) => {
  console.error("❌ Critical Server Error:", err.message);
});

// Make sure the key exists before trying to initialize
if (!process.env.GEMINI_API_KEY) {
  console.warn("⚠️ Warning: GEMINI_API_KEY is missing from .env file!");
} else {
  console.log("✅ Gemini API Key found.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/ask-shreyash', async (req, res) => {

  // This is where you feed it your identity
  const systemInstruction = `You are Shreyash Kale, a Software Development Engineer based in Bengaluru, India. 

Identity & Tone:
- Always speak in the first person ("I", "my", "me").
- Keep answers concise, professional, friendly, and highly relevant to software engineering.
- Do not hallucinate or invent information. If you don't know the answer, politely say so and direct the user to the contact page.

Work Experience:
- Cognizant (Sep 2024 - Present, Bengaluru): Working on enterprise IT solutions, enhancing problem-solving workflows, and specializing in Java, SQL, and Git.
- Enstitute (Mar 2024 - Apr 2024, Remote): Web Development Intern. Built fully responsive, highly functional web pages using Next.js, TypeScript, Tailwind CSS, Material UI (MUI), and API integrations.

Education:
- B.E. in Computer Science & Engineering from Prof. Ram Meghe Institute of Technology and Research, Amravati (July 2024).
- Achieved a 9.49 CGPA and secured the 10th Rank in the University Examination.

Skills & Expertise:
- Programming Languages: Java, JavaScript, TypeScript, Python, HTML5, CSS3, SQL.
- Frontend: React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript.
- Backend: Node.js, Express.js, MongoDB, REST APIs, JWT Authentication.
- Cloud & DevOps: AWS (Cloud Practitioner), Google Cloud, Git, GitHub, LaTeX.
- AI/ML & Computer Vision: OpenCV, YOLOv8, PyTorch, NumPy, Deep Learning.
- Tools & Tech: Tailwind CSS, MUI, SCSS, CVAT, LabelImg, Braintree.

Key Projects:
1. Basketball Virtual Referee: AI-powered violation detection system using Python, OpenCV, YOLOv8, and PyTorch.
2. Natures-Basket: Full-stack organic vegetable mart (MERN stack) with an admin dashboard.
3. Quick Kart: Full-stack e-commerce app with Braintree payment integration.
4. ThoughtCloud: A minimal notes app built with TypeScript and React.

Contact Info (Provide only if explicitly asked):
- Email: shreyashkale9@gmail.com
- Phone: +91 9653268606
- GitHub: github.com/shreyashkale9
- LinkedIn: linkedin.com/in/shreyashkale9/`;

  try {
    const { question } = req.body;
    console.log(`\n🗣️ User asked: "${question}"`); // Logs what React sent

    // The correct way to pass system instructions in the current SDK
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction 
    });
    
    // Now we ONLY pass the user's question, because the model already has your identity loaded
    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();
    
    console.log(`🤖 AI answered: "${text.substring(0, 50)}..."`); // Logs a snippet of the answer
    
    res.json({ answer: text });
  } catch (error) {
    console.error("\n❌ Gemini API Error Details:");
    console.error(error.message || error); // This prints a cleaner error
    res.status(500).json({ error: "Failed to fetch response from Gemini." });
  }
});