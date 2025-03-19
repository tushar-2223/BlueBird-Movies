import React, { useEffect } from 'react';

const AdComponent = ({ adSlot, adFormat = 'auto', adLayout = '' }) => {
    useEffect(() => {
        try {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({});
        } catch (e) {
            console.error('Error loading ads:', e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={import.meta.env.VITE_GOOGLE_ADS_KEY}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-ad-layout={adLayout}></ins>
    );
};

export default AdComponent;