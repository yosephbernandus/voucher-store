// tanda tanya artinya tidak wajib -> misalnya title?: string;
// Tambah package classnames untuk memberikan kondisi aktif dan non aktif pada menu yg di click
// Partial karena active tidak required perlu default Value. karena pake partial sehingga MenuProps di define secara partial
// Atau bisa const { title, active = false } = props; active diset default value

import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}


export default function Menu(props: Partial<MenuProps>) {
    const { title, active, href = '/' } = props;
    const classTitle = cx({
        'nav-link': true,
        'active': active
    });

    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}
