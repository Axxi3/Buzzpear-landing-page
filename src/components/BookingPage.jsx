import { useEffect } from "react";
import overlay from "../assets/Overlay.svg"; // Ensure the correct path

function BookingPage() {
  useEffect(() => {
    // Load the LeadConnector script dynamically
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-3  px-10">
      {/* Background Overlay */}
      <div className="absolute top-0  w-full flex items-center justify-center">
        <img src={overlay} alt="Overlay Background" />
      </div>

      <h1 className="text-3xl font-bold mb-5 z-10">Book an Appointment</h1>
      <p className="text-lg text-gray-700 mb-1 z-10">
        Schedule a meeting with us using the form below.
      </p>

      {/* Embedded Booking Widget */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/oUol0HM7Cf8HWqd8nKTX"
        style={{
          width: "100%",
          height: "800px",
          border: "none",
          overflow: "hidden",
          position: "relative",
          zIndex: 10, // Ensures the booking form stays above the overlay
        }}
        scrolling="no"
        id="oUol0HM7Cf8HWqd8nKTX_1739720182408"
      ></iframe>
    </div>
  );
}

export default BookingPage;
