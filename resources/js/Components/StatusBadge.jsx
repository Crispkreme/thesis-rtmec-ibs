export default function StatusBadge({ status }) {

    const spanClass = status.toLowerCase() === 'available' 
        ? 'inline-flex items-center px-2 py-1 rounded-full text-white bg-green-500' 
        : 'inline-flex items-center px-2 py-1 rounded-full text-white bg-red-500';

    const svgClass = 'w-2 h-2 mr-2';

    return (
        <span className={spanClass}>
            <svg className={svgClass} viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
            </svg>
            {status}
        </span>
    );
}