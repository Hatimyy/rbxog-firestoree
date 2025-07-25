# 🔥 RBXOG Firebase Server for Render

This is a simple Node.js server for receiving postback from OGAds and rewarding users in Firebase Firestore.

## 🚀 How to Deploy on Render

1. Create a new Web Service on [Render.com](https://render.com)
2. Connect your GitHub repo with this code
3. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add a secret environment variable:
   - **Key:** `FIREBASE_KEY_JSON`
   - **Value:** (Paste your Firebase Admin SDK JSON in ONE line)
5. Deploy! 🎉

## 🟢 Test it
Open in browser:

```
https://your-render-url.onrender.com/add?user=hatim900&payout=5
```