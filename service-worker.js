self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Close the notification
    event.waitUntil(
        clients.openWindow('https://rebamovie.com') // Open a URL on notification click
    );
});
