function SearchBar({ onSearch }) {
    try {
        return (
            <div className="mb-6" data-name="search-container">
                <input
                    type="text"
                    placeholder="Search apps..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={(e) => onSearch(e.target.value)}
                    data-name="search-input"
                />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
