import { prisma } from '../utils/prisma';

async function getAllForUser(userId: number) {
  return await prisma.events.findMany({
    where: {
      user_id: userId,
    },
  });
}

export const EventsService = {
  getAllForUser,
};
