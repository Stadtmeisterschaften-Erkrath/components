type Props = {
    className?: string;
    crumbs: Crumb[];
};

type Crumb = {
    label: string;
    href?: string;
};

export default function Breadcrumbs(props: Props) {
    return (
        <nav className={props.className}>
            <ol className="list-reset flex text-gray-600">
                {props.crumbs.map((crumb, index) => {
                    return (
                        <li key={index} className="flex items-center">
                            {crumb.href ? (
                                <a href={crumb.href} className="hover:text-gray-800">
                                    {crumb.label}
                                </a>
                            ) : (
                                <span>{crumb.label}</span>
                            )}
                            {index < props.crumbs.length - 1 && (
                                <div className={`px-2 fill-gray-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10" viewBox="0 0 320 512">
                                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                    </svg>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

