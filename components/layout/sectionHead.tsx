export const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
    <div className="flex items-center gap-2 mb-4 mt-8">
        <Icon className="text-primary" size={20} />
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
    </div>
);