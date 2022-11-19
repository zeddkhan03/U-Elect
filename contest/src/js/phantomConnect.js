const signUpButton = document.querySelector(".signup")

// Connect Phantom
function phantom_connect() {

    // Check for Solana & Phantom
    var provider = () => {
        if ("solana" in window) {
            var provider = window.solana;
            if (provider.isPhantom) {
                return provider;
            } else {
                return false;
            }
        }
        window.open("https://phantom.app", "_blank");
    };

    var phantom = provider();

    if (phantom !== false) {

        console.log("Phantom Wallet Found, Connecting..");

        try {

            // Connect to Solana
            var connect_wallet = phantom.connect();

            // After Connecting
            phantom.on("connect", () => {

                // Check Connection
                console.log("Phantom Connected: " + phantom.isConnected);

                // Get Wallet Address
                var wallet_address = phantom.publicKey.toString();
                console.log("Solana Wallet Address: " + wallet_address);


            });
            //

        } catch (err) {
            console.log("Connection Cancelled!");
        }
    }

}

signUpButton.addEventListener('click', phantom_connect)

