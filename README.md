# Playwright-TypeScript-E2E-Framework 🚀

This repository contains a **Playwright + TypeScript automation framework** designed for **end-to-end testing** across web applications.  
It follows a modular structure with reliable POM , reusable utilities, test data management, and CI/CD integration.  
A **custom fixture** has been added to extend Playwright’s default capabilities, making test setup and teardown more flexible.

---

## 📂 Project Structure

- **.github/workflows** → CI/CD pipeline configurations  
- **fixtures** → Custom fixture implementation for enhanced test setup  
- **pages** → Page Object Models (POM) for web applications  
- **testdata** → Centralized test data and secrets configuration  
- **tests** → Test scripts organized by feature/module  
- **utils** → Utility classes (e.g., ConfigReader, helpers)  
- **playwright.config.ts** → Playwright configuration file  
- **tsconfig.json** → TypeScript configuration  
- **package.json / package-lock.json** → Dependencies and scripts  
- **.gitignore** → Git ignore rules  

---

## ⚙️ Features

- **Playwright + TypeScript** → Modern, fast, and reliable automation stack  
- **Custom Fixture** → Extends Playwright’s default fixtures for flexible test setup  
- **Page Object Model (POM)** → Clean separation of UI logic and test scripts  
- **Reusable Utilities** → Config reader, helpers, and common functions  
- **Test Data Management** → Centralized test data and secrets handling  
- **CI/CD Ready** → GitHub Actions workflow integration  

---

## 🛠️ Prerequisites

- Node.js 18+  
- npm or yarn  
- Playwright installed (`npm install @playwright/test`)  
- TypeScript compiler (`npm install typescript`)  

---

## 🔽 Cloning the Project

Clone the repository from GitHub:

```bash
git clone https://github.com/Gangadhar2821/Playwright-Typescript-E2E-Framework.git

---
Navigate to the working directory:
cd Playwright-Typescript-E2E-Framework

---
## ▶️ Getting Started
Install dependencies:

npm install
npx playwright test
npx playwright test --headed

---
## 📊 Reports & Logs
-Playwright generates HTML reports under /playwright-report
-Trace files available under /test-results for debugging

---
## 🤝 Contributing
Fork the repo

-Create a feature branch (git checkout -b feature-name)
-Commit changes (git commit -m "Added new feature")
-Push to branch (git push origin feature-name)
-Open a Pull Request
---


