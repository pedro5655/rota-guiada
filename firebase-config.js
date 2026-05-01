// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBp-CRI6ZrA0MhCXpKv0JCblAY63XlwIkM",
  authDomain: "rota-guiada-heineken.firebaseapp.com",
  projectId: "rota-guiada-heineken",
  storageBucket: "rota-guiada-heineken.firebasestorage.app",
  messagingSenderId: "926436808013",
  appId: "1:926436808013:web:e66ba28a7aeacbcb401304"
};

// Como estamos usando a versão de script "compat" (via CDN tradicional)
// Inicializamos o app assim:
firebase.initializeApp(firebaseConfig);

// Referências globais para o Banco de Dados e Autenticação
const db = firebase.firestore();
const auth = firebase.auth();
