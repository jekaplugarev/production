import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: Element | DocumentFragment;
}

export const Portal: FC<PortalProps> = ({ children, element = document.body }) => (
    createPortal(children, element)
);

export default Portal;
