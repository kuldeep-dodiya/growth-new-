import { useEffect, useRef, useState } from 'react';

interface UseImagePreloaderReturn {
  images: HTMLImageElement[];
  isLoaded: boolean;
  loadedCount: number;
}

export function useImagePreloader(
  frameCount: number,
  pathPrefix: string,
  pathSuffix: string = '.jpg',
  startIndex: number = 1
): UseImagePreloaderReturn {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = startIndex; i <= frameCount; i++) {
      const img = new Image();
      // Pad frame number to 3 digits: 001, 002, ..., 152
      const frameNum = String(i).padStart(3, '0');
      img.src = `${pathPrefix}${frameNum}${pathSuffix}`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frameCount) {
          imagesRef.current = images;
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frameCount) {
          imagesRef.current = images;
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [frameCount, pathPrefix, pathSuffix, startIndex]);

  return {
    images: imagesRef.current,
    isLoaded,
    loadedCount,
  };
}
