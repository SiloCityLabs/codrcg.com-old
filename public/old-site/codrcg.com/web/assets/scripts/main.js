$(document).ready(function () {
    $(".button-collapse").sideNav();
	$('.modal').modal();
});

new SmartBanner({
	daysHidden: 15,   // days to hide banner after close button is clicked (defaults to 15)
    daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
    appStoreLanguage: 'us', // language code for the App Store (defaults to user's browser language)
    title: 'Call of Duty RCG',
    author: 'SiloCityLabs',
    button: 'VIEW',
    store: { android: 'In Google Play' },
    price: { android: 'FREE' }
    //, force: 'android' // Uncomment for platform emulation
});