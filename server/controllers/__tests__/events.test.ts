import { when } from 'jest-when';
import { mockRequest, mockResponse } from '../../testUtils/mockRequest';
import { EventsService } from '../../services';
import { getAllEventsForUser } from '../events';

jest.mock('../../services/events');

describe('Events Controller', () => {
  describe('getAllEventsForUser', () => {
    it('should return a 200 when events are found', async () => {
      // Arrange
      const userId = 1;
      const req = mockRequest({ locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [{}] as any;

      when(EventsService.getAllForUser)
        .calledWith(userId)
        .mockReturnValueOnce(Promise.resolve(mockReturnValue));

      // Act
      await getAllEventsForUser(req, res);

      // Assert
      expect(EventsService.getAllForUser).toHaveBeenCalledTimes(1);
      expect(EventsService.getAllForUser).toHaveBeenLastCalledWith(userId);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(mockReturnValue);
    });

    it('should return a 404 when NO events are found', async () => {
      // Arrange
      const userId = 1;
      const req = mockRequest({ locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = undefined as any;

      when(EventsService.getAllForUser)
        .calledWith(userId)
        .mockReturnValueOnce(Promise.resolve(mockReturnValue));

      // Act
      await getAllEventsForUser(req, res);

      // Assert
      expect(EventsService.getAllForUser).toHaveBeenCalledTimes(1);
      expect(res.sendStatus).toHaveBeenCalledTimes(1);
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});
