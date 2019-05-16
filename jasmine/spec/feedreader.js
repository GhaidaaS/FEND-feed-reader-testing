/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* it's a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(URL).toBeDefined();
                expect(URL).not.toBeNull();
             });
         });

        /* it's a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(name).toBeDefined();
                expect(name).not.toBeNull()
             });
         });
    });


    /* test suite named "The menu" */
    describe('The menu', function(){
        /* it's a test that ensures the menu element is
         * hidden by default.
         */
        it('hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* it's a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('changes visibility when the menu icon is clicked', function(){
            //when click
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //when click again
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
    });

    /* test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* It's a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
         })
        it('loud feed 0', function(){
            expect($('.entry .feed')).toBeDefined();
        });
    });

    /* test suite named "New Feed Selection" */
    describe('New Feed Selection"', function(){
        /* It's a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.*/
        beforeEach(function(done){
            loadFeed(0,function(){
                first=$('.feed').find(allFeeds.url);
            });      
            loadFeed(1,function(){
                second=$('.feed').find(allFeeds.url);
                done();
            });
        })

        it('when loaded by the loadFeed function that the content actually changes ', function(){
            expect(first).not.toBe(second);
        });
    });
}());
