import { useEffect, useState, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";
interface PortalProps {
  children: ReactNode;
}
export const Portal = ({ children }: PortalProps): ReactPortal | null => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? createPortal(children, document.body) : null;
};
