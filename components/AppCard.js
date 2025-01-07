function AppCard({ app }) {
    try {
        return (
            <div className="app-card p-4" data-name={`app-card-${app.id}`}>
                <h3 className="text-lg font-semibold mb-2" data-name={`app-title-${app.id}`}>{app.name}</h3>
                <p className="text-gray-600 mb-4" data-name={`app-description-${app.id}`}>{app.description}</p>
                <a
                    href={app.url}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    data-name={`app-link-${app.id}`}
                >
                    Open App
                </a>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
