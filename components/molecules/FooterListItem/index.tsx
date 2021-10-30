import Link from "next/link";

interface FooterListItemProps {
    desc: string;
    href: string;
}


export default function FooterListItem(props: Partial<FooterListItemProps>) {
    const { desc, href = "/" } = props;
    return (
        <li className="mb-6">
            <Link href={href}>
                <a className="text-lg color-palette-1 text-decoration-none">{desc}</a>
            </Link>
        </li>
    )
}
