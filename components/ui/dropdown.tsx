"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
}

export function Dropdown({ trigger, items, className }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item: DropdownItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-lg z-50 overflow-hidden">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

