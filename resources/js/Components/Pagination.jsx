import { Link } from '@inertiajs/react';

export default function Pagination({ meta }) {
    return (
        <nav className="text-center mt-4">
            <ul className="pagination">
                {meta.links.prev && (
                    <li className="page-item">
                        <Link href={meta.links.prev} className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo; Previous</span>
                        </Link>
                    </li>
                )}

                {meta.links.next && (
                    <li className="page-item">
                        <Link href={meta.links.next} className="page-link" aria-label="Next">
                            <span aria-hidden="true">Next &raquo;</span>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}