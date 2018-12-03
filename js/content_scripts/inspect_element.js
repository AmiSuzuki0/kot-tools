(function() {

  chrome.storage.sync.get(null, function(items) {
    var workStart      = items.selected_workStart　? items.selected_workStart : "1000";
    var workEnd        = items.selected_workEnd ? items.selected_workEnd : "1900";
    var lunchtimeStart = items.selected_lunchtimeStart ? items.selected_lunchtimeStart : "1300";
    var lunchtimeEnd   = items.selected_lunchtimeEnd ? items.selected_lunchtimeEnd : "1400";

    var recording_type_code_1 = $('#recording_type_code_1').val(1);
    var recording_type_code_2 = $('#recording_type_code_2').val(2);
    var recording_type_code_3 = $('#recording_type_code_3').val(3);
    var recording_type_code_4 = $('#recording_type_code_4').val(4);

    var recording_timestamp_time_1 = $('#recording_timestamp_time_1').val(workStart);
    var recording_timestamp_time_2 = $('#recording_timestamp_time_2').val(workEnd);
    var recording_timestamp_time_3 = $('#recording_timestamp_time_3').val(lunchtimeStart);
    var recording_timestamp_time_4 = $('#recording_timestamp_time_4').val(lunchtimeEnd);

    $('#recording_timestamp_hour_1').val(workStart.substr(0,2));
    $('#recording_timestamp_minute_1').val(workStart.substr(3,2));
    $('#recording_timestamp_hour_2').val(workEnd.substr(0,2));
    $('#recording_timestamp_minute_2').val(workEnd.substr(3,2));
    $('#recording_timestamp_hour_3').val(lunchtimeStart.substr(0,2));
    $('#recording_timestamp_minute_3').val(lunchtimeStart.substr(3,2));
    $('#recording_timestamp_hour_4').val(lunchtimeEnd.substr(0,2));
    $('#recording_timestamp_minute_4').val(lunchtimeEnd.substr(3,2));

  });

}).call(this);