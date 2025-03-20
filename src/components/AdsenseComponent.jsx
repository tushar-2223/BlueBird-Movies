import { useEffect } from "react";

const AdComponent = ({ adSlot }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense Error:", e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={import.meta.env.VITE_GOOGLE_ADS_KEY}
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
};

export default AdComponent;
