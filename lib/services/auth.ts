import firebaseConfigData from "../../firebase-applet-config.json";

export async function verifyAdminToken(authHeader: string | null): Promise<boolean> {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }
  const idToken = authHeader.split("Bearer ")[1];
  const apiKey = firebaseConfigData.apiKey || process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  
  if (!apiKey) {
    console.error("Firebase API Key is missing. Cannot verify token.");
    return false;
  }

  try {
    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Firebase accounts:lookup failed:", errText);
      return false;
    }

    const data = await res.json();
    const user = data.users?.[0];
    
    // Check if user is authenticated and their email is the specified admin email
    return user && user.email === "sayedozair25@gmail.com" && user.emailVerified !== false;
  } catch (error) {
    console.error("Token verification failed with error:", error);
    return false;
  }
}
