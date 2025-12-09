document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Enable verbose logging for debugging (remove in production)
    window.plugins.OneSignal.Debug.setLogLevel(6);
    // Initialize with your OneSignal App ID
    window.plugins.OneSignal.initialize('9599bcbd-df7c-4d32-b641-45d68547279c');

    let customer = JSON.parse(localStorage.getItem('customer'));
    console.log("Customer data from localStorage:", customer);
    if (customer && customer.id) {
      window.plugins.OneSignal.login(customer.email.toString());
      console.log("User ID set for OneSignal: " + customer.email.toString());
    } else {
      console.log("No user ID found in localStorage.");
    }
    // Use this method to prompt for push notifications.
    // We recommend removing this method after testing and instead use In-App Messages to prompt for notification permission.
    window.plugins.OneSignal.Notifications.requestPermission(false).then((accepted) => {
      console.log("User accepted notifications: " + accepted);
    });
  
}