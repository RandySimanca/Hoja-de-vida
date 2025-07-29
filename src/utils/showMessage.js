// src/utils/showMessage.js
import Swal from 'sweetalert2';

export function showSuccess(msg = '') {
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: msg,
    confirmButtonColor: '#28a745'
  });
}

export function showError(msg = '') {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: msg,
    confirmButtonColor: '#dc3545'
  });
}
