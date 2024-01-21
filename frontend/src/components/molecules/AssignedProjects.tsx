import LeftlinedHeading from '../atoms/LeftlineText';

export default function AssignedProjects({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <>
      <LeftlinedHeading
        sx={{ marginTop: 1, marginBottom: 1 }}
        variant="subtitle1"
      >
        参画プロジェクト事例
      </LeftlinedHeading>
      {Array.isArray(children) ? children?.map((project) => project) : children}
    </>
  );
}
