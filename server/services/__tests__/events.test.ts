import { EventsService } from '../events';
import { prismaForTests } from '../../testUtils/prisma';
import { IEvent } from '../../utils/types';
import { prisma } from '../../utils/prisma';

jest.mock('@prisma/client');

describe('Events Service', () => {
  describe('getAllForUser', () => {
    it('should return all events for a user', async () => {
      // Arrange
      const userId = 1;
      const events: IEvent[] = [
        {
          id: 1,
          user_id: 1,
          address: null,
          city: null,
          date: null,
          state: null,
          name: 'Test Name',
          status: null,
          description: null,
          completed_at: null,
          deleted_at: null,
          created_at: new Date(),
        },
      ];
      prismaForTests.events = {
        findMany: jest.fn().mockResolvedValueOnce(events),
      };

      // Act;
      const result = await EventsService.getAllForUser(userId);

      // Assert
      expect(prisma.events.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.events.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            user_id: userId,
          },
        })
      );
      expect(result).toEqual(events);
    });
  });
});
