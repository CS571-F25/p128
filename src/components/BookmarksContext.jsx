import { createContext, useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BookmarksContext = createContext(null);
const storageKey = "bookmarks";

export default function BookmarksProvider({ children }) {
    const [bookmarks, setBookmarks] = useState([]);

    // Sets and gets info from localStorage about bookmarks info
    useEffect(() => {
      const saved = localStorage.getItem(storageKey);
        if (saved) {
          setBookmarks(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(bookmarks));
    }, [bookmarks]);

    function toggleBookmark(item) {
      setBookmarks(prev => {
        const exists = prev.find(b => b.id === item.id);
        if (exists) {
          return prev.filter(b => b.id !== item.id);
        }
        return [...prev, item];
    });
  }

    const value = { bookmarks, toggleBookmark };
  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const ctx = useContext(BookmarksContext);
  if (!ctx) {
    throw new Error("useBookmarks must be used inside BookmarksProvider");
  }
  return ctx;
}

// Reusable button component for any page/section
export function BookmarkButton({ id, label, to, variant = "outline-secondary", size = "sm", className }) {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isSaved = bookmarks.some(b => b.id === id);

  return (
    <Button variant={isSaved ? "warning" : variant} size={size} className={className} onClick={() => toggleBookmark({ id, label, to })}>
      {isSaved ? "Bookmarked" : "Bookmark"}
    </Button>
  );
}
