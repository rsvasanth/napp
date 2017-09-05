'use strict';

module.exports = function(Member) {

  Member.validatesPresenceOf('package');
   Member.validatesInclusionOf('gender', {in: ['Male', 'Female']});
  // Member.validatesExclusionOf('domain', {in: ['www', 'billing', 'admin']});
   Member.validatesNumericalityOf('accountnumber', {int: true});

   Member.validatesUniquenessOf( 'accountnumber',{message: 'accountnumber is not unique'});
   Member.validatesLengthOf('contribution', {min:3, message: {min: 'contribution is too short'}});


};
