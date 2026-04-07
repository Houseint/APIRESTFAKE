# 📱 CRUD de Pessoas - React Native 🚀

## Sobre o Projeto
App mobile simples para gerenciar contatos/pessoas com operações **CRUD** (Criar, Ler, Atualizar, Deletar). Feito com **React Native + Expo** e backend fake com **JSON Server**.

## ✨ Funcionalidades
- 📋 Listar todas as pessoas
- 🔍 Buscar por nome
- ➕ Adicionar nova pessoa
- ✏️ Editar pessoa existente
- 🗑️ Deletar pessoa
- ♻️ Atualização automática da lista

## 🛠️ Tecnologias
- **React Native** + **Expo**
- **React Navigation**
- **JSON Server** (API REST fake)
- **Prettier** (formatação de código)

## 📋 Pré-requisitos
- Node.js instalado
- App **Expo Go** no celular (Android/iOS)
- Ou navegador para versão web

## 🚀 Como Rodar o Projeto

### 1. Clonar/Entrar na pasta
```bash
cd CrudGustavo
```

### 2. Instalar dependências
```bash
npm install
```

### 3. **Terminal 1** - Iniciar Backend (obrigatório!)
```bash
npx json-server --watch database.json --port 3000
```
*Backend roda em: http://localhost:3000/*

### 4. **Terminal 2** - Iniciar App
```bash
npx expo start
```

### 5. Abrir no celular
- Escaneie o QR Code com **Expo Go**
- **Android**: `npm run android`
- **iOS**: `npm run ios`
- **Web**: `npm run web`

## 📝 Como Usar
1. Na tela inicial, veja a lista de pessoas
2. Use a barra de busca para filtrar por nome
3. Clique **"Adicionar Pessoa"** para criar nova
4. Em cada cartão: **Editar** ou **Deletar**
5. Lista atualiza automaticamente!

## 💾 Backend (Dados)
- Arquivo: `src/servers/database.json`
- Campos: `id`, `firstName`, `lastName`, `email`, `phone`
- Edite o JSON para adicionar mais pessoas

## 💅 Formatação
- Usa **Prettier**: `Ctrl+Shift+P` → "Format Document"

## 👨‍💻 Autor
**Gustavo** - Projeto acadêmico

---
