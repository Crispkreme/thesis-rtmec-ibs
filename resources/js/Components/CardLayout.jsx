export default function CardLayout({ title, description, children }) {
    return (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                {title}
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 pb-10">
                {description}
            </p>
            {children}
        </div>
    );
}