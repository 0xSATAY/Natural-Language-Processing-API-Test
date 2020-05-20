import { handleSubmit } from '../client/js/formHandler';

describe('Form Handler Test', () => {
    it('Returns true if handleSubmit exists', () => {
        expect(handleSubmit).toBeDefined();
    });
})