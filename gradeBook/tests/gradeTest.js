var book = require("../lib/grades").book;

exports ["setUp"] = function(callback){
    book.reset();
    callback();
};

exports ["Can compute letter grade of A"] = function(test){
    book.addGrade(100);
    book.addGrade(90);

    var result = book.getLetterGrade();

    test.equal(result, 'A');
    test.done();
}

exports ["Can compute letter grade of B"] = function(test){
    book.addGrade(90);
    book.addGrade(80);

    var result = book.getLetterGrade();

    test.equal(result, 'B');
    test.done();
}

exports ["Can compute letter grade of C"] = function(test){
    book.addGrade(80);
    book.addGrade(70);

    var result = book.getLetterGrade();

    test.equal(result, 'C');
    test.done();
}

exports ["Can compute letter grade of D"] = function(test){
    book.addGrade(70);
    book.addGrade(60);

    var result = book.getLetterGrade();

    test.equal(result, 'D');
    test.done();
}

exports ["Can compute letter grade of A"] = function(test){
    book.addGrade(60);
    book.addGrade(0);

    var result = book.getLetterGrade();

    test.equal(result, 'F');
    test.done();
}

exports["Can add new grade"] = function(test){
    book.addGrade(90);
    var count = book.getCountOfGrades();

    test.equal(count,1);
    test.done();
}

exports["Can average grades"] = function(test){
    book.addGrade(1);
    book.addGrade(2);
    var average = book.getAverage();
    test.equal(average, 1.5);
    test.done();
}