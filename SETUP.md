# Setup Inicial — Gestão Comercial Superior

## 1️⃣ Clonar/Copiar Projeto

```bash
cd G:\Meu\ Drive\CLAUDE\SBS_Projetos\SBS_Superior\ Transportes\
```

## 2️⃣ Instalar Dependências

```bash
cd APP_Comercial
npm install
```

Vai instalar:
- React 18.2
- Firebase 10.0
- gh-pages
- react-scripts

## 3️⃣ Configurar Firebase

### Passo A: Criar Projeto Firebase

1. Acesse https://firebase.google.com
2. Clique "Comece agora"
3. Crie novo projeto: `gestao-comercial-superior`
4. Desative Google Analytics
5. Aguarde criação

### Passo B: Criar Firestore Database

1. No Firebase Console
2. Clique "Criar" → "Firestore Database"
3. Escolha **southamerica-east1 (São Paulo)**
4. Modo: **Teste**
5. Clique "Ativar"

### Passo C: Configurar Regras de Segurança

1. No Firestore, abra aba **Regras**
2. Apague tudo
3. Cole este bloco:

```
rules_version = '3';
service cloud.firestore {
  match /databases/{database}/documents {
    match /parametros/{doc=**} {
      allow read: if true;
      allow write: if true;
    }
    match /clientes/{doc=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

4. Clique **Publicar**

### Passo D: Pegar Credenciais

1. Clique **⚙️ Engrenagem** → **Configurações do projeto**
2. Role até **Seus aplicativos**
3. Clique **`</>`** (Web)
4. Apelido: `gestao-comercial-web`
5. Clique **Registrar app**
6. Copie o bloco `const firebaseConfig = {...}`

### Passo E: Colar em storage.js

1. Abra: `src/storage.js`
2. Procure: `const firebaseConfig = {`
3. Substitua os valores de `COLE_AQUI_SUA_API_KEY` pelos que copiou
4. Salve o arquivo

Exemplo de como fica:
```js
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "gestao-comercial-abc12.firebaseapp.com",
  projectId: "gestao-comercial-abc12",
  storageBucket: "gestao-comercial-abc12.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

## 4️⃣ Substituir Arquivo Principal

**IMPORTANTE:** Este arquivo é um placeholder. Você precisa:

1. Copiar seu arquivo real: `Gestão_Comercial_Superior.jsx`
2. Substituir: `src/components/Gestão_Comercial_Superior.jsx`

## 5️⃣ Testar Localmente

```bash
npm start
```

Navegador abrirá em `http://localhost:3000`

**Validar:**
- ✅ Vejo a interface?
- ✅ Consigo logar?
- ✅ Consegui cadastrar dados?

Para parar: `Ctrl+C`

## 6️⃣ Preparar para GitHub

### Passo A: Criar Repositório

1. Acesse https://github.com/new
2. Nome: `gestao-comercial-superior`
3. Descrição: `App de Gestão Comercial — SBS Solution`
4. **Marque: Public** ✅
5. Clique "Create repository"
6. Copie a URL

### Passo B: Configurar homepage em package.json

1. Abra: `package.json`
2. Procure: `"homepage":`
3. Mude para: `"homepage": "https://SEU-USUARIO.github.io/gestao-comercial-superior/"`
4. Substitua `SEU-USUARIO` pelo seu username do GitHub

### Passo C: Fazer Commit e Push

```bash
git init
git add .
git commit -m "Initial commit: Gestão Comercial Superior"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/gestao-comercial-superior.git
git push -u origin main
```

## 7️⃣ Configurar GitHub Pages

1. GitHub → Seu repositório
2. **Settings** → **Pages**
3. **Source:** selecione **GitHub Actions**
4. Pronto

## 8️⃣ Deploy

```bash
npm run deploy
```

Espere 2-4 minutos. Quando terminar, verá: `Published`

## 9️⃣ Verificar

1. GitHub → **Settings** → **Pages**
2. Procure pela URL do seu app
3. Abra e valide

## 🔟 Compartilhar

URL final para compartilhar:
```
https://SEU-USUARIO.github.io/gestao-comercial-superior/
```

---

## 🔄 Próximas Atualizações

Quando quiser atualizar:

```bash
# 1. Editar código

# 2. Testar
npm start
# (Ctrl+C para parar)

# 3. Deploy
npm run deploy

# ✅ Pronto em 2-4 minutos
```

---

## ⚠️ Se Algo Der Errado

**"Cannot find module"**
```bash
rm -rf node_modules
npm install
```

**"Erro ao fazer git push"**
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git push -u origin main
```

**"Firebase config está errado"**
- Revise `src/storage.js`
- Procure por `apiKey:`
- Deve ter um valor, não `COLE_AQUI`

**"App não sincroniza"**
- Verifique Firebase Console → Firestore
- Confirme que as regras foram publicadas
- Aguarde 1-2 minutos

---

## 📝 Checklist Final

- [ ] Node.js instalado
- [ ] Projeto clonado em `APP_Comercial`
- [ ] `npm install` executado
- [ ] Firebase criado e Firestore ativo
- [ ] Chave Firebase colada em `storage.js`
- [ ] Regras de segurança publicadas
- [ ] Arquivo `Gestão_Comercial_Superior.jsx` substituído
- [ ] `npm start` funciona localmente
- [ ] Repositório GitHub criado
- [ ] `homepage` em `package.json` atualizada
- [ ] Git push executado
- [ ] GitHub Pages configurado
- [ ] `npm run deploy` executado
- [ ] App online e funcionando ✅

---

**Parabéns! Seu app está pronto para usar.** 🎉
