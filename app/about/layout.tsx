import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function About({ children }: { children: React.ReactNode }) {
  const users = await prisma.user.findMany();

  return (
    <>
      <div>About Page Layout</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {children}
    </>
  );
}
