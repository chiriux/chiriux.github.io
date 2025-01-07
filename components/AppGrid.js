function AppGrid({ apps }) {
    try {
        return (
            <div className="app-grid" data-name="app-grid">
                {apps.map(app => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
