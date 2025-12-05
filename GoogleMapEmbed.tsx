import React from "react";


const GoogleMapEmbed: React.FC = () => {
return (
<div className="w-[90%] h-[480px] overflow-hidden rounded-md border border-border mx-auto shadow-md">
<iframe
src="https://www.google.com/maps/d/embed?mid=1BcyZn_uc8Rw5oOjm-1FgnvT-NSe9xyU&ehbc=2E312F&noprof=1"
width="100%"
height="100%"
loading="lazy"
style={{ border: 0 }}
allowFullScreen
></iframe>
</div>
);
};


export default GoogleMapEmbed;