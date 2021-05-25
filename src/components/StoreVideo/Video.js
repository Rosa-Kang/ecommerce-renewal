import React from 'react';


function Video() {
    return (
     <div className="store-video">
        <iframe 
        data-enable-sound="false" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        title="YouTube video player"
        width= "100%"
        height= "480px"
        src="https://www.youtube.com/embed/8Wgmf_4dPG4?cc_load_policy=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;autohide=0&amp;controls=0&amp;branding=0&amp;showinfo=0&amp;rel=0&amp;fs=0&amp;wmode=opaque&amp;widget_referrer=https%3A%2F%2Fthemes.shopify.com%2F&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbroadcast-clean.myshopify.com&amp;widgetid=1" 
        tabIndex="-1">
        </iframe>
    </div>
    )
}


export default Video
