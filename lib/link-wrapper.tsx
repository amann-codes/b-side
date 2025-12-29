import Link from "next/link";

export function Redirect({ to, id, children }: { to: string, id: string, children: React.ReactNode }) {
    return <Link href={`/${to}/${id}`}>
        {children}
    </Link>
}