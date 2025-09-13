
export function PageHeader({ title }: { title: string }) {
    return (
        <div className="bg-primary text-primary-foreground text-center">
            <div className="container py-12 md:py-16 px-4 md:px-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl font-headline text-white">
                    {title}
                </h1>
            </div>
        </div>
    );
}
