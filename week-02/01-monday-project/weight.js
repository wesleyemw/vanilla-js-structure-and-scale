/**
 * 
    Grams to Kilograms (grams / 1000)
    Grams to Milligrams (grams * 1000)
    Kilograms to Grams (kg * 1000)
    Kilograms to Milligrams (kg * 1000 * 1000)
    Milligrams to Grams (mg / 1000)
    Milligrams to Kilograms (mg / 1000 / 1000)


    IIFE
    (function () {
	// Code goes here...
})();


 */


    let Convert = (function () {
        /**
         * 
         * @param {Number} weight The weight
         * @param {Object} settings Options and settings
         * @returns conversion from milligrams to another units
         */

 

        /**
         * The Constructor object
         */
        function Constructor (weight, options = {}) {
                
            // Adding options and settings - a form to user pass options to library without touching the core
            let settings = Object.assign({
                units: 'mg'
            }, options);

            
            // Make sure valid units were provided
            if (!['mg', 'grams', 'kg'].includes(settings.units)) {
                throw `[Convert.js]: "${settings.units}" is not a valid weight`;
            }


            // define instance properties
            // old this.weight = weight;
            // new - with a private function thats convert all values to default milligrams
            this.weight = weightToMg(weight, settings.units);

        }

        // here comes the private function 
        function weightToMg (weight, units) {
            if (units === 'grams') return weight * 1000;
            if (units === 'kg') return weight * 1000 * 1000;
            return weight;
        }

        Constructor.prototype.inMg = function (weight) {
            return this.weight;
        }


        Constructor.prototype.inGrams = function (weight) {
            return this.weight / 1000;
        }

        // function gramsToMg (grams) {
        //     return ( grams * 1000 );
        // }

        Constructor.prototype.inKg = function (weight) {
            return this.weight / 1000 / 1000;
        }

        // new methods for chaining - addMG / addGrams / addKg 

        Constructor.prototype.addMg = function (amount) {
            this.weight = this.weight + amount;
            return this;
        }

        Constructor.prototype.addGrams = function (amount) {
            this.weight = this.weight + (amount * 1000);
            return this;
        }

        Constructor.prototype.addKg = function (amount) {
            this.weight = this.weight + (amount * 1000 * 1000);
            return this;
        }


        // Export the constructor object
	    return Constructor;

    })();