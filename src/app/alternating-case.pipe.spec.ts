import { AlternatingCasePipe } from './alternating-case.pipe';

describe('AlternatingCasePipe', () => {
  it('create an instance', () => {
    const pipe = new AlternatingCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('Ravi to rAvI',()=>{
    const pipe = new AlternatingCasePipe();
    expect(pipe.transform('Ravi')).toBe('rAvI')
  })
});


