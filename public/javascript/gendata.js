$(function () {
  $('#tab-data')
    .DataTable({
      // dom: 'Bfrtip',
      ordering: false,
      bInfo: false,
      searching: false,
      bPaginate: false,
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      orderable: false,
      columnDefs: [
        {
          targets: 4,

          orderable: false,
        },
      ],
    })
    .buttons()
    .container()
    .appendTo('#tab-data_wrapper .col-md-6:eq(0)');
});

$('.testbtn').click(function (e) {
  let numberOfAttribute = 5;
  let array = [];
  let label = [];

  for (let i = 0; i < numberOfAttribute; i++) {
    let att1 = $('#tab-data').DataTable().row(i).data()[0];
    let att2 = $('#tab-data').DataTable().row(i).data()[1];
    let att3 = $('#tab-data').DataTable().row(i).data()[2];
    let att4 = $('#tab-data').DataTable().row(i).data()[3];
    let att5 = $('#tab-data').DataTable().row(i).data()[4];
    let att6 = $('#tab-data').DataTable().row(i).data()[5];
    let att7 = $('#tab-data').DataTable().row(i).data()[6];
    let att8 = $('#tab-data').DataTable().row(i).data()[7];
    let att9 = $('#tab-data').DataTable().row(i).data()[8];
    let att10 = $('#tab-data').DataTable().row(i).data()[9];
    let att11 = $('#tab-data').DataTable().row(i).data()[10];
    let label = $(`#select${i}`).val();
    let data = {
      att1: att1,
      att2: att2,
      att3: att3,
      att4: att4,
      att5: att5,
      att6: att6,
      att7: att7,
      att8: att8,
      att9: att9,
      att10: att10,
      att11: att11,
      label: label,
    };
    // array.append(data);
    array.push(data);
  }
  // console.log(array);
  $.ajax('/gendata/add', {
    type: 'POST',
    data: { ...array },
  }).then(() => {
    window.location.href = '/gendata';
  });
});
