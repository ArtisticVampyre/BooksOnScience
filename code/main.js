// Content Writing
const buyTitle = 'Purchase';
var tempTable = [];
var bookTable = {
    'Physics': {
        'Title': {
            'Author': 'Richard Feynamn',
            'Link': 'https://www.google.com',
        },
        'Title2': {
            'Author': 'Carl Sagan',
            'Link': 'https://www.facebook.com',
        },
        'Title3': {
            'Author': 'Richard Feynamn',
            'Link': 'https://www.facebook.com',
        },
    },
    'Mathematics': {
        'TitleOnMath': {
            'Author': '',
            'Link': '',
        },
    }
}

function sortArray() {
    console.log(tempTable);
    tempTable.sort(function(a, b) {
        if (a[1].Author > b[1].Author) {
            return -1;
        }
        if (b[1].Author > a[1].Author) {
            return 1;
        }
        return 0;
    });
    console.log(tempTable);
}

function loopTable(targetCategory) {
    for (let [category, category_obj] of Object.entries(bookTable)) {
        for (let [title, data] of Object.entries(category_obj)) {
            if (category == targetCategory) { // Check if the current category is the one we need             
                tempTable.push([title, data]);
            }
        }
    }
    sortArray();
}

function buildEntries(category) {

    console.log("Starting extraction!");
    var sectionTemplate = document.querySelector('#section_data');
    var newSection = sectionTemplate.content.cloneNode(true);
    newSection.querySelector('#category_name').innerHTML = category
    var contentHolder = newSection.querySelector('div');
    document.body.appendChild(newSection);

    for (var i = 0; i < tempTable.length; i++) {
        console.log("_build")
        var bookTemplate = sectionTemplate.content.querySelector('#book_data');
        var newBook = bookTemplate.content.cloneNode(true);
        console.log(newBook)
        newBook.querySelector('#book_author').innerHTML = tempTable[i][1].Author
        newBook.querySelector('#book_title').innerHTML = tempTable[i][0]
        newBook.querySelector('#book_link').href = tempTable[i][1].Link
        contentHolder.appendChild(newBook);
    }
    tempTable = [];
}

function loadHeader() {
    const temp1 = document.querySelector('#header_data');
    var clon1 = temp1.content.cloneNode(true);
    document.body.appendChild(clon1);
}

function loadCredits() {
    const temp1 = document.querySelector('#credits_data');
    var clon1 = temp1.content.cloneNode(true);
    document.body.appendChild(clon1);
}

function loadPage() {
    loadHeader();
    for (let [category] of Object.entries(bookTable)) {
        loopTable(category);
        buildEntries(category);
    }
    loadCredits();

}




window.onload = loadPage();