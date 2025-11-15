# Agenda App



**Agenda App** is a modern weekly planner and task management application built with **HTML**, **CSS**, and **JavaScript**. It allows users to create date-specific cards, manage tasks, and add notes efficiently.

---

## Features

- **Date-based Card Creation**  
  Each card is uniquely tied to a date, preventing duplicates. Card titles display in `Day (number) Month (name) Year` format (e.g., `25 August 2025`).

- **Task Management**  
  Tasks can be added to cards and support:  
  - Mark as complete/incomplete (✔)  
  - Edit (✎)  
  - Add/Edit Note (📝)  
  - Delete (🗑)  
  Notes appear directly below the task text.

- **LocalStorage Integration**  
  All cards and tasks persist in the browser even after page reloads.

- **Weekly Layout**  
  - Displays all 7 days of the week statically.  
  - Cards appear under the correct day based on the selected date.  
  - If a card exists in a previous week, the next week’s card will not be placed in that week, leaving the space empty.

---


## Technologies Used

- HTML5  
- CSS3 & Bootstrap 5  
- JavaScript (ES6 Modules)  
- LocalStorage  

---


## Planned Enhancements

### CSS Improvements
- **Modern Card Design:** Each card will have subtle shadows, rounded corners, and gradient backgrounds to improve visual hierarchy.  
- **Task Styling:** Task items will have hover effects, smooth transitions, and visual feedback for completed tasks.  
- **Button Animations:** Task buttons (✔, ✎, 📝, 🗑) will scale slightly or change color on hover for better UX.  

### Chronological Sorting
- **Automatic Card Sorting:** Cards will be automatically sorted by date within each week.  
- **Temporal Order:** Sorting ensures that tasks are always presented in temporal order, making planning intuitive.  

### Week Row Management
- **Weekly Grouping:** Cards will be grouped week by week in rows.  
- **Empty Space Preservation:** If a card exists in a previous week, the next week’s card will leave a space in the week’s row, preserving chronological consistency.  
- **Week Overview:** This allows users to see at a glance which weeks have planned tasks and which are empty.  


### File Structure                                                           License
                                                              
agenda-app/                  
│                                                       - This project is licensed under the MIT License.
├─ index.html                                      
├─ css/                        
│   └─ style.css                    
└─ js/                          
    ├─ project.js              
    ├─ ui.js                  
    ├─ storage.js              
    └─ app.js                


    

