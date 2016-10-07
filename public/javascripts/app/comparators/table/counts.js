/**
 * Created by AGromov on 23.08.2016.
 */

define([], function() {
    return {
        validationMessage: "Table counts differ for more than 16 times",
        severity: "warning",
        compare: function(tables) {
            var basicTable = tables[0],
                val = parseInt(basicTable.rows),
                result = true;
            if(val == false) {
                return true;
            }
            tables.forEach((table) => {
                var r = parseInt(table.rows);
                if(Math.abs(Math.log2(r / val)) > 4) {
                    result = false;
                }
            });

            return result;
        }
    };
});
