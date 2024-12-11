export const metadata = {
    title: 'Nest.js',
    description: 'Generate by Next.js',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}