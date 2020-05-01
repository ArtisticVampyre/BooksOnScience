// Content Writing
const buyTitle = 'Purchase';
var tempTable = [];
var bookTable = {
    'Physics': {
        'The Feynman Lectures on Physics, Vol. I': {
            'Author': 'Richard P Feynman',
            'Link': 'https://www.bookdepository.com/Feynman-Lectures-on-Physics-Vol-I-Richard-P-Feynman/9780465024933?ref=grid-view&qid=1588332246168&sr=1-6',
            'Rating': 0,
        },
        'The Feynman Lectures on Physics, Vol. II': {
            'Author': 'Richard P Feynman',
            'Link': 'https://www.bookdepository.com/Feynman-Lectures-on-Physics-Vol-II-Richard-P-Feynman/9780465024940?ref=grid-view&qid=1588332246168&sr=1-9',
            'Rating': 0,
        },
        'The Feynman Lectures on Physics, Vol. III': {
            'Author': 'Richard P Feynman',
            'Link': 'https://www.bookdepository.com/Feynman-Lectures-on-Physics-Vol-III-Richard-P-Feynman/9780465025015?ref=grid-view&qid=1588332246168&sr=1-7',
            'Rating': 0,
        },
        'Cosmos': {
            'Author': 'Carl Sagan',
            'Link': 'https://www.bookdepository.com/Cosmos-Carl-Sagan/9780345539434?ref=grid-view&qid=1588332421972&sr=1-7',
            'Rating': 0,
        },
        'Exercises for the Feynman Lectures on Physics': {
            'Author': 'Richard P Feynman',
            'Link': 'https://www.bookdepository.com/Exercises-for-Feynman-Lectures-on-Physics-Richard-P-Feynman/9780465060719?ref=grid-view&qid=1588332383756&sr=1-11',
            'Rating': 0,
        },
        'Fizica povestita': {
            'Author': 'Cristian Presură',
            'Link': 'https://www.elefant.ro/fizica-povestita_cac31dd5-5987-4f25-bafd-071c38ea4449?gclid=Cj0KCQjwka_1BRCPARIsAMlUmEo8HmM3jad88WHsjcu5cOehRolNhhO2US-NCTzk7B6VOAJM05_tTy0aAoA-EALw_wcB',
            'Rating': 0,
        },
        'Reality Is Not What It Seems': {
            'Author': 'Carlo Rovelli',
            'Link': 'https://www.bookdepository.com/Reality-Is-Not-What-It-Seems-Carlo-Rovelli/9780141983219?ref=grid-view&qid=1588336045114&sr=1-2',
            'Rating': 0,
        },
        'Seven Brief Lessons on Physics': {
            'Author': 'Carlo Rovelli',
            'Link': 'https://www.bookdepository.com/Seven-Brief-Lessons-on-Physics-Carlo-Rovelli/9780141981727?ref=grid-view&qid=1588336045114&sr=1-1',
            'Rating': 0,
        },
        'The Order of Time': {
            'Author': 'Carlo Rovelli',
            'Link': 'https://www.bookdepository.com/Order-Time-Carlo-Rovelli/9780141984964?ref=grid-view&qid=1588336045114&sr=1-3',
            'Rating': 0,
        },
        'The Elegant Universe ': {
            'Author': 'Brian Greene',
            'Link': 'https://www.bookdepository.com/Elegant-Universe-Brian-Greene/9780393058581?pdg=dsa-19959388920:cmp-8862937091:adg-86528077382:crv-411135277650:pos-:dev-c&gclid=Cj0KCQjwka_1BRCPARIsAMlUmErljWmcRssQcqWdBVh_eLI6MIvGEGx36owCmbzt9WDunUYMXa2tFvUaAqqqEALw_wcB',
            'Rating': 0,
        },
        'Until the End of Time': {
            'Author': 'Brian Greene',
            'Link': 'https://www.bookdepository.com/Until-End-Time-Brian-Greene/9780241295984?ref=grid-view&qid=1588336254502&sr=1-1',
            'Rating': 0,
        },
        'The Fabric of the Cosmos': {
            'Author': 'Brian Greene',
            'Link': 'https://www.bookdepository.com/Fabric-Cosmos-Brian-Greene/9780141011110?ref=grid-view&qid=1588336254502&sr=1-2',
            'Rating': 0,
        },
        'The Hidden Reality': {
            'Author': 'Brian Greene',
            'Link': 'https://www.bookdepository.com/Hidden-Reality-Brian-Greene/9780307278128?ref=grid-view&qid=1588336254502&sr=1-3',
            'Rating': 0,
        },
        'Why Does E=mc2?': {
            'Author': 'Brian Cox & Jeff Forshaw',
            'Link': 'https://www.bookdepository.com/Why-Does-E-mc2-Brian-Cox/9780306819117?ref=grid-view&qid=1588336488883&sr=1-1',
            'Rating': 0,
        },
        'A Brief History Of Time': {
            'Author': 'Stephen Hawking',
            'Link': 'https://www.bookdepository.com/Brief-History-Time-Stephen-Hawking/9780857501004?ref=grid-view&qid=1588336547854&sr=1-1',
            'Rating': 0,
        },
        'History of Physics': {
            'Author': 'Max Von Laue',
            'Link': 'https://www.bookdepository.com/History-Physics-Max-Von-Laue/9780343167608?ref=grid-view&qid=1588337562666&sr=1-1',
            'Rating': 0,
        },
    },
    'Mathematics': {
        'BookTitleHere': {
            'Author': 'AuthorNameHere',
            'Link': '',
            'Rating': 0,
        },
    },
    'Science Fiction': {
        'Foundation': {
            'Author': 'Isaac Asimov',
            'Link': 'https://www.bookdepository.com/Foundation-Isaac-Asimov/9780553293357?ref=grid-view&qid=1588337095031&sr=1-1',
            'Rating': 0,
        },
        'Dune': {
            'Author': 'Frank Herbert',
            'Link': 'https://www.bookdepository.com/Dune-Frank-Herbert/9780340960196?ref=grid-view',
            'Rating': 0,
        },
        '1984': {
            'Author': 'George Orwell',
            'Link': 'https://www.bookdepository.com/1984-George-Orwell/9780141036144?ref=grid-view',
            'Rating': 0,
        },
        'Fahrenheit 451': {
            'Author': 'Ray Bradbury',
            'Link': 'https://www.bookdepository.com/Fahrenheit-451-Ray-Bradbury/9781451690316?ref=grid-view',
            'Rating': 0,
        },
    },

}

function sortArray() {
    console.log(tempTable);
    tempTable.sort(function(a, b) {
        if (a[1].Author > b[1].Author) {
            return 1;
        }
        if (b[1].Author > a[1].Author) {
            return -1;
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