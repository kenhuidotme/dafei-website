import { forwardRef, useState, useRef, useEffect } from "react"
import { useLocation, useNavigation } from "@remix-run/react"
import cx from "clsx"

/**
 * An enhanced `<details>` component that's intended to be used as a menu (a bit
 * like a menu-button).
 */
export const DetailsMenu = forwardRef<
  HTMLDetailsElement,
  React.ComponentPropsWithRef<"details">
>(({ ...props }, forwardedRef) => {
  const { onToggle, onMouseDown, onTouchStart, onFocus, open, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigation = useNavigation()
  const clickRef = useRef<boolean>(false)
  const focusRef = useRef<boolean>(false)

  useEffect(() => {
    if (navigation.state === "submitting") {
      setIsOpen(false)
    }
  }, [navigation.state])

  useEffect(() => {
    setIsOpen(false)
  }, [location.key])

  useEffect(() => {
    if (isOpen) {
      const clickHandler = () => {
        if (!clickRef.current) setIsOpen(false)
        clickRef.current = false
      }
      const focusHandler = () => {
        if (!focusRef.current) setIsOpen(false)
        focusRef.current = false
      }
      document.addEventListener("mousedown", clickHandler)
      document.addEventListener("touchstart", clickHandler)
      document.addEventListener("focusin", focusHandler)
      return () => {
        document.removeEventListener("mousedown", clickHandler)
        document.removeEventListener("touchstart", clickHandler)
        document.removeEventListener("focusin", focusHandler)
      }
    }
  }, [isOpen])

  return (
    <details
      ref={forwardedRef}
      open={open ?? isOpen}
      onToggle={(event) => {
        onToggle && onToggle(event)
        if (event.defaultPrevented) return
        setIsOpen(event.currentTarget.open)
      }}
      onMouseDown={(event) => {
        onMouseDown && onMouseDown(event)
        if (event.defaultPrevented) return
        if (isOpen) clickRef.current = true
      }}
      onTouchStart={(event) => {
        onTouchStart && onTouchStart(event)
        if (event.defaultPrevented) return
        if (isOpen) clickRef.current = true
      }}
      onFocus={(event) => {
        onFocus && onFocus(event)
        if (event.defaultPrevented) return
        if (isOpen) focusRef.current = true
      }}
      {...rest}
    />
  )
})
DetailsMenu.displayName = "DetailsMenu"

export function DetailsPopup({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute right-0 z-20">
      <div
        className={cx(
          "relative top-1 w-36",
          "rounded-md border p-1 shadow-md",
          "border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900",
        )}
      >
        {children}
      </div>
    </div>
  )
}
