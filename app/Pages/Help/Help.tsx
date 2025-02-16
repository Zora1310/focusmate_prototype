
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBorderAll,
  faChartSimple,
  faCheck,
  faChevronCircleRight,
  faChevronDown,
  faChevronUp,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { defaultColor } from "@/colors";



function Help() {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        width: '100%', // Ensure the div takes full width
        height: '100%', 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
      }}>
      <p style={{ marginBottom: '50px' }}><strong>Frequently Asked Questions (FAQ)</strong></p> 
      <p style={{ paddingBottom: '5px' }}><strong>Q:</strong> How do I use this app?</p>
      <p style={{ marginBottom: '20px' }}><strong>A:</strong> Simply navigate through the sections and follow on-screen instructions.</p>
      <p style={{ paddingBottom: '5px' }}><strong>Q:</strong> Where can I find profile settings?</p>
      <p style={{ marginBottom: '20px' }}><strong>A:</strong> Click on the profile icon in the top-right corner.</p>
      <p style={{ paddingBottom: '5px' }}><strong>Q:</strong> Who can I contact for support?</p>
      <p><strong>A:</strong> Reach out to kuadamaharithbinkuasmawi@gmail.com.</p>
    </div>
  );
}


export default Help;