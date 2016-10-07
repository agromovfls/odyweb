/**
 * Created by AGromov on 24.08.2016.
 */

define([
    "app/comparators/table/is_null_table",
    "app/comparators/table/field_list",
    "app/comparators/table/counts",
], function(
    is_null_table,
    field_list,
    counts
) {
    return [is_null_table, field_list, counts];
});