function Sidebar({ categories, onCategorySelect }) {
    try {
        return (
            <div className="sidebar" data-name="sidebar">
                <div className="p-4" data-name="sidebar-header">
                    <h1 className="text-xl font-bold" data-name="sidebar-title">Dev Tools</h1>
                </div>
                <nav data-name="sidebar-nav">
                    {categories.map(category => (
                        <a
                            key={category}
                            href="#"
                            className="sidebar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                onCategorySelect(category);
                            }}
                            data-name={`sidebar-category-${category}`}
                        >
                            {category}
                        </a>
                    ))}
                </nav>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
