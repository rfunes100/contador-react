

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./SW.js')
      .then(() => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed', err);
      })
  }
