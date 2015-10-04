angular.module('jtbdApp')
.factory( 'jtbdListService', [ function(){
    var dingle = {};
    var jtbdList = [];

    dingle.product = null;

    dingle.all = function () {
        return jtbdList;
    };

    dingle.add = function (job) {

        if (job.title == '' || job.productId == '') {
            throw Error("There is not a title or product for this Job to be Done.");
        }

        jtbdList.push(job);
    };

    dingle.remove = function (jobId) {
        //TODO: work will need to be done here to repair tree upon removal of a node
        //for now, simply splice it and worry about the binary tree later
        jtbdList = jtbdList.splice(jobId, 1);
    };

    return dingle;
}] );