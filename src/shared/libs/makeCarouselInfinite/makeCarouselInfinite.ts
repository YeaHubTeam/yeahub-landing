import { type MockFeedback } from '../../const/mockFeedback';

export const makeCarouselInfinite = (
	arr: Array<MockFeedback>,
	quantity: number,
): Array<MockFeedback> => {
	return [...arr.slice(-quantity), ...arr, ...arr.slice(0, quantity)];
};
