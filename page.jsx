"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const UserIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const BriefcaseIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
const LayersIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
);
const ServerIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
);
const DatabaseIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
);
const SpreadsheetIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M12 13v8" /></svg>
);
const BotIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z" /><path d="M9 14h.01" /><path d="M15 14h.01" /><path d="M9 18h6" /></svg>
);
const SparklesIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></svg>
);
const BuildingIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
);
const ClockIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const GraduationCapIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);
const AwardIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
);
const MailIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const PhoneIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
);
const LinkedinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
const MapPinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const CopyIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);
const CheckIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const ExternalLinkIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
);
const CloseIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
const ArrowUpIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
);
const ChevronLeftIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
);
const ChevronRightIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
);
const TrendingUpIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const ShieldIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const RocketIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
);
const GlobeIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);
const FileTextIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
);
const ActivityIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);

const MobileSwiper = ({ children, desktopGridClass = "", cardWidthMobile = "85vw", id = "swiper" }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mobile-swiper-wrapper" id={id}>
      <div
        ref={containerRef}
        onScroll={() => {
          if (!containerRef.current) return;
          const el = containerRef.current;
          const cardWidth = (el.children[0]?.clientWidth || 0.85 * el.offsetWidth) + 14;
          setActiveIndex(Math.min(Math.max(Math.round(el.scrollLeft / cardWidth), 0), children.length - 1));
        }}
        className={`mobile-swiper-container ${desktopGridClass}`}
      >
        {React.Children.map(children, (child, idx) => (
          <div className="mobile-swiper-slide" style={{ "--mobile-card-w": cardWidthMobile }} key={idx}>
            {child}
          </div>
        ))}
      </div>
      <div className="swiper-pagination-dots" aria-hidden="true">
        {children.map((_, idx) => (
          <button
            key={idx}
            className={`swiper-dot ${activeIndex === idx ? "active" : ""}`}
            onClick={() => {
              if (!containerRef.current) return;
              const slide = containerRef.current.children[idx];
              if (slide) {
                slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                setActiveIndex(idx);
              }
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ResponsiveCardSwiper = ({ children, id = "card-swiper", className = "", cardWidthMobile = "82vw", autoplay = false, autoplayInterval = 3500 }) => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const totalItems = React.Children.count(children);

  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
    const firstSlide = trackRef.current.children[0];
    if (firstSlide) {
      setCurrentIndex(Math.min(Math.max(Math.round(scrollLeft / (firstSlide.offsetWidth + 18)), 0), totalItems - 1));
    }
  }, [totalItems]);

  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0;
    setCurrentIndex(0);
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState, totalItems]);

  const scrollByDirection = useCallback((direction) => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const firstSlide = el.children[0];
    const step = firstSlide ? (firstSlide.offsetWidth + 18) * 1.2 : 0.75 * el.clientWidth;
    if (direction === "right" && el.scrollLeft >= el.scrollWidth - el.clientWidth - 16) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!autoplay || isPaused || isDragging || totalItems <= 1) return;
    const timer = setInterval(() => scrollByDirection("right"), autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, isPaused, isDragging, totalItems, scrollByDirection]);

  const stopDragging = () => setIsDragging(false);

  if (totalItems === 0) return null;

  return (
    <div
      className={`responsive-card-swiper ${className}`}
      id={id}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="swiper-header-controls">
        <div className="swiper-item-counter">
          <span>Showing</span>
          <span className="counter-active">{Math.min(currentIndex + 1, totalItems)}</span>
          <span>of {totalItems}</span>
          {autoplay && <span className="auto-pulse-indicator" title="Autoplay Active" />}
        </div>
        <div className="swiper-arrow-controls">
          <button type="button" className="swiper-arrow-btn swiper-arrow-prev" onClick={() => scrollByDirection("left")} disabled={!canScrollLeft} aria-label="Previous slide">
            <ChevronLeftIcon size={18} />
          </button>
          <button type="button" className="swiper-arrow-btn swiper-arrow-next" onClick={() => scrollByDirection("right")} disabled={!canScrollRight} aria-label="Next slide">
            <ChevronRightIcon size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateScrollState}
        onMouseDown={(e) => {
          if (!trackRef.current) return;
          setIsDragging(true);
          setStartX(e.pageX - trackRef.current.offsetLeft);
          setScrollStart(trackRef.current.scrollLeft);
        }}
        onMouseMove={(e) => {
          if (!isDragging || !trackRef.current) return;
          e.preventDefault();
          const currentX = e.pageX - trackRef.current.offsetLeft;
          trackRef.current.scrollLeft = scrollStart - (currentX - startX) * 1.5;
        }}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className={`swiper-track-container ${isDragging ? "is-dragging" : ""}`}
      >
        {React.Children.map(children, (child, idx) => (
          <div className="swiper-slide-item" style={{ "--mobile-card-w": cardWidthMobile }} key={idx}>
            {child}
          </div>
        ))}
      </div>

      <div className="swiper-dots-nav" aria-label="Slide navigation">
        {Array.from({ length: totalItems }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`swiper-dot-indicator ${currentIndex === idx ? "active" : ""}`}
            onClick={() => {
              if (!trackRef.current) return;
              const slide = trackRef.current.children[idx];
              if (slide) {
                slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                setCurrentIndex(idx);
              }
            }}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [skillCategory, setSkillCategory] = useState("all");
  const [searchQuery] = useState("");
  const [expFilter, setExpFilter] = useState("all");
  const [selectedExp, setSelectedExp] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const skillsData = [
    { name: "Network Support & L1/L2 Troubleshooting", category: "infra", level: "Core Expert", proficiency: 95, icon: <ServerIcon size={22} />, description: "End-to-end L1/L2 network support, LAN/WAN connectivity troubleshooting, switch port & patch panel verification, and rapid incident resolution." },
    { name: "OSI Model & TCP/IP Protocol Suite", category: "infra", level: "Core Expert", proficiency: 94, icon: <LayersIcon size={22} />, description: "Structured bottom-up Layer 1–7 fault isolation, TCP 3-way handshake analysis, TCP vs. UDP transport diagnostics, MAC framing, and IP packet routing." },
    { name: "DHCP (DORA), DNS, ARP & NAT", category: "infra", level: "Advanced", proficiency: 92, icon: <ShieldIcon size={22} />, description: "Diagnosing DHCP lease failures and APIPA (169.254.x.x) fallbacks, DNS name resolution (Port 53), MAC-to-IP ARP table conflicts, and NAT translations." },
    { name: "IPv4 Subnetting & VLAN Segmentation", category: "infra", level: "Advanced", proficiency: 90, icon: <ServerIcon size={22} />, description: "CIDR subnet calculation (/24, /26, /30), private vs. public IP addressing, logical broadcast domain segmentation via VLANs, and inter-VLAN routing concepts." },
    { name: "CLI Network Diagnostics (Ping, Tracert, Nslookup)", category: "infra", level: "Specialist", proficiency: 96, icon: <ActivityIcon size={22} />, description: "Command-line fault isolation using ipconfig /all, ping, tracert, nslookup, arp -a, and netstat -ano to pinpoint packet loss, latency hops, and port states." },
    { name: "VPN, Wi-Fi & Endpoint Connectivity", category: "infra", level: "Advanced", proficiency: 91, icon: <GlobeIcon size={22} />, description: "Supporting enterprise VPN clients, remote access authentication, Wi-Fi SSID/channel interference checks, NIC driver configuration, and endpoint firewall rules." },
    { name: "ISP Link & Vendor SLA Management", category: "infra", level: "Advanced", proficiency: 92, icon: <ShieldIcon size={22} />, description: "Monitoring leased-line and ISP link uptime, coordinating link-down escalations, managing hardware maintenance contracts, and enforcing strict vendor SLAs." },
    { name: "ITSM Ticketing & RCA Documentation", category: "infra", level: "Specialist", proficiency: 95, icon: <FileTextIcon size={22} />, description: "Managing support ticket queues, prioritizing P1/P2 network incidents, capturing diagnostic logs for L2/L3 escalation, and authoring Root Cause Analysis (RCA) reports." },
    { name: "Advanced Microsoft Excel", category: "data", level: "Specialist", proficiency: 98, icon: <SpreadsheetIcon size={22} />, description: "Mastery of complex nested logic, XLOOKUP, INDEX/MATCH, dynamic Pivot Tables, data validation, conditional modeling, and automated workbooks." },
    { name: "Management Information Systems (MIS)", category: "data", level: "Specialist", proficiency: 96, icon: <DatabaseIcon size={22} />, description: "Designing structured operational MIS reports, SLA/KPI trackers, project reconciliation dashboards, and weekly/monthly performance summaries for leadership." },
    { name: "SQL & Database Querying", category: "data", level: "Proficient", proficiency: 85, icon: <DatabaseIcon size={22} />, description: "Writing structured SQL queries, joins, filtering, and data validation checks to audit records, verify member eligibility, and extract operational insights." },
    { name: "VBA Macros & DAX Data Modeling", category: "data", level: "Proficient", proficiency: 86, icon: <SpreadsheetIcon size={22} />, description: "Automating recurring Excel reports, mail merges, dispatch tracking, and multi-table semantic data models using VBA macros and DAX functions." },
    { name: "Data Quality Auditing & Analysis", category: "data", level: "Advanced", proficiency: 92, icon: <TrendingUpIcon size={22} />, description: "Extracting actionable insights from incident and process logs, conducting rigorous quality audits, identifying bottlenecks, and driving error trend reduction." },
    { name: "Prompt Engineering & GenAI", category: "ai", level: "Advanced Practitioner", proficiency: 94, icon: <BotIcon size={22} />, description: "Crafting structured multi-turn prompts for process automation, root-cause syntheses, technical ticket drafting, and intelligent data extraction." },
    { name: "Microsoft Copilot & AI Productivity", category: "ai", level: "Advanced", proficiency: 92, icon: <SparklesIcon size={22} />, description: "Leveraging Copilot across Excel, Word, and enterprise communication channels to multiply administrative, analytical, and technical support velocity." },
    { name: "Process Operations & SOP Governance", category: "pmo", level: "Specialist", proficiency: 95, icon: <ActivityIcon size={22} />, description: "Managing high-volume operational workflows, standardized operating procedures (SOPs), quality auditing, and strict SLA turnaround." },
    { name: "PMO & Project Portfolio Coordination", category: "pmo", level: "Proficient", proficiency: 90, icon: <LayersIcon size={22} />, description: "Project scope tracking, milestone governance, task scheduling, cross-functional delivery, and operational execution standards across departments." },
    { name: "Corporate & Stakeholder Communication", category: "strategy", level: "Advanced", proficiency: 90, icon: <GlobeIcon size={22} />, description: "Bridging technical network/IT teams with non-technical business users, executive status reporting, CRM, and structured vendor negotiation." },
  ];

  const experienceData = [
    {
      id: "advantmed-network",
      role: "Network Support",
      company: "Advantmed India LLP",
      period: "Jun 2026 – Present",
      isCurrent: true,
      type: "it",
      icon: <ServerIcon size={22} />,
      summary: "Leading L1/L2 network support, LAN/WAN connectivity troubleshooting, endpoint & hardware lifecycle coordination, and multi-vendor ISP SLA adherence across enterprise operations.",
      highlights: [
        "Provide hands-on Network Support and L1/L2 troubleshooting across LAN/WAN connectivity, Wi-Fi, VPN access, and endpoint hardware to ensure rapid ticket resolution.",
        "Execute structured OSI/TCP-IP fault isolation using CLI diagnostics (ping, tracert, ipconfig /all, nslookup, arp -a, netstat) to resolve DNS, DHCP (APIPA), and gateway issues.",
        "Coordinate with ISPs and third-party IT vendors for link-down escalations, contract milestone checks, and preventive maintenance to preserve strict SLA uptime.",
        "Use Microsoft Copilot, prompt engineering, and automated Excel/MIS trackers to streamline incident logging, asset inventory, and Root Cause Analysis (RCA) reporting."
      ],
      skills: ["Network Support", "TCP/IP & OSI Troubleshooting", "DNS / DHCP / VPN", "CLI Diagnostics", "ISP & Vendor SLAs", "Microsoft Copilot"]
    },
    {
      id: "advantmed-support",
      role: "Support Executive",
      company: "Advantmed India LLP",
      period: "Aug 2023 – Jun 2026",
      isCurrent: false,
      type: "operations",
      icon: <BuildingIcon size={22} />,
      summary: "Drove day-to-day operational execution in a fast-paced enterprise environment, managing data validation, quality audits, and automated MIS reconciliation dashboards.",
      highlights: [
        "Managed member eligibility data validation, mail merges, letter dispatch tracking, and remote calling agent production reports with high accuracy and tight turnaround times.",
        "Built and maintained project reconciliation dashboards and executive MIS analytics using Advanced Excel, SQL queries, and VBA automation.",
        "Conducted rigorous data quality audits and worked in direct synchronization with cross-functional stakeholders to resolve operational bottlenecks.",
        "Formulated standardized tracking mechanisms that decreased recurring operational friction points."
      ],
      skills: ["Advanced Excel", "SQL & VBA", "MIS Reporting", "Quality Auditing", "Data Validation", "Process Operations"]
    },
    {
      id: "rentokil",
      role: "Sr. Executive – Operation",
      company: "Rentokil Initial",
      period: "Nov 2022 – Sep 2023",
      isCurrent: false,
      type: "operations",
      icon: <ActivityIcon size={22} />,
      summary: "Handled project portfolio, inventory oversight, and PMO-related operational execution, managing stakeholder communication and service delivery across corporate units.",
      highlights: [
        "Directed operational coordination, inventory department oversight, and on-ground execution activities within a globally recognized service enterprise.",
        "Worked closely with project portfolio management (PPM) frameworks and PMO-related operational workflows.",
        "Coordinated cross-departmental tasks and maintained transparent, continuous communication channels across internal and external stakeholders.",
        "Monitored key performance metrics and prepared regular operational status briefings for executive leadership."
      ],
      skills: ["PMO Coordination", "Inventory Oversight", "Operational Execution", "Cross-Functional Sync", "Reporting"]
    },
    {
      id: "ascendum",
      role: "Process Associate",
      company: "ASCENDUM KPS",
      period: "Dec 2021 – Nov 2022",
      isCurrent: false,
      type: "operations",
      icon: <SpreadsheetIcon size={22} />,
      summary: "Specialized in structured knowledge-process outsourcing (KPO) mortgage operations with heavy emphasis on property document validation, Microsoft Excel processing, and audit compliance.",
      highlights: [
        "Executed structured KPO workflows and validated property/land history documentation while strictly adhering to quality standards and client turnaround SLAs.",
        "Harnessed advanced Microsoft Excel formulas, data hygiene, and validation techniques for high-volume operational tasks.",
        "Supported daily and weekly process handoffs, identifying anomalies and recommending procedural refinements."
      ],
      skills: ["Microsoft Excel", "KPO Operations", "Document Validation", "Data Verification", "SLA Delivery"]
    },
    {
      id: "lic",
      role: "Life Insurance Specialist",
      company: "Life Insurance Corporation of India (LIC)",
      period: "Mar 2019 – Jan 2022",
      isCurrent: false,
      type: "business",
      icon: <BriefcaseIcon size={22} />,
      summary: "Developed foundational customer relationship management, regulatory compliance, and client advisory expertise.",
      highlights: [
        "Conducted customer-centric consulting, assessing client needs and advising on policy coverage and regulatory compliance.",
        "Developed deep expertise in client relationship management (CRM), policy retention, and long-term business development.",
        "Maintained accurate customer financial records, renewals tracking, and comprehensive client service support."
      ],
      skills: ["CRM", "Business Development", "Regulatory Compliance", "Relationship Management"]
    },
    {
      id: "shree-bhairav",
      role: "Founder",
      company: "Shree Bhairav Traders",
      period: "Apr 2024 – Mar 2025",
      isCurrent: false,
      type: "business",
      icon: <RocketIcon size={22} />,
      summary: "Spearheaded an entrepreneurial trading initiative, overseeing supply chain logistics, customer acquisition, vendor negotiations, and financial reconciliation.",
      highlights: [
        "Founded and operated a self-employed commercial trading venture, taking full ownership of P&L, inventory, and logistics.",
        "Managed end-to-end customer relationships, vendor contract negotiation, marketing outreach, and trade fulfillment.",
        "Handled operational coordination, invoice management, cash flow tracking, and cross-party business communication."
      ],
      skills: ["Entrepreneurship", "Vendor Negotiation", "Logistics & Supply", "Business Communication", "P&L Management"]
    }
  ];

  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, { threshold: 0.1 });
    animatedElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of ["about", "skills", "experience", "contact"]) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} copied to clipboard!`);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCat = skillCategory === "all" || skill.category === skillCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredExp = experienceData.filter((exp) => expFilter === "all" || (expFilter === "it" ? exp.type === "it" : expFilter === "operations" ? exp.type === "operations" : exp.type === "business"));

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <a href="#hero" className="nav-brand">
              <Image src="/Media (2).png" alt="Rahul Prajapati" width={40} height={40} className="brand-avatar-mini" priority />
              <span>Rahul Prajapati</span>
            </a>
            <nav className="nav-menu">
              <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`}><UserIcon size={16} /><span>About</span></a>
              <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`}><LayersIcon size={16} /><span>Skills</span></a>
              <a href="#experience" className={`nav-link ${activeSection === "experience" ? "active" : ""}`}><BriefcaseIcon size={16} /><span>Experience</span></a>
              <a href="#contact" className={`nav-link ${activeSection === "contact" ? "active" : ""}`}><MailIcon size={16} /><span>Contact</span></a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-text-col" data-aos="fade-right">
                <div className="hero-badge-wrap">
                  <div className="status-pill">
                    <span className="pulse-dot" />
                    <span className="status-pill-text">Available for Global Roles • Network Support & MIS Specialist</span>
                  </div>
                </div>
                <h1 className="hero-title">Hi, I&apos;m <span className="gradient-text">Rahul Prajapati</span></h1>
                <p className="hero-subtitle">Network Support | LAN/WAN & L1/L2 Troubleshooting | TCP/IP, DNS & DHCP | SQL, Excel & MIS | AI & Process Automation</p>
                <p className="hero-lead">
                  Currently handling enterprise Network Support, L1/L2 connectivity troubleshooting, ISP/vendor SLA adherence, and AI-enabled process operations at <strong style={{ color: "var(--text-heading)" }}>Advantmed India LLP</strong>. Bringing a structured OSI/TCP-IP diagnostic, analytical, and process-focused approach to network uptime, reporting, and enterprise systems.
                </p>
                <div className="hero-ctas">
                  <a href="#experience" className="btn btn-primary"><BriefcaseIcon size={17} /><span>View Experience</span></a>
                  <a href="https://linkedin.com/in/rahul-prajapati-619b37244" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><LinkedinIcon size={17} /><span>LinkedIn</span></a>
                </div>
              </div>

              <div className="hero-visual-col" data-aos="fade-left" data-aos-delay="100">
                <div className="hero-visual-card">
                  <div className="hero-floating-badge floating-badge-top">
                    <div className="floating-badge-icon-box"><ServerIcon size={18} /></div>
                    <div>
                      <div className="floating-badge-title">Current Role</div>
                      <div className="floating-badge-val">Network Support</div>
                    </div>
                  </div>
                  <div className="hero-img-container">
                    <Image src="/Media (2).png" alt="Rahul Prajapati - Network Support" width={500} height={500} className="hero-img" priority />
                  </div>
                  <div className="hero-floating-badge floating-badge-bottom">
                    <div className="floating-badge-icon-box"><ActivityIcon size={18} /></div>
                    <div>
                      <div className="floating-badge-title">Core Diagnostics</div>
                      <div className="floating-badge-val">TCP/IP • DNS/DHCP • CLI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" style={{ marginTop: "40px" }}>
              <MobileSwiper desktopGridClass="kpi-grid" id="kpi-swiper" cardWidthMobile="72vw">
                <div className="kpi-card"><div className="kpi-icon-box"><ClockIcon size={26} /></div><div><div className="kpi-number">7+ Years</div><div className="kpi-label">Mar 2019 – Present</div></div></div>
                <div className="kpi-card"><div className="kpi-icon-box"><BuildingIcon size={26} /></div><div><div className="kpi-number">6 Roles</div><div className="kpi-label">5 Leading Organizations</div></div></div>
                <div className="kpi-card"><div className="kpi-icon-box"><LayersIcon size={26} /></div><div><div className="kpi-number">18 Skills</div><div className="kpi-label">Network, SQL, Excel & AI</div></div></div>
                <div className="kpi-card"><div className="kpi-icon-box"><GlobeIcon size={26} /></div><div><div className="kpi-number">Global Ready</div><div className="kpi-label">Open to International Relocation</div></div></div>
              </MobileSwiper>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-tag"><UserIcon size={14} /><span>Executive Background</span></span>
              <h2 className="section-title">About <span className="gradient-text">Rahul Prajapati</span></h2>
              <p className="section-desc">
                Network Support and operations professional with experience across L1/L2 network troubleshooting, LAN/WAN connectivity, ISP/vendor SLA management, data/MIS support, SQL & Excel analytics, and process operations. Currently working in Network Support at Advantmed India LLP, combining structured OSI/TCP-IP diagnostics with advanced Excel, MIS, prompt engineering, and AI productivity tools.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <ResponsiveCardSwiper id="about-pillars" cardWidthMobile="85vw" autoplay autoplayInterval={3200}>
                <div className="glass-card pillar-card">
                  <div className="pillar-header"><div className="pillar-icon-box"><ServerIcon size={22} /></div><div><h3 className="pillar-title">Network Support & L1/L2 Diagnostics</h3></div></div>
                  <p>Specialized in bottom-up OSI & TCP/IP troubleshooting, resolving LAN/WAN connectivity, DNS/DHCP lease failures, VLAN segmentation, and ISP vendor SLAs to prevent network downtime.</p>
                  <div className="pillar-tags"><span className="pillar-tag">OSI & TCP/IP</span><span className="pillar-tag">DNS / DHCP / ARP</span><span className="pillar-tag">CLI Diagnostics</span></div>
                </div>

                <div className="glass-card pillar-card">
                  <div className="pillar-header"><div className="pillar-icon-box"><SpreadsheetIcon size={22} /></div><div><h3 className="pillar-title">Excel, SQL, VBA & MIS Intelligence</h3></div></div>
                  <p>Expertise in transforming raw incident and operational logs into high-clarity executive MIS dashboards, SQL data validations, and VBA-automated reconciliation reports.</p>
                  <div className="pillar-tags"><span className="pillar-tag">XLOOKUP / Pivot</span><span className="pillar-tag">SQL & VBA</span><span className="pillar-tag">Quality Auditing</span></div>
                </div>

                <div className="glass-card pillar-card">
                  <div className="pillar-header"><div className="pillar-icon-box"><BotIcon size={22} /></div><div><h3 className="pillar-title">AI Productivity & Prompt Engineering</h3></div></div>
                  <p>Active user of Microsoft Copilot and advanced prompt engineering to drastically cut administrative overhead, automate RCA ticket briefs, and synthesize complex operational data.</p>
                  <div className="pillar-tags"><span className="pillar-tag">Microsoft Copilot</span><span className="pillar-tag">Context Prompting</span><span className="pillar-tag">Workflow Acceleration</span></div>
                </div>

                <div className="glass-card pillar-card">
                  <div className="pillar-header"><div className="pillar-icon-box"><LayersIcon size={22} /></div><div><h3 className="pillar-title">SLA Governance & Stakeholder Sync</h3></div></div>
                  <p>Cross-functional background bridging network/IT teams, operations managers, external ISPs/vendors, and executive sponsors to ensure incidents and projects resolve within SLA.</p>
                  <div className="pillar-tags"><span className="pillar-tag">Vendor SLAs</span><span className="pillar-tag">RCA Documentation</span><span className="pillar-tag">Cross-functional Sync</span></div>
                </div>
              </ResponsiveCardSwiper>
            </div>

            <div className="about-credentials-grid" data-aos="fade-up" data-aos-delay="200">
              <div className="glass-card about-credential-card">
                <div className="pillar-icon-box"><GraduationCapIcon size={24} /></div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Bachelor of Arts (B.A.), Economics</h4>
                  <div style={{ color: "var(--accent-sky)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "8px" }}>Gujarat University, Ahmedabad • Mar 2019 – Jun 2021</div>
                  <span className="badge-first-class"><AwardIcon size={13} /><span>First Class Distinction</span></span>
                  <p style={{ fontSize: "0.875rem", marginTop: "10px" }}>Deep economic and statistical foundation empowering analytical decision-making and quantitative operational models.</p>
                </div>
              </div>

              <div className="glass-card about-credential-card">
                <div className="pillar-icon-box"><GlobeIcon size={24} /></div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Global Mobility & Relocation Readiness</h4>
                  <div style={{ color: "var(--accent-sky)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "8px" }}>Ready for International Deployments & Onsite Roles</div>
                  <span className="pillar-tag" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)" }}>Open to Relocate</span>
                  <p style={{ fontSize: "0.875rem", marginTop: "10px" }}>Actively open to opportunities across Middle East, Europe, Southeast Asia, North America, and major Indian tech hubs.</p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div className="pillar-icon-box" style={{ width: "42px", height: "42px" }}><ShieldIcon size={20} /></div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>CAREER FOCUS</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Core areas of specialization & continuous operational value</p>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="pillar-tag">Network Support</span>
                <span className="pillar-tag">L1/L2 Troubleshooting</span>
                <span className="pillar-tag">TCP/IP • DNS • DHCP</span>
                <span className="pillar-tag">Data / MIS / SQL</span>
                <span className="pillar-tag">ISP & Vendor SLAs</span>
                <span className="pillar-tag">AI-Enabled Productivity</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-tag"><LayersIcon size={14} /><span>Core Competencies</span></span>
              <h2 className="section-title">Network Support & <span className="gradient-text">Technical Skills</span></h2>
              <p className="section-desc">Complete 18-skill matrix covering L1/L2 network diagnostics, OSI/TCP-IP protocols, SQL & Excel MIS analytics, AI integration, and SLA governance.</p>
            </div>

            <div className="skills-filter-bar" data-aos="fade-up" data-aos-delay="100">
              <div className="skills-pills">
                <button className={`skill-filter-btn ${skillCategory === "all" ? "active" : ""}`} onClick={() => setSkillCategory("all")}><SparklesIcon size={15} /><span>All ({skillsData.length})</span></button>
                <button className={`skill-filter-btn ${skillCategory === "infra" ? "active" : ""}`} onClick={() => setSkillCategory("infra")}><ServerIcon size={15} /><span>Network Support & SLAs</span></button>
                <button className={`skill-filter-btn ${skillCategory === "data" ? "active" : ""}`} onClick={() => setSkillCategory("data")}><DatabaseIcon size={15} /><span>Data, SQL, VBA & MIS</span></button>
                <button className={`skill-filter-btn ${skillCategory === "ai" ? "active" : ""}`} onClick={() => setSkillCategory("ai")}><BotIcon size={15} /><span>AI & Productivity</span></button>
                <button className={`skill-filter-btn ${skillCategory === "pmo" ? "active" : ""}`} onClick={() => setSkillCategory("pmo")}><LayersIcon size={15} /><span>PMO & Operations</span></button>
                <button className={`skill-filter-btn ${skillCategory === "strategy" ? "active" : ""}`} onClick={() => setSkillCategory("strategy")}><UserIcon size={15} /><span>Communication & CRM</span></button>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <ResponsiveCardSwiper id="skills-swiper" cardWidthMobile="82vw" autoplay autoplayInterval={3500}>
                {filteredSkills.map((skill, idx) => (
                  <div className="skill-card" key={idx}>
                    <div className="skill-card-top">
                      <div className="skill-name-wrap">
                        <div className="skill-icon-box">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                    <p className="skill-desc">{skill.description}</p>
                    <div className="skill-progress-track">
                      <div className="skill-progress-bar" style={{ width: `${skill.proficiency}%` }} />
                    </div>
                  </div>
                ))}
              </ResponsiveCardSwiper>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-tag"><BriefcaseIcon size={14} /><span>Career History</span></span>
              <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
              <p className="section-desc">Demonstrated success across enterprise Network Support, MIS & SQL data operations, PMO environments, KPO organizations, and business development.</p>
            </div>

            <div className="timeline-tabs" data-aos="fade-up" data-aos-delay="100">
              <button className={`timeline-tab-btn ${expFilter === "all" ? "active" : ""}`} onClick={() => setExpFilter("all")}><BriefcaseIcon size={15} /><span>All Roles ({experienceData.length})</span></button>
              <button className={`timeline-tab-btn ${expFilter === "it" ? "active" : ""}`} onClick={() => setExpFilter("it")}><ServerIcon size={15} /><span>Network Support</span></button>
              <button className={`timeline-tab-btn ${expFilter === "operations" ? "active" : ""}`} onClick={() => setExpFilter("operations")}><ActivityIcon size={15} /><span>Operations, PMO & KPO</span></button>
              <button className={`timeline-tab-btn ${expFilter === "business" ? "active" : ""}`} onClick={() => setExpFilter("business")}><RocketIcon size={15} /><span>Business & Ventures</span></button>
            </div>

            <div className="desktop-timeline-only" data-aos="fade-up" data-aos-delay="150">
              <div className="timeline-container">
                {filteredExp.map((exp) => (
                  <div className="timeline-item" key={exp.id}>
                    <div className="timeline-marker">{exp.icon}</div>
                    <div className="exp-card exp-card-interactive" onClick={() => setSelectedExp(exp)} role="button" tabIndex={0}>
                      <div className="exp-header">
                        <div>
                          <h3 className="exp-role-title">{exp.role}</h3>
                          <div className="exp-company"><BuildingIcon size={16} /><span>{exp.company}</span></div>
                        </div>
                        <div>
                          <span className={`exp-period-badge ${exp.isCurrent ? "current" : ""}`}>
                            {exp.isCurrent && <span className="pulse-dot" />}
                            <ClockIcon size={14} />
                            <span>{exp.period}</span>
                          </span>
                        </div>
                      </div>
                      <p style={{ marginBottom: "14px", color: "var(--text-muted)" }}>{exp.summary}</p>
                      <ul className="exp-bullets">
                        {exp.highlights.slice(0, 2).map((bullet, idx) => (
                          <li className="exp-bullet-item" key={idx}>
                            <span className="exp-bullet-icon"><ChevronRightIcon size={15} /></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="exp-footer-row">
                        <div className="exp-tags">
                          {exp.skills.slice(0, 4).map((s, idx) => (<span className="exp-tag" key={idx}>{s}</span>))}
                          {exp.skills.length > 4 && <span className="exp-tag exp-tag-more">+{exp.skills.length - 4} more</span>}
                        </div>
                        <button type="button" className="exp-view-details-btn" onClick={(e) => { e.stopPropagation(); setSelectedExp(exp); }}>
                          <span>View Details</span><ExternalLinkIcon size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mobile-timeline-swiper-only">
              <MobileSwiper id="mobile-exp-swiper" cardWidthMobile="88vw">
                {filteredExp.map((exp) => (
                  <div className="exp-card exp-card-interactive" onClick={() => setSelectedExp(exp)} role="button" tabIndex={0} key={exp.id}>
                    <div className="exp-header">
                      <div>
                        <h3 className="exp-role-title">{exp.role}</h3>
                        <div className="exp-company"><BuildingIcon size={16} /><span>{exp.company}</span></div>
                      </div>
                      <div>
                        <span className={`exp-period-badge ${exp.isCurrent ? "current" : ""}`}>
                          {exp.isCurrent && <span className="pulse-dot" />}
                          <ClockIcon size={14} />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                    <p style={{ marginBottom: "14px", color: "var(--text-muted)" }}>{exp.summary}</p>
                    <ul className="exp-bullets">
                      {exp.highlights.slice(0, 2).map((bullet, idx) => (
                        <li className="exp-bullet-item" key={idx}>
                          <span className="exp-bullet-icon"><ChevronRightIcon size={15} /></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="exp-footer-row">
                      <div className="exp-tags">
                        {exp.skills.slice(0, 3).map((s, idx) => (<span className="exp-tag" key={idx}>{s}</span>))}
                      </div>
                      <button type="button" className="exp-view-details-btn" onClick={(e) => { e.stopPropagation(); setSelectedExp(exp); }}>
                        <span>Details</span><ExternalLinkIcon size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </MobileSwiper>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-tag"><PhoneIcon size={14} /><span>Direct Connection</span></span>
              <h2 className="section-title">Get In <span className="gradient-text">Touch Directly</span></h2>
              <p className="section-desc">Reach out directly via phone, WhatsApp, email, or LinkedIn to discuss Network Support, MIS leadership, or operations opportunities.</p>
            </div>

            <div className="contact-unified-layout" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-channels-grid">
                <div className="contact-channel-card">
                  <div className="channel-icon-pill email"><MailIcon size={22} /></div>
                  <div className="channel-info">
                    <div className="channel-label">Direct Email</div>
                    <a href="mailto:rp361133@gmail.com" className="channel-primary-val">rp361133@gmail.com</a>
                    <div className="channel-sub">Send job opportunities, interview requests, or official documentation.</div>
                  </div>
                  <div className="channel-btns">
                    <a href="mailto:rp361133@gmail.com" className="channel-action-btn primary"><MailIcon size={15} /><span>Compose</span></a>
                    <button className="channel-action-btn copy" onClick={() => copyToClipboard("rp361133@gmail.com", "Email")} title="Copy Email"><CopyIcon size={15} /></button>
                  </div>
                </div>

                <div className="contact-channel-card">
                  <div className="channel-icon-pill phone"><PhoneIcon size={22} /></div>
                  <div className="channel-info">
                    <div className="channel-label">Mobile Phone</div>
                    <a href="tel:+917874691098" className="channel-primary-val">+91 7874691098</a>
                    <div className="channel-sub">Available for phone discussions, recruiter calls, and initial screenings.</div>
                  </div>
                  <div className="channel-btns">
                    <a href="tel:+917874691098" className="channel-action-btn primary"><PhoneIcon size={15} /><span>Call</span></a>
                    <button className="channel-action-btn copy" onClick={() => copyToClipboard("7874691098", "Phone")} title="Copy Phone"><CopyIcon size={15} /></button>
                  </div>
                </div>

                <div className="contact-channel-card">
                  <div className="channel-icon-pill whatsapp"><WhatsAppIcon size={22} /></div>
                  <div className="channel-info">
                    <div className="channel-label">WhatsApp Messenger</div>
                    <div className="channel-primary-val">+91 7874691098</div>
                    <div className="channel-sub">Immediate text inquiries, quick schedule coordination, or file sharing.</div>
                  </div>
                  <div className="channel-btns">
                    <a href="https://wa.me/917874691098?text=Hi%20Rahul,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity." target="_blank" rel="noopener noreferrer" className="channel-action-btn whatsapp-btn">
                      <WhatsAppIcon size={15} /><span>Message</span>
                    </a>
                  </div>
                </div>

                <div className="contact-channel-card">
                  <div className="channel-icon-pill linkedin"><LinkedinIcon size={22} /></div>
                  <div className="channel-info">
                    <div className="channel-label">LinkedIn Profile</div>
                    <div className="channel-primary-val">rahul-prajapati-619b37244</div>
                    <div className="channel-sub">Recommendations, professional endorsements, and career connection.</div>
                  </div>
                  <div className="channel-btns">
                    <a href="https://linkedin.com/in/rahul-prajapati-619b37244" target="_blank" rel="noopener noreferrer" className="channel-action-btn linkedin-btn">
                      <ExternalLinkIcon size={15} /><span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-mobility-banner">
                <div className="mobility-icon-box"><MapPinIcon size={24} /></div>
                <div className="mobility-text">
                  <div className="mobility-badge"><span className="pulse-dot" /><span>GLOBAL MOBILITY READY</span></div>
                  <h3 className="mobility-heading">Based in Ahmedabad, Gujarat, India • Open to Relocation</h3>
                  <p className="mobility-desc">Prepared for international relocations and onsite deployments across the Middle East (Dubai/UAE, Saudi Arabia, Qatar), Europe, Southeast Asia, North America, and major tech hubs across India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        <a href="#about" className={`mobile-nav-tab ${activeSection === "about" ? "active" : ""}`} onClick={() => setActiveSection("about")}><div className="mobile-nav-icon-wrap"><UserIcon size={19} /></div><span>About</span></a>
        <a href="#skills" className={`mobile-nav-tab ${activeSection === "skills" ? "active" : ""}`} onClick={() => setActiveSection("skills")}><div className="mobile-nav-icon-wrap"><LayersIcon size={19} /></div><span>Skills</span></a>
        <a href="#experience" className={`mobile-nav-tab ${activeSection === "experience" ? "active" : ""}`} onClick={() => setActiveSection("experience")}><div className="mobile-nav-icon-wrap"><BriefcaseIcon size={19} /></div><span>Experience</span></a>
        <a href="#contact" className={`mobile-nav-tab ${activeSection === "contact" ? "active" : ""}`} onClick={() => setActiveSection("contact")}><div className="mobile-nav-icon-wrap"><PhoneIcon size={19} /></div><span>Contact</span></a>
      </nav>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-copy">© 2026 Rahul Prajapati • Network Support & MIS Operations Specialist. All rights reserved.</div>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
            <button className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUpIcon size={15} /><span>Top</span></button>
          </div>
        </div>
      </footer>

      {selectedExp && (
        <div className="exp-modal-backdrop" onClick={() => setSelectedExp(null)} role="dialog" aria-modal="true">
          <div className="exp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="exp-modal-close-btn" onClick={() => setSelectedExp(null)} aria-label="Close modal"><CloseIcon size={20} /></button>
            <div className="exp-modal-header">
              <div className="exp-modal-icon-wrap">{selectedExp.icon}</div>
              <div className="exp-modal-titles">
                <span className={`exp-period-badge ${selectedExp.isCurrent ? "current" : ""}`}>{selectedExp.isCurrent && <span className="pulse-dot" />}<ClockIcon size={14} /><span>{selectedExp.period}</span></span>
                <h3 className="exp-modal-role">{selectedExp.role}</h3>
                <div className="exp-modal-company"><BuildingIcon size={16} /><span>{selectedExp.company}</span></div>
              </div>
            </div>
            <div className="exp-modal-body">
              <div className="exp-modal-section">
                <h4 className="exp-modal-section-title">Overview & Impact</h4>
                <p className="exp-modal-summary">{selectedExp.summary}</p>
              </div>
              <div className="exp-modal-section">
                <h4 className="exp-modal-section-title">Key Responsibilities & Deliverables</h4>
                <ul className="exp-modal-bullets">
                  {selectedExp.highlights.map((item, idx) => (
                    <li className="exp-modal-bullet-item" key={idx}><span className="exp-bullet-icon"><ChevronRightIcon size={16} /></span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="exp-modal-section">
                <h4 className="exp-modal-section-title">Skills & Competencies Demonstrated</h4>
                <div className="exp-modal-tags">
                  {selectedExp.skills.map((s, idx) => (<span className="exp-tag" key={idx}>{s}</span>))}
                </div>
              </div>
            </div>
            <div className="exp-modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSelectedExp(null)}><span>Close</span></button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="toast-container">
          <CheckIcon size={18} color="var(--accent-emerald)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}