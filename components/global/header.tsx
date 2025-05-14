import { routes } from '@/utils/routes';

export default function Header() {
    return (
        <>
            <div className='flex flex-row'>
                {Object.entries(routes).map(([key, path]) => (
                    <a key={key} href={path} className="mx-2">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                ))}
            </div>
        </>
    );
}