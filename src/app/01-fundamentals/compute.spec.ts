import { compute } from './compute' 

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should increment 0 the input if is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})