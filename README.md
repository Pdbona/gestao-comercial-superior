# Gestão Comercial Superior

**App de Gestão Comercial para Superior Transportes**

Desenvolvido por: **SBS Solution — Consultoria em Lean Manufacturing**

## 📋 Sobre

Aplicativo React com Firebase Firestore para gerenciar tabelas comerciais compartilhadas entre:

- **Comercial**: Cadastra e edita tabela de preços, clientes, contratos
- **Operação**: Consulta dados comerciais para gerar faturamento

## 🚀 Recursos

- ✅ Sincronização real-time via Firebase Firestore
- ✅ Dois perfis de acesso (Comercial + Operação)
- ✅ Interface responsiva (desktop, tablet, mobile)
- ✅ Dados compartilhados em tempo real (~20 segundos)
- ✅ Deploy automático via GitHub Pages
- ✅ PWA instalável no navegador

## 🛠️ Tecnologias

- **Frontend**: React 18.2
- **Database**: Firebase Firestore
- **Hosting**: GitHub Pages
- **Deploy**: GitHub Actions

## 📦 Instalação Local

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências**
```bash
npm install
```

2. **Configurar Firebase**
   - Acesse `src/storage.js`
   - Substitua `firebaseConfig` com suas credenciais do Firebase

3. **Executar em desenvolvimento**
```bash
npm start
```

4. **Build para produção**
```bash
npm run build
```

5. **Deploy**
```bash
npm run deploy
```

## 🔐 Configuração Firebase

1. Crie um projeto em [firebase.google.com](https://firebase.google.com)
2. Crie um Firestore Database
3. Configure regras de segurança (veja `INSTRUCOES.md`)
4. Pegue as credenciais em: **Settings → Project Settings → Your apps → Web**
5. Cole o `firebaseConfig` em `src/storage.js`

## 📁 Estrutura de Arquivos

```
APP_Comercial/
├── src/
│   ├── components/
│   │   └── Gestão_Comercial_Superior.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── storage.js
├── public/
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── README.md
```

## 👥 Usuários

### Comercial
- Edita tabela de preços
- Cadastra clientes
- Gerencia contratos
- PIN de acesso

### Operação
- Consulta preços (read-only)
- Monta faturamento
- Integração com Gestão CD Superior
- PIN de acesso

## 🔄 Sincronização

Todos os dados estão em tempo real via Firebase Firestore:
- Quando Comercial grava dados
- Operação vê em até 20 segundos
- Funciona offline + sincroniza quando voltar online

## 🌐 URL de Acesso

```
https://SEU-USUARIO.github.io/gestao-comercial-superior/
```

Substitua `SEU-USUARIO` pelo seu username do GitHub.

## 📱 Instalação em Dispositivos

### Android (Chrome)
1. Abra o link no Google Chrome
2. Toque **⋮** (3 pontinhos) → **Instalar aplicativo**
3. Confirme

### iPhone (Safari)
1. Abra o link no Safari
2. Toque **Compartilhar** → **Adicionar à Tela de Início**
3. Confirme

## 📊 Integração Futura

Quando integrar com **Gestão CD Superior**:

1. Operação abre ambos os apps
2. Consulta operações do Gestão CD
3. Consulta valores comerciais (deste app)
4. Monta faturamento automaticamente

## 🐛 Troubleshooting

**"Não consigo salvar dados"**
- Verifique conexão internet
- Confirme Firebase Firestore está ativo
- Veja regras de segurança em Firebase Console

**"Não sincroniza com outro usuário"**
- Firebase sincroniza a cada 20 segundos
- Puxe a tela para baixo ou recarregue a página
- Confirme ambos estão conectados à internet

**"Link retorna 404"**
- Aguarde 2-4 minutos após deploy
- Verifique GitHub Pages em Settings → Pages
- Confirme que `homepage` está correto em `package.json`

## 📞 Suporte

**SBS Solution — Consultoria em Lean Manufacturing**

---

**© 2024 SBS Solution — Todos os direitos reservados**
