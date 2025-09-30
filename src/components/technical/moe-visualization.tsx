"use client";

import { useEffect, useRef } from "react";

export function MoEVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const width = 600;
    const height = 400;

    // Clear previous content
    svg.innerHTML = "";

    // Create gradient definitions
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    const gradient1 = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    gradient1.setAttribute("id", "expertGradient1");
    gradient1.setAttribute("cx", "50%");
    gradient1.setAttribute("cy", "50%");
    gradient1.setAttribute("r", "50%");

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#3b82f6");
    stop1.setAttribute("stop-opacity", "0.8");

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#1e40af");
    stop2.setAttribute("stop-opacity", "0.3");

    gradient1.appendChild(stop1);
    gradient1.appendChild(stop2);
    defs.appendChild(gradient1);

    const gradient2 = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    gradient2.setAttribute("id", "expertGradient2");
    gradient2.setAttribute("cx", "50%");
    gradient2.setAttribute("cy", "50%");
    gradient2.setAttribute("r", "50%");

    const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0%");
    stop3.setAttribute("stop-color", "#10b981");
    stop3.setAttribute("stop-opacity", "0.8");

    const stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop4.setAttribute("offset", "100%");
    stop4.setAttribute("stop-color", "#047857");
    stop4.setAttribute("stop-opacity", "0.3");

    gradient2.appendChild(stop3);
    gradient2.appendChild(stop4);
    defs.appendChild(gradient2);

    svg.appendChild(defs);

    // Create main groups
    const routerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    routerGroup.setAttribute("id", "router");

    const expertsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    expertsGroup.setAttribute("id", "experts");

    const connectionsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    connectionsGroup.setAttribute("id", "connections");

    svg.appendChild(connectionsGroup);
    svg.appendChild(expertsGroup);
    svg.appendChild(routerGroup);

    // Create router (central hub)
    const router = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    router.setAttribute("cx", (width / 2).toString());
    router.setAttribute("cy", (height / 2).toString());
    router.setAttribute("r", "20");
    router.setAttribute("fill", "url(#expertGradient1)");
    router.setAttribute("stroke", "#3b82f6");
    router.setAttribute("stroke-width", "2");
    routerGroup.appendChild(router);

    // Create experts (outer circles)
    const expertCount = 8; // Show 8 for visualization
    const radius = 150;

    for (let i = 0; i < expertCount; i++) {
      const angle = (i / expertCount) * 2 * Math.PI;
      const x = width / 2 + Math.cos(angle) * radius;
      const y = height / 2 + Math.sin(angle) * radius;

      const expert = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      expert.setAttribute("cx", x.toString());
      expert.setAttribute("cy", y.toString());
      expert.setAttribute("r", "25");
      expert.setAttribute("fill", "url(#expertGradient2)");
      expert.setAttribute("stroke", "#10b981");
      expert.setAttribute("stroke-width", "2");
      expert.setAttribute("opacity", "0.7");
      expertsGroup.appendChild(expert);

      // Add connections (animated)
      const connection = document.createElementNS("http://www.w3.org/2000/svg", "line");
      connection.setAttribute("x1", (width / 2).toString());
      connection.setAttribute("y1", (height / 2).toString());
      connection.setAttribute("x2", x.toString());
      connection.setAttribute("y2", y.toString());
      connection.setAttribute("stroke", "#3b82f6");
      connection.setAttribute("stroke-width", "2");
      connection.setAttribute("opacity", "0.3");
      connectionsGroup.appendChild(connection);
    }

    // Animate experts and connections
    let animationFrame = 0;
    const animate = () => {
      animationFrame++;

      // Animate expert opacity (simulating activation)
      const experts = expertsGroup.querySelectorAll("circle");
      experts.forEach((expert, index) => {
        const opacity = 0.3 + 0.4 * Math.sin(animationFrame * 0.02 + index);
        expert.setAttribute("opacity", opacity.toString());
      });

      // Animate connections
      const connections = connectionsGroup.querySelectorAll("line");
      connections.forEach((connection, index) => {
        const opacity = 0.1 + 0.3 * Math.sin(animationFrame * 0.03 + index);
        connection.setAttribute("opacity", opacity.toString());
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Add labels
    const inputLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    inputLabel.textContent = "Input Query";
    inputLabel.setAttribute("x", (width / 2).toString());
    inputLabel.setAttribute("y", "30");
    inputLabel.setAttribute("text-anchor", "middle");
    inputLabel.setAttribute("fill", "currentColor");
    inputLabel.setAttribute("font-size", "14");
    svg.appendChild(inputLabel);

    const outputLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    outputLabel.textContent = "Expert Response";
    outputLabel.setAttribute("x", (width / 2).toString());
    outputLabel.setAttribute("y", (height - 10).toString());
    outputLabel.setAttribute("text-anchor", "middle");
    outputLabel.setAttribute("fill", "currentColor");
    outputLabel.setAttribute("font-size", "14");
    svg.appendChild(outputLabel);

  }, []);

  return (
    <div className="w-full flex justify-center">
      <svg
        ref={svgRef}
        width="600"
        height="400"
        viewBox="0 0 600 400"
        className="border border-border/50 rounded-lg bg-card/20"
      />
    </div>
  );
}
