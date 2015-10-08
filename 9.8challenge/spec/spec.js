var yourCode = ('../warmup.js')


describe('nested', function(){
  it('Takes an array and turns it into an object', function(){
    expect(yourCode.nested([
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]).toEqual({
  "1934356360": {
    "title": "Learn to Program",
    "author": "Chris Pine",
    "isbn10": 1934356360
  },
  "1593275846": {
    "title": "Eloquent Javascript",
    "author": "Marijn Haverbeke",
    "isbn10": 1593275846
  }
}))
  });
});