import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const {
        enableWeb3,
        isWeb3Enabled,
        account,
        Moralis,
        deactivateWeb3,
        isWeb3EnableLoading,
    } = useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return

        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])
    // useEffect will run twice due to React Strict Mode
    // No dependency array - will run anytime something re-renders
    // CAREFUL with this! Can get circular renders
    // Blank dependency array - run once on page load

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3() // set isWeb3Enabled to false
                console.log("Null account found")
            }
        })
    }, [])

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        // await wallet connect
                        await enableWeb3()

                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                            console.log("Connected!")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect
                </button>
            )}
        </div>
    )
}
