# Playwright-TypeScript-E2E-Framework 🚀

This repository contains a **Playwright + TypeScript automation framework** designed for **end-to-end testing** across WEB & API tests.  
It follows a modular structure with reliable POM , reusable utilities, test data management, and CI/CD integration.  
A **custom fixture** has been added to extend Playwright’s default capabilities, making test setup and teardown more flexible. Framework already includes **API tests with assertions** to validate backend services.

---

## 📂 Project Structure

- **.github/workflows** → CI/CD pipeline configurations  
- **fixtures** → Custom fixture implementation for enhanced test setup  
- **pages** → Page Object Models (POM) for web applications  
- **testdata** → Centralized test data and secrets configuration  
- **tests** → Test scripts (Web + API) organized by feature/module  
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
- **API Testing with Assertions** → Validate REST endpoints, status codes, headers, and payloads  
- **CI/CD Ready** → GitHub Actions workflow integration  

---

## 🛠️ Prerequisites

- Node.js 18+
- VS Code
- npm or yarn  
- Playwright installed (`npm install @playwright/test`)  
- TypeScript compiler (`npm install typescript`)  

---

## 🔽 Cloning the Project

Clone the repository from GitHub:

```bash
git clone https://github.com/Gangadhar2821/Playwright-Typescript-E2E-Framework.git
```
---

Navigate to the working directory:
cd Playwright-Typescript-E2E-Framework

---
## ▶️ Getting Started
Install dependencies and run tests:

npm install
npx playwright test
npx playwright test --headed

---
## 📊 Reports & Logs
-Playwright generates HTML reports under /playwright-report
-Trace files available under /test-results for debugging

---
## 🪄 Future Enhancements

- CI/CD pipeline setup in **Azure DevOps**  
- Automated report publishing as pipeline artifacts  
- Integration with **Allure, Extent Reports** for advanced visualization  

---

## 🤝 Contribution Guidelines

- Fork the repo  
- Create a feature branch  
- Commit changes with meaningful messages  
- Raise a pull request  

---


