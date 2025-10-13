import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { X } from "lucide-react";

// A global image previewer that opens a modal when any <img> on the page is clicked.
// Add data-no-preview to an <img> to exclude it from previewing.
// This discourages downloads by disabling context menu and dragging on the preview.

const GlobalImagePreview: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string>("");
  const [alt, setAlt] = useState<string>("");

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find nearest IMG element if nested inside wrappers
      const img = target.closest("img") as HTMLImageElement | null;
      if (!img) return;

      // Exclude images marked as no-preview
      if (img.dataset.noPreview === "true") return;

      // Only left click
      if (e.button !== 0) return;

      // Prevent navigation/other handlers underneath and open preview
      e.preventDefault();
      e.stopPropagation();
      setSrc(img.currentSrc || img.src);
      setAlt(img.alt || "");
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    const onContext = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const img = t?.closest("img") as HTMLImageElement | null;
      if (!img) return;
      if (img.dataset.noPreview === "true") return;
      e.preventDefault();
    };
    const onDragStart = (e: DragEvent) => {
      const t = e.target as HTMLElement | null;
      const img = t as HTMLImageElement | null;
      if (img?.tagName?.toLowerCase() !== "img") return;
      if (img.dataset.noPreview === "true") return;
      e.preventDefault();
    };
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("dragstart", onDragStart);
    const onKey = (ke: KeyboardEvent) => {
      if (ke.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleContextMenu: React.MouseEventHandler = (e) => {
    // Prevent right-click save menu inside preview
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="bg-black/70" />
      <DialogContent className="max-w-4xl w-[95vw] p-0 border-0 bg-transparent shadow-none">
        <div className="relative w-full h-full flex items-center justify-center" onContextMenu={handleContextMenu}>
          {/* Close button */}
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/80 text-foreground border border-border backdrop-blur-sm shadow-sm hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X className="h-4 w-4" />
          </button>
          {/* Image container */}
          {src && (
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh] max-w-full object-contain select-none"
              draggable={false}
              onContextMenu={handleContextMenu}
            />
          )}
          {/* Helper text */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-black/50 text-white">
            Tap outside to close. Downloads are disabled.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalImagePreview;
