import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import Candidate from "./Candidate";
import React from "react";

export default function Api() {
  // Firebase yapılandırması
  const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  return <Candidate db={db} />;
}
