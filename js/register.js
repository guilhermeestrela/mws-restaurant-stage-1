if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js', {scope: '/'})
        .then((reg) => {
            console.log('Service Worker registered', reg)
        })
        .catch((error) => {
            console.log('Error registering service worker', error);
        });
}
