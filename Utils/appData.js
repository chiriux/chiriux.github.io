const apps = [
    {
        id: 1,
        name: "Code Formatter",
        description: "Format your code with various language support",
        category: "Code Tools",
        url: "/apps/formatter.html"
    },
    {
        id: 2,
        name: "JSON Validator",
        description: "Validate and format JSON data",
        category: "Code Tools",
        url: "/apps/json-validator.html"
    },
    {
        id: 3,
        name: "Pomodoro Timer",
        description: "Stay productive with timed work sessions",
        category: "Productivity",
        url: "/apps/pomodoro.html"
    },
    {
        id: 4,
        name: "Note Taking",
        description: "Quick and efficient note taking app",
        category: "Productivity",
        url: "/apps/notes.html"
    },
    {
        id: 5,
        name: "Color Picker",
        description: "Advanced color selection tool",
        category: "Design Tools",
        url: "/apps/color-picker.html"
    }
];

const categories = [...new Set(apps.map(app => app.category))];

function getAppsByCategory(category) {
    try {
        return category ? apps.filter(app => app.category === category) : apps;
    } catch (error) {
        reportError(error);
        return [];
    }
}

function searchApps(query) {
    try {
        const lowercaseQuery = query.toLowerCase();
        return apps.filter(app => 
            app.name.toLowerCase().includes(lowercaseQuery) ||
            app.description.toLowerCase().includes(lowercaseQuery)
        );
    } catch (error) {
        reportError(error);
        return [];
    }
}
