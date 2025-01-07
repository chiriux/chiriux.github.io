function App() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [displayedApps, setDisplayedApps] = React.useState(apps);

    try {
        React.useEffect(() => {
            if (searchQuery) {
                setDisplayedApps(searchApps(searchQuery));
            } else {
                setDisplayedApps(getAppsByCategory(selectedCategory));
            }
        }, [selectedCategory, searchQuery]);

        return (
            <div className="app-container" data-name="app-container">
                <Sidebar 
                    categories={categories}
                    onCategorySelect={setSelectedCategory}
                />
                <main className="content-area" data-name="main-content">
                    <header className="header" data-name="header">
                        <h2 className="text-2xl font-bold mb-4" data-name="header-title">
                            {selectedCategory || "All Apps"}
                        </h2>
                        <SearchBar onSearch={setSearchQuery} />
                    </header>
                    <AppGrid apps={displayedApps} />
                </main>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
