# 📌 Dynamic Notes App (Vanilla JS)

---

## 🚀 Features

- Add notes with title and description  
- Edit existing notes  
- Save updated changes  
- Cancel edits and restore previous data  
- Delete notes  
- Dynamic UI updates without page reload  

---

## 🧠 Core Concepts Used

- DOM Manipulation  
- Event Handling (click events)  
- UI State Management (View Mode vs Edit Mode)  
- Dynamic Rendering using JavaScript  
- Separation of Logic using reusable functions  

---

## 🔧 Technical Implementation

- Built reusable functions:
  - `renderViewMode()`
  - `renderEditMode()`
- Implemented full UI re-rendering instead of partial DOM updates  
- Ensured proper event binding for dynamically created elements  
- Removed nested event listeners and duplicate logic  
- Fixed scope and variable reference issues  

---

## ⚠️ Challenges Faced

- Edit functionality working only once  
- Event listeners not working on new elements  
- Over-complicated and nested logic structure  

---

## 💡 Key Learnings

- Always reattach events to newly created elements  
- Avoid mixing multiple UI update approaches  
- Prefer rebuilding UI over patching elements  
- Keep logic and UI rendering separate  
- Pass data into functions instead of relying on external variables  

---

## 🔜 Future Improvements

- Improve UI styling and responsiveness  
- Add input validation (prevent empty notes)  
- Enhance user experience with better layout

## 📸 Project Preview
(Coming soon)
