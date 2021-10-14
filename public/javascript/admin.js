$(function () {
  $('#tab-label')
    .DataTable({
      buttons: ['csv', 'excel', 'print'],
      searching: false,
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      ordering: false,
      columnDefs: [
        {
          targets: 4,
          orderable: false,
        },
      ],
    })
    .buttons()
    .container()
    .appendTo('#tab-label_wrapper .col-md-6:eq(0)');
});
