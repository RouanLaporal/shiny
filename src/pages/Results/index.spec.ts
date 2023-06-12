import { formatJobList, formatQueryParams } from './';


describe('FormatJobList', () =>{
    it('should add a comma to a word', () => {
        const expectedState = 'item2,';
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
    });
    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3';
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
    });
});

describe('formatQueryParams', () => {
    it('should use the right format for param', () => {
        const expectedParam = 'a0=true';
        expect(formatQueryParams({0:true})).toEqual(expectedParam);
    });

    it('should concatenate params with an &', () => {
        const expectedParam = 'a1=false&a2=true';
        expect(formatQueryParams({1:false, 2:true})).toEqual(expectedParam);
    })  
});
