function hapusMenu(url) {

    Swal.fire({
        title:  'Are you sure?',
                text: "Yakin ingin hapus menu?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cencelButtonColor: '#d33',
                confirmButtontext: 'Ya, Hapus!',
    }).then((result) =>{
        if(result.value) {
            document.location.href = url;
        }
    })
}
function deleteRole(url) {
    Swal.fire({
        title:  'Are you sure?',
                text: "Yakin ingin hapus role?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cencelButtonColor: '#d33',
                confirmButtontext: 'Ya, Hapus!',
    }).then((result) =>{
        if(result.value) {
            document.location.href = url;
        }
    })
}
function hapusSubmenu(url) {
    Swal.fire({
        title:  'Are you sure?',
                text: "Yakin ingin hapus sub menu?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cencelButtonColor: '#d33',
                confirmButtontext: 'Ya, Hapus!',
    }).then((result) =>{
        if(result.value) {
            document.location.href = url;
        }
    })
}