import { useEffect, useRef, MutableRefObject, useCallback } from 'react';

interface Props {
  target: MutableRefObject<Element | null>;
  onIntersect: () => void; // target 교차하는 상태에서 호출
  rootMargin?: string; // 교차지점 계산할 때 추가 여백 지정
  enabled?: boolean; // intersection observer의 사용 여부 지정
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  rootMargin = '40px',
  enabled = true,
}: Props) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const disconnectObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!enabled) {
      disconnectObserver();
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onIntersect(),
      {
        rootMargin,
      },
    );

    const node = target.current;
    if (node) {
      observerRef.current.observe(node);
    }
  }, [enabled, disconnectObserver, onIntersect, rootMargin, target]);
};

export default useIntersectionObserver;
