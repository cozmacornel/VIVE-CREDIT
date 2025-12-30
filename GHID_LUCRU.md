# Ghid de Lucru - VIVE-CREDIT

## 1. Fork la proiect

1. Accesează: https://github.com/florinbadea046/VIVE-CREDIT
2. Click pe butonul **Fork** (dreapta sus)
3. Lasă setările default și click pe **Create fork**

## 2. Clonare repository

```bash
# Clonează fork-ul TĂU (înlocuiește USERNAME cu username-ul tău GitHub)
git clone https://github.com/USERNAME/VIVE-CREDIT.git

# Intră în folder
cd VIVE-CREDIT

# Adaugă repository-ul original ca "upstream"
git remote add upstream https://github.com/florinbadea046/VIVE-CREDIT.git
```

## 3. Instalare dependințe

```bash
# Instalează dependințele
npm install

# Pornește aplicația pentru a testa
npm run dev
```

## 4. Lucrul la task-ul tău

```bash
# Creează un branch NOU pentru task-ul tău
git checkout -b feature/nume-task

# Exemplu:
git checkout -b feature/login-form
```

### ⚠️ Convenție pentru numire branch-uri:
- `feature/nume-componenta` - pentru componente noi
- `fix/nume-bug` - pentru bug-uri
- `update/nume-update` - pentru actualizări

## 5. Commit și Push

```bash
# Verifică modificările
git status

# Adaugă fișierele modificate
git add .

# Creează commit cu mesaj descriptiv
git commit -m "Add: Componenta RiskKpiCards pentru dashboard"

# Push pe fork-ul TĂU
git push origin feature/nume-task
```

## 6. Creează Pull Request (PR)

1. Accesează fork-ul tău pe GitHub
2. Vei vedea un banner galben **"Compare & pull request"** - click pe el
3. Verifică:
   - **Base repository**: florinbadea046/VIVE-CREDIT - branch: **main**
   - **Head repository**: USERNAME/VIVE-CREDIT - branch: **feature/nume-task**
4. Completează:
   - **Titlu**: Scurt și descriptiv (ex: "Add RiskKpiCards component")
   - **Descriere**: Ce ai implementat, ce funcționalități adaugă
5. Click pe **Create pull request**

## 7. Actualizare fork cu modificările de pe main

```bash
# Ia ultimele modificări de pe repository-ul original
git checkout main
git fetch upstream
git merge upstream/main

# Push modificările pe fork-ul tău
git push origin main
```

---

## ⚠️ Reguli importante

- ❌ NU lucrați direct pe branch-ul **main**
- ✅ Creați întotdeauna un branch **NOU** pentru fiecare task
- ✅ Commit-uri clare și descriptive
- ✅ Testați codul înainte de PR
- ✅ Un PR = Un task/feature

---

## 📋 Mesaje de commit recomandate

- `Add: [descriere]` - adăugare funcționalitate nouă
- `Fix: [descriere]` - rezolvare bug
- `Update: [descriere]` - actualizare cod existent
- `Refactor: [descriere]` - refactorizare cod
- `Style: [descriere]` - modificări CSS/styling

---

## 🆘 Probleme frecvente

### Conflicte la merge

```bash
# Actualizează branch-ul tău cu main
git checkout feature/nume-task
git fetch upstream
git merge upstream/main

# Rezolvă conflictele manual în IDE
git add .
git commit -m "Resolve merge conflicts"
git push origin feature/nume-task
```

### Push respins

```bash
# Asigură-te că ai ultimele modificări
git pull origin feature/nume-task
git push origin feature/nume-task
```

---

## 📝 Status curent

- **Ultima actualizare**: 22 Decembrie 2025
- **Repository original**: https://github.com/florinbadea046/VIVE-CREDIT
- **Tech Stack**: React + TypeScript + Vite + Tailwind CSS

---

**Succes în lucru! 🚀**
