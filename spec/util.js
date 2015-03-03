describe('Util.getStreetFromAddress', function(){
  var expectResult = function(address, street) {
    expect(Util.getStreetFromAddress(address)).toEqual(street);
  };
  
  it('gets street from simple address', function() {
    expectResult('47 Caroline St', 'Caroline St');
  });
  it('includes street direction', function() {
    expectResult('47 Caroline St N', 'Caroline St N');
  });
  it('does not include Canadian postal code', function() {
    expectResult('47 Caroline St N, L8R 2R6', 'Caroline St N');
    expectResult('47 Caroline St N, L8R2R6', 'Caroline St N');
  });
  it('strips whitespace', function() {
    expectResult(' 47 Caroline St ', 'Caroline St');
  });
  it('ignores unit numbers', function() {
    expectResult('1202, 111 Market St', 'Market St');
    expectResult('1202B, 111 Market St', 'Market St');
    expectResult('PH5, 150 Market St', 'Market St');
    expectResult('? #1, 150 Market St', 'Market St');
  });
  it('ignores fully string unit numbers', function() {
    expectResult('Unit B, 602 Goldthread St, Waterloo, ON', 'Goldthread St');
  });
});