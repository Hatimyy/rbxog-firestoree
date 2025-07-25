const express = require("express");
const admin = require("firebase-admin");
const app = express();
const PORT = process.env.PORT || 3000;

const serviceAccount = JSON.parse(process.env.FIREBASE_KEY_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.get("/", (req, res) => {
  res.send("✅ RBXOG Render API is working!");
});

app.get("/add", async (req, res) => {
  const username = req.query.user;
  const payout = parseFloat(req.query.payout);

  if (!username || isNaN(payout)) {
    return res.status(400).send("❌ Missing user or payout");
  }

  const robux = Math.floor(payout * 100);

  try {
    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();

    if (!doc.exists) {
      await userRef.set({ coins: robux });
    } else {
      await userRef.update({
        coins: admin.firestore.FieldValue.increment(robux),
      });
    }

    res.send(`✅ Added ${robux} Robux to ${username}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("❌ Internal server error");
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});