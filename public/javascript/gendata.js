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
      Hometown: att1,
      Current_Home: att2,
      Salary: att3,
      Job: att4,
      Degree: att5,
      Age: att6,
      Num_Relative: att7,
      Credit: att8,
      Vehicle: att9,
      Marriage: att10,
      Interest: att11,
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
  })
});

$('.gereratedata').click(function (e) {
  $.get('/gendata').then(() => {
    window.location.href = '/gendata';
  });
});
