import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function About() {
  const users = await prisma.user.findMany();

  return (
    <>
      <div>About Page</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
