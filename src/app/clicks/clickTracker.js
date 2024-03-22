'use client'
import React, { useState, useEffect } from 'react';
const ClickTracker = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
       const trackClickAndPosition = (event) => {
         const clickData = {
           timestamp: new Date().toISOString(),
           xPosition: event.pageX,
           yPosition: event.pageY,
         };
         setData((prevData) => [...prevData, clickData]);
       };
   
       document.addEventListener('click', trackClickAndPosition);
   
       return () => {
         document.removeEventListener('click', trackClickAndPosition);
       };
    }, []);
   
    const saveDataToCSV = () => {
       const csvContent = "data:text/csv;charset=utf-8," + "Timestamp,X Position,Y Position\n" + data.map(click => `${click.timestamp},${click.xPosition},${click.yPosition}`).join('\n');
       const encodedUri = encodeURI(csvContent);
       const link = document.createElement("a");
       link.setAttribute("href", encodedUri);
       link.setAttribute("download", "click_data.csv");
       document.body.appendChild(link);
       link.click();
    };
   
    useEffect(() => {
       window.onbeforeunload = () => {
         if (data.length > 0) {
           saveDataToCSV();
         }
       };
   
       return () => {
         window.onbeforeunload = null;
       };
    }, [data]);
   
    return null; // O componente não precisa renderizar nada, pois a lógica está no useEffect
   };
   
   export default ClickTracker;
   