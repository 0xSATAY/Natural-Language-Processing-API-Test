import { checkInput } from '../client/js/nameChecker';

describe('Check Name Test', () => {
    it('Returns true if checkInput exists', () => {
        expect(checkInput).toBeDefined();
    });
})