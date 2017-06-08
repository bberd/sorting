describe('Split Array function', function() {
  it('is able to split an odd array into two halves', function() {
    expect( split([5, 2, 8, 3, 9, 4, 1, 6, 7]) ).toEqual( [[5, 2, 8, 3], [9, 4, 1, 6, 7]] );

  });

  it('is able to split an even array into two halves', function() {
    expect( split([5, 2, 8, 3, 9, 4, 1, 6]) ).toEqual( [[5, 2, 8, 3], [9, 4, 1, 6]] );

  });
});


describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an odd-number array', function(){
    expect( mergeSort([5, 2, 8, 3, 9, 4, 1, 6, 7]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9] );
  });

  it('handles an even-number array', function(){
    expect( mergeSort([5, 2, 8, 3, 9, 4, 1, 6]) ).toEqual( [1, 2, 3, 4, 5, 6, 8, 9] );
  });

  it('handles an array same elements at the end', function(){
   expect( mergeSort([5, 2, 8, 3, 9, 4, 1, 6, 4, 4, 4, 4]) ).toEqual( [1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 8, 9] );
  });
});
