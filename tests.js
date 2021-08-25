// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe( "sayHello", function () {
    it("should be a defined function", function() {
      expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should return Hello, Jane", function() {
        expect(sayHello(name)).toBe("Hello Jane");
    });

});

describe("isFive", function(){
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean when called", function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when input is 5", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return true when input is the string '5'", function() {
        expect(isFive('5')).toBe(true)
    })
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it("should return a boolean when called", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return false when called with a boolean input", function(){
        expect(isEven("false")).toBe(false);
    });
    it("should return false when called with a boolean input", function(){
        expect(isEven("true")).toBe(false);
    });
});
