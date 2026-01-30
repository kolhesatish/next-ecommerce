export default function AuthHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center space-y-2 mb-6">
      <h1 className="text-2xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="text-sm text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
