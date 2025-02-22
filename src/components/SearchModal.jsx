import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Dialog, DialogContent } from "./ui/Dialog"

export function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="h-14 w-full bg-white pl-4 pr-12 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close search</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

