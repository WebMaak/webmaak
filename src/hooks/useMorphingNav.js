import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

const useMorphingNav = (navRef) => {
  const controls = useAnimation();
  const pathRef = useRef(null);

  useEffect(() => {
    const calculatePath = () => {
      const navNode = navRef.current;
      if (!navNode || !pathRef.current) return;

      const navItemsContainer = navNode.querySelector('.navbar_container');
      if (!navItemsContainer) return;

      const children = Array.from(navItemsContainer.children);
      const firstItem = children.find(el => el.offsetWidth > 0 && el.offsetHeight > 0);
      const lastItem = children.reverse().find(el => el.offsetWidth > 0 && el.offsetHeight > 0);

      if (!firstItem || !lastItem) {
        const path = `M0,2 L${navNode.offsetWidth},2`;
        controls.start({ d: path });
        return;
      }

      const navHeight = navNode.offsetHeight;
      const startX = firstItem.offsetLeft;
      const endX = lastItem.offsetLeft + lastItem.offsetWidth;

      const padding = 20;
      const dipHeight = navHeight - 10;
      const controlPointOffset = 20;

      const pathStartX = startX - padding;
      const pathEndX = endX + padding;
      
      const path = `M0,2 L${pathStartX},2 C${pathStartX + controlPointOffset},2 ${pathStartX + controlPointOffset},${dipHeight} ${pathStartX + controlPointOffset + 15},${dipHeight} L${pathEndX - controlPointOffset - 15},${dipHeight} C${pathEndX - controlPointOffset},${dipHeight} ${pathEndX - controlPointOffset},2 ${pathEndX},2 L${navNode.offsetWidth},2`;
      
      controls.start({
        d: path,
        transition: { type: 'spring', stiffness: 200, damping: 25 },
      });
    };

    const timer = setTimeout(calculatePath, 100);
    window.addEventListener('resize', calculatePath);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePath);
    };
  }, [navRef, controls]);

  return { pathRef, controls };
};

export default useMorphingNav;
