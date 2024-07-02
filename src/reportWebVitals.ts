import type { Metric } from 'web-vitals';

export type { Metric };

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
    if (onPerfEntry) {
        import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
            onCLS(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
