$('#addUserModal').submit((e) => {
  e.preventDefault();
  var email = $("input[name='email']").val();
  $.post('/user/checkEmail', { email: email }, (data, status) => {
    if (data.status == 'FOUND') alert('Email này đã tồn tại');
    else {
      $('#addUserModal').unbind('submit').submit();
    }
  });
});

$('.btn-delete').click((e) => {
  let email = $(this).data('email');
  // console.log(email);
  $('#deleteUserModal').modal('show');
});
